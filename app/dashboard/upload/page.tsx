"use client";

import { useState } from "react";
import Papa, { unparse } from "papaparse";
import { cleanCSVData } from "@/utils/csv";
import { isInvalidValue } from "@/utils/validation";

export default function UploadPage() {
  const [data, setData] = useState<Record<string, string>[]>([]);
  const [search, setSearch] = useState("");

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsedData = results.data as Record<string, string>[];
        const cleanedData = cleanCSVData(parsedData);
        setData(cleanedData);
      },
    });
  };

  const downloadCSV = () => {
    if (filteredData.length === 0) return;

    const csv = unparse(filteredData);

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Progress-report.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <>
      <h1 className="text-4xl font-bold">Upload CSV</h1>

      <p className="mt-2 text-slate-400">
        Upload a participant progress report.
      </p>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="mt-6 block w-full cursor-pointer rounded-lg border border-slate-700 bg-slate-900 p-3 text-white file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
      />

      {data.length > 0 && (
        <>
          <input
            type="text"
            placeholder="🔍 Search participant..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-6 w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-slate-800 p-6">
              <h3 className="text-sm text-slate-400">Total Participants</h3>
              <p className="mt-2 text-3xl font-bold">{filteredData.length}</p>
            </div>

            <div className="rounded-lg bg-slate-800 p-6">
              <h3 className="text-sm text-slate-400">Visible Columns</h3>
              <p className="mt-2 text-3xl font-bold">
                {Object.keys(filteredData[0]).length}
              </p>
            </div>

            <div className="rounded-lg bg-slate-800 p-6">
              <h3 className="text-sm text-slate-400">Processed Records</h3>
              <p className="mt-2 text-3xl font-bold">{filteredData.length}</p>
            </div>
          </div>

          <button
            onClick={downloadCSV}
            className="mt-6 mb-6 rounded-lg bg-green-600 px-6 py-3 font-semibold hover:bg-green-700"
          >
            📥 Download Cleaned CSV
          </button>

          <div className="overflow-auto rounded-lg border border-slate-700">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-800">
                <tr>
                  {Object.keys(filteredData[0]).map((key) => (
                    <th
                      key={key}
                      className="border border-slate-700 px-4 py-2 text-left"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, i) => (
                      <td
                        key={i}
                        className={`border border-slate-700 px-4 py-2 ${
                          isInvalidValue(String(value))
                            ? "bg-red-100 text-red-700 font-semibold"
                            : ""
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}