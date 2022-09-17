import React from "react";

function Table({ endpoint }: { endpoint: string }) {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-base text-left text-gray-400">
        <tbody>
          <tr className=" border-b bg-hybrid dark:border-gray-700 h-20">
            <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <span className="bg-greeny px-5 py-4 rounded-lg">GET</span>
              <span className=" px-5 mx-16 py-4 ">{endpoint}</span>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Table;

export function UpperTable({
  header1,
  header2,
}: {
  header1: string;
  header2: string;
}) {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-base text-left text-gray-400">
        <thead className="text-xs uppercase bg-hybrid  text-gray-400 border-b border-gray-700">
          <tr>
            <th>
              <th className="py-3 px-8 ">{header1}</th>
              <th className="py-3 px-14 ">{header2}</th>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
