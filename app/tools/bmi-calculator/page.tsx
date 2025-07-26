// app/bmi-calculator/page.tsx
"use client";

import { useState } from 'react';

export default function BMICalculator() {
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>('');

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const calculatedBmi = weight / (heightInMeters * heightInMeters);
      setBmi(parseFloat(calculatedBmi.toFixed(1)));
      determineCategory(calculatedBmi);
    }
  };

  const determineCategory = (bmiValue: number) => {
    if (bmiValue < 18.5) {
      setBmiCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setBmiCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setBmiCategory('Overweight');
    } else {
      setBmiCategory('Obese');
    }
  };

  const resetForm = () => {
    setHeight(170);
    setWeight(70);
    setBmi(null);
    setBmiCategory('');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">BMI Calculator</h1>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              min="100"
              max="250"
            />
          </div>

          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              min="30"
              max="200"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={calculateBMI}
              className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Calculate BMI
            </button>
            <button
              onClick={resetForm}
              className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Reset
            </button>
          </div>

          {bmi !== null && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800">Your Results</h2>
              <p className="mt-2 text-gray-600">Your BMI: <span className="font-bold">{bmi}</span></p>
              <p className="text-gray-600">Category: <span className="font-bold">{bmiCategory}</span></p>
              
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-700">BMI Categories:</h3>
                <ul className="mt-1 text-sm text-gray-600 space-y-1">
                  <li>Underweight: BMI less than 18.5</li>
                  <li>Normal weight: BMI 18.5–24.9</li>
                  <li>Overweight: BMI 25–29.9</li>
                  <li>Obese: BMI 30 or greater</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}