"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Movie {
  id?: string;
  name: string;
  imageUrl: string;
  year: string;
  quality: string;
  director: string;
  genre: string;
  description: string;
  telegramUrl: string;
  popular: string; // 'ok' or 'NA'
}

// List of recognized genres
const GENRES = [
  'action', 'adventure', 'comedy', 'drama', 'fantasy', 
  'horror', 'mystery', 'romance', 'romantic', 'science fiction', 'sci-fi', 
  'thriller', 'western'
];

export default function MovieTime() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Replace with your SheetDB.io API endpoint
  const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/3800byekdj2hu';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(SHEETDB_API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data);
        // Initially show only popular movies (where popular === 'ok')
        setFilteredMovies(data.filter((movie: Movie) => movie.popular === 'ok'));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      // When search is empty, show only popular movies
      setFilteredMovies(movies.filter(movie => movie.popular === 'ok'));
      return;
    }

    const searchLower = searchTerm.toLowerCase();
    
    // Check if search term matches any genre
    const isGenreSearch = GENRES.some(genre => 
      genre.toLowerCase().includes(searchLower) || 
      searchLower.includes(genre.toLowerCase())
    );

    const results = movies.filter(movie => {
      if (isGenreSearch) {
        // Search by genre
        const genres = movie.genre.toLowerCase().split(',').map(g => g.trim());
        return genres.some(genre => 
          genre.includes(searchLower) || 
          searchLower.includes(genre)
        );
      } else {
        // Search by movie name
        const movieNameLower = movie.name.toLowerCase();
        return movieNameLower.includes(searchLower);
      }
    });

    setFilteredMovies(results);
  }, [searchTerm, movies]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled in the useEffect above
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700">Loading movies...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
          <h2 className="text-xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-700">{error}</p>
          <p className="mt-4 text-sm text-gray-500">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Movie Time
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Search and download your favorite movies
          </p>
        </div>

        <div className="mb-8 max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for movies or genres (action, thriller, etc.)..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-r-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Search
            </button>
          </form>
          <div className="text-sm text-gray-600 mt-2">
            Try searching for movies or genres like: action, thriller, romance, comedy
          </div>
        </div>

        {filteredMovies.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">
              {searchTerm 
                ? `No results found for "${searchTerm}"` 
                : 'No popular movies available'}
            </h3>
            {!searchTerm && (
              <p className="mt-2 text-gray-500">Try searching for a movie or genre</p>
            )}
          </div>
        ) : (
          <>
            {!searchTerm ? (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800">Popular Movies</h2>
                <p className="text-gray-600">Check out these trending movies</p>
              </div>
            ) : (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800">
                  {GENRES.some(g => g.toLowerCase().includes(searchTerm.toLowerCase())) 
                    ? `${searchTerm} Movies` 
                    : `Movies matching "${searchTerm}"`}
                </h2>
                <p className="text-gray-600">{filteredMovies.length} movies found</p>
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMovies.map((movie) => (
                <div key={movie.id || movie.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
                  {/* Popular tag */}
                  {movie.popular === 'ok' && (
                    <div className="absolute top-2 right-2 bg-red-500 text-black text-xs font-bold px-2 py-1 rounded-md z-10">
                      Popular
                    </div>
                  )}
                  
                  <div className="relative h-64">
                    <Image
                      src={movie.imageUrl || '/placeholder-movie.jpg'}
                      alt={movie.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-gray-900 truncate">{movie.name}</h3>
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded">
                        {movie.year}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <span className="mr-2">⭐ {movie.quality}</span>
                      <span>🎬 {movie.director}</span>
                    </div>
                    <div className="mt-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
                        {movie.genre}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-gray-500 line-clamp-3">
                      {movie.description}
                    </p>
                    <div className="mt-4">
                      <a
                        href={movie.telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-telegram-500 hover:bg-telegram-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-telegram-500"
                        style={{ backgroundColor: '#0088cc' }}
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.429.26l.213-3.05 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                        </svg>
                        Download from Telegram
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}