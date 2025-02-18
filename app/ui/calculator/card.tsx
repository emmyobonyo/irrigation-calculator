"use client";

// Is our connection still working
import { useState, useEffect } from "react";

export default function Card() {
  const [acres, setAcres] = useState<number | "">(0);
  const [crop, setCrop] = useState<string>("");
  const [row, setRow] = useState<number | "">(0);
  const [tree, setTree] = useState<number | "">(0);
  const [cropET, setCropET] = useState<number | "">(0);
  const [powerCapacity, setPowerCapacity] = useState<number | "">(0);
  const [week, setWeek] = useState<number>();
  const [month, setMonth] = useState<string>();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const months = [
    { id: 1, month: "January" },
    { id: 2, month: "February" },
    { id: 3, month: "March" },
    { id: 4, month: "April" },
    { id: 5, month: "May" },
    { id: 6, month: "June" },
    { id: 7, month: "July" },
    { id: 8, month: "August" },
    { id: 9, month: "September" },
    { id: 10, month: "October" },
    { id: 11, month: "November" },
    { id: 12, month: "December" },
  ];

  const weeks = [
    { id: 1, week: 1 },
    { id: 2, week: 2 },
    { id: 3, week: 3 },
    { id: 4, week: 4 },
  ];

  const calculateWaterQuantity = () => {
    console.log("Caluclating water quantity");
    console.log(acres);
    console.log(crop);
    console.log(month);
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
        Irrigation Calculator
      </h5>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Acres(ha):
        </label>
        <input
          type="number"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-5"
          required
          value={acres}
          onChange={(e) => {
            const value = e.target.value;
            setAcres(value === "" ? "" : Number(value));
          }}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Crop:
        </label>
        <select
          id="crop"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-5"
          required
          onChange={(e) => {
            const value = e.target.value;
            setCrop(value);
          }}
        >
          <option value="">Select a crop</option>
          <option value="crop1">Almond</option>
          <option value="crop2">Pistachio</option>
          <option value="crop3">Citrus</option>
        </select>
      </div>
      <div className="mb-5">
        <h3 className="font-bold">Spacing</h3>
        <div className="flex items center justify-between">
          <div className="w-4.5/10">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Row (ft):
            </label>
            <input
              type="number"
              id="row"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white "
              required
              value={row}
              onChange={(e) => {
                const value = e.target.value;
                setRow(value === "" ? "" : Number(value));
              }}
            />
          </div>
          <div className="w-4.5/10">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tree (ft):
            </label>
            <input
              type="number"
              id="tree"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white "
              required
              value={tree}
              onChange={(e) => {
                setTree(e.target.value === "" ? "" : Number(e.target.value));
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Month:
        </label>
        <select
          id="week"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-5"
          required
          onChange={(e) => {
            const value = e.target.value;
            setMonth(value);
          }}
        >
          {months.map((month) => (
            <option key={month.id} value={month.month}>
              {month.month}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Week:
        </label>
        <select
          id="week"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-5"
          required
          onChange={(e) => {
            const value = e.target.value;
            setWeek(Number(value));
          }}
        >
          {weeks.map((week) => (
            <option key={week.id} value={week.week}>
              {week.week}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Crop ET:
        </label>
        <input
          type="number"
          id="crop-et"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-5"
          required
          value={cropET}
          onChange={(e) => {
            const value = e.target.value;
            setCropET(value === "" ? "" : Number(value));
          }}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Power Capacity:
        </label>
        <input
          type="number"
          id="power-capacity"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-5"
          required
          value={powerCapacity}
          onChange={(e) => {
            const value = e.target.value;
            setPowerCapacity(value === "" ? "" : Number(value));
          }}
        />
      </div>

      <button
        className="w-full text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={calculateWaterQuantity}
      >
        Calculate Water Quantity
      </button>
    </div>
  );
}
