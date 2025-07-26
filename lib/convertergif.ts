import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";
import GIF from 'gif.js';

let ffmpegInstance: FFmpeg | null = null;

const initializeFFmpeg = async (): Promise<FFmpeg> => {
  if (ffmpegInstance && ffmpegInstance.loaded) return ffmpegInstance;

  try {
    ffmpegInstance = new FFmpeg();
    ffmpegInstance.on("log", ({ message }) => console.debug("FFmpeg log:", message));
    
    await ffmpegInstance.load({
      coreURL: "https://unpkg.com/@ffmpeg/core@0.12.2/dist/ffmpeg-core.js",
    });
    
    return ffmpegInstance;
  } catch (error) {
    console.error("FFmpeg initialization failed:", error);
    throw new Error("Failed to initialize FFmpeg");
  }
};

export const mp4ToGif = async (file: File): Promise<Blob> => {
  // First try FFmpeg conversion
  try {
    const ffmpeg = await initializeFFmpeg();
    const inputName = "input.mp4";
    const outputName = "output.gif";
    
    await ffmpeg.writeFile(inputName, await fetchFile(file));
    
    await ffmpeg.exec([
      "-i", inputName,
      "-vf", "fps=12,scale=640:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse",
      "-loop", "0",
      outputName
    ]);
    
    const data = await ffmpeg.readFile(outputName);
    
    // Clean up
    await ffmpeg.deleteFile(inputName);
    await ffmpeg.deleteFile(outputName);
    
    return new Blob([data], { type: "image/gif" });
  } catch (ffmpegError) {
    console.error("FFmpeg conversion failed, trying GIF.js fallback:", ffmpegError);
    return await gifJsConversion(file);
  }
};

const gifJsConversion = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      reject(new Error("Canvas context not available"));
      return;
    }

    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;

    // Use local worker script
    const gif = new GIF({
      workers: 2,
      quality: 10,
      width: canvas.width,
      height: canvas.height,
      workerScript: '/gif.worker.js' // Now served from your public folder
    });

    video.onloadedmetadata = () => {
      // Set dimensions (max 640x480, maintain aspect ratio)
      const scaleFactor = Math.min(
        640 / video.videoWidth,
        480 / video.videoHeight,
        1
      );
      canvas.width = video.videoWidth * scaleFactor;
      canvas.height = video.videoHeight * scaleFactor;
      
      gif.options.width = canvas.width;
      gif.options.height = canvas.height;
      
      // Start frame capture
      captureFrames(video, canvas, ctx, gif, resolve, reject);
    };

    video.onerror = () => {
      reject(new Error("Failed to load video"));
    };

    gif.on('finished', (blob: Blob) => {
      resolve(blob);
    });

    gif.on('abort', () => {
      reject(new Error("GIF encoding aborted"));
    });

    video.src = URL.createObjectURL(file);
    video.load();
  });
};

const captureFrames = (
  video: HTMLVideoElement,
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  gif: GIF,
  resolve: (blob: Blob) => void,
  reject: (error: Error) => void
) => {
  const targetFrames = 15;
  const duration = Math.min(video.duration, 10); // Max 10 seconds
  const interval = duration / targetFrames;
  let currentTime = 0;
  let framesCaptured = 0;

  const captureFrame = () => {
    if (currentTime > duration || framesCaptured >= targetFrames) {
      gif.render();
      return;
    }

    video.currentTime = currentTime;
  };

  video.onseeked = () => {
    try {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      gif.addFrame(canvas, { 
        copy: true, 
        delay: interval * 1000,
        dispose: 1 // Clear between frames
      });
      
      framesCaptured++;
      currentTime += interval;
      captureFrame();
    } catch (error) {
      reject(new Error(`Frame capture failed: ${error}`));
    }
  };

  captureFrame();
};