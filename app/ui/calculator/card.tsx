"use client";

// Is our connection still working
import { useState, useEffect } from "react";
import { Iteration, calculateCropET } from "@/app/lib/utils";
import {
  months,
  weeks,
  saveExtractedData,
  extractedData,
} from "@/app/lib/data";
import * as XLSX from "xlsx";
import { ExtractedData } from "@/app/lib/utils";

export default function Card() {
  // eslint-disable-next-line
  const [data, setData] = useState<any[]>(extractedData);

  const [acres, setAcres] = useState<number | "">(0);
  const [crop, setCrop] = useState<string>("");
  const [row, setRow] = useState<number | "">(0);
  const [tree, setTree] = useState<number | "">(0);
  const [cropET, setCropET] = useState<number | "">(0);
  const [powerCapacity, setPowerCapacity] = useState<number | "">(0);
  const [week, setWeek] = useState<number>();
  const [month, setMonth] = useState<string>("January");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    calculateCropET(extractedData, month, setCropET);
  }, [month]);

  if (!isClient) {
    return null;
  }

  const reader = new FileReader();
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet) as ExtractedData[];
      saveExtractedData(sheetData);
      setData(sheetData);
      extractedData.map((data) => {
        if (data.__EMPTY === month) {
          setCropET(data.k2 * data.ET2);
        }
      });
    };
    if (file) {
      reader.readAsArrayBuffer(file);
    }
  };

  const calculateWaterQuantity = () => {
    console.log("Caluclating water quantity");
    console.log(acres);
    console.log(crop);
    console.log(month);
    console.log(week);
    console.log(extractedData);
  };

  const handleSetMonth = (month: string) => {
    setMonth(month);
  };

  const handleSetWeek = (week: string) => {
    setWeek(Number(week));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full">
        <input
          className="hidden"
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer bg-black text-white rounded-lg block p-3 w-full text-center font-bold"
        >
          Upload Excel Sheet
        </label>
        {/* Name of uploaded file */}
        <p className="text-center text-sm mt-2">
          {data.length > 0 ? "File uploaded successfully" : ""}
        </p>
      </div>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-4 dark:bg-gray-800 dark:border-gray-700 mt-5">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
          Irrigation Calculator
        </h5>
        <div className="flex items-center justify-between mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-xl">
            Acres(ha):
          </label>
          <input
            type="number"
            id="email"
            className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
            value={acres}
            onChange={(e) => {
              const value = e.target.value;
              setAcres(value === "" ? "" : Number(value));
            }}
          />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-xl">
            Ac:
          </label>
        </div>
        <div className="flex items-center justify-between mb-5">
          <label className="w-3/10 block mb-2 text-sm font-medium text-gray-900 dark:text-white text-xl mr-5">
            Crop:
          </label>
          <select
            id="crop"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white w-full"
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
          <h3 className="font-bold text-lg">Spacing</h3>
          <div className="flex flex-col justify-center items-center">
            <div className="w-8/10 flex items-center justify-between">
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white md: text-lg">
                Row (ft):
              </label>
              <input
                type="number"
                id="row"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white w-7/10"
                required
                value={row}
                onChange={(e) => {
                  const value = e.target.value;
                  setRow(value === "" ? "" : Number(value));
                }}
              />
            </div>
            <div className="w-8/10 flex items-center justify-between mt-3">
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Tree (ft):
              </label>
              <input
                type="number"
                id="tree"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white w-7/10"
                required
                value={tree}
                onChange={(e) => {
                  setTree(e.target.value === "" ? "" : Number(e.target.value));
                }}
              />
            </div>
          </div>
        </div>
        <Iteration
          name={"Month"}
          contents={months}
          setContent={handleSetMonth}
        />
        <Iteration name={"Week"} contents={weeks} setContent={handleSetWeek} />
        <div className="flex items-center justify-between">
          <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white w-3/10 mr-5">
            Crop ET:
          </label>
          <input
            type="number"
            id="crop-et"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
            value={cropET}
            onChange={(e) => {
              const value = e.target.value;
              setCropET(value === "" ? "" : Number(value));
            }}
            readOnly
          />
        </div>
        <div className="flex items-center justify-between my-5">
          <label className="block w-3/10 mb-2 text-lg font-medium text-gray-900 dark:text-white mr-3">
            Power Capacity:
          </label>
          <input
            type="number"
            id="power-capacity"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white w-full"
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
    </div>
  );
}
