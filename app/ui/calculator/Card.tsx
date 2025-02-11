"use client";

import { useState } from "react";

export default function Card() {
  const [fieldArea, setFieldArea] = useState(0);
  const [waterRequirement, setWaterRequirement] = useState(0);
  const [irrigationEfficiency, setIrrigationEfficiency] = useState(0);
  const [irrigationDaysPerWeek, setIrrigationDaysPerWeek] = useState(0);
  const [result, setResult] = useState("");

  const calculateWaterQuantity = () => {
    if (
      fieldArea <= 0 ||
      waterRequirement <= 0 ||
      irrigationEfficiency <= 0 ||
      irrigationDaysPerWeek <= 0
    ) {
      setResult(`Please Enter a value that's greater than 0`);
      return;
    }
    const waterQuantity =
      (fieldArea * waterRequirement) / (irrigationEfficiency / 100);
    const weeklyWaterQuantity = waterQuantity * irrigationDaysPerWeek;
    setResult(
      `Water Quantity Required: ${waterQuantity} L/day, Weekly Water Quantity: ${weeklyWaterQuantity} L`
    );
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
        Irrigation Calculator
      </h5>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Field Area(ha):
        </label>
        <input
          type="number"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-5"
          required
          value={fieldArea}
          onChange={(e) => setFieldArea(Number(e.target.value))}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Water Requirement (mm/day):
        </label>
        <input
          type="number"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-5"
          required
          value={waterRequirement}
          onChange={(e) => setWaterRequirement(Number(e.target.value))}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Irrigation Efficiency (%):
        </label>
        <input
          type="number"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-5"
          required
          value={irrigationEfficiency}
          onChange={(e) => setIrrigationEfficiency(Number(e.target.value))}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Irrigation Days per Week:
        </label>
        <input
          type="number"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-5"
          required
          value={irrigationDaysPerWeek}
          onChange={(e) => setIrrigationDaysPerWeek(Number(e.target.value))}
        />
      </div>
      <button
        className="w-full text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={(e) => calculateWaterQuantity()}
      >
        Calculate Water Quantity
      </button>
      {result !== "" && (
        <p className="mt-5 text-gray-900 dark:text-white">{result}</p>
      )}
    </div>
  );
}
