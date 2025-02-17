"use client";

// Is our connection still working
import { useState, useEffect } from "react";

export default function Card() {
  const [fieldArea, setFieldArea] = useState<number | "">(0);
  const [waterRequirement, setWaterRequirement] = useState<number | "">(0);
  const [irrigationEfficiency, setIrrigationEfficiency] = useState<number | "">(
    0
  );
  const [irrigationDaysPerWeek, setIrrigationDaysPerWeek] = useState<
    number | ""
  >(0);
  const [result, setResult] = useState("");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const calculateWaterQuantity = () => {
    if (
      fieldArea == undefined ||
      waterRequirement == undefined ||
      irrigationEfficiency == undefined ||
      irrigationDaysPerWeek == undefined
    ) {
      setResult(`It has retuned an empty value, please enter a value`);
      return;
    }

    if (
      Number(fieldArea) <= 0 ||
      Number(waterRequirement) <= 0 ||
      Number(irrigationEfficiency) <= 0 ||
      Number(irrigationDaysPerWeek) <= 0
    ) {
      setResult(`Please Enter a value that's greater than 0`);
      return;
    }
    const waterQuantity =
      (Number(fieldArea) * Number(waterRequirement)) /
      (Number(irrigationEfficiency) / 100);
    const weeklyWaterQuantity = waterQuantity * Number(irrigationDaysPerWeek);
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
          onChange={(e) => {
            const value = e.target.value;
            setFieldArea(value === "" ? "" : Number(value));
          }}
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
          onChange={(e) => {
            const value = e.target.value;
            setWaterRequirement(value === "" ? "" : Number(value));
          }}
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
          onChange={(e) => {
            const value = e.target.value;
            setIrrigationEfficiency(value === "" ? "" : Number(value));
          }}
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
          onChange={(e) => {
            const value = e.target.value;
            setIrrigationDaysPerWeek(value === "" ? "" : Number(value));
          }}
        />
      </div>
      <button
        className="w-full text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={calculateWaterQuantity}
      >
        Calculate Water Quantity
      </button>
      {result !== "" && (
        <p className="mt-5 text-gray-900 dark:text-white">{result}</p>
      )}
    </div>
  );
}
