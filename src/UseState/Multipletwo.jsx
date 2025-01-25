import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAddition = () => setResult(Number(num1) + Number(num2));
  const handleSubtraction = () => setResult(Number(num1) - Number(num2));
  const handleMultiplication = () => setResult(Number(num1) * Number(num2));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Simple Calculator
        </h1>

        <div className="flex flex-col space-y-4 mb-4">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex space-x-4 mb-4">
          <button
            onClick={handleAddition}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
          <button
            onClick={handleSubtraction}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Subtract
          </button>
          <button
            onClick={handleMultiplication}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
          >
            Multiply
          </button>
        </div>

        {result !== null && (
          <div className="text-lg font-medium text-center text-gray-700">
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
