import React from "react";

function Table({ endpoint }: { endpoint: string }) {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
      <table className="w-full text-base text-left text-gray-400">
        <tbody>
          <tr className=" border-b bg-hybrid dark:border-gray-700 h-20">
            <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <span className="bg-greeny px-5 py-4 rounded-lg text-xs">
                GET
              </span>
              <span className=" px-5 mx-2 py-4 text-xs ">{endpoint}</span>
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
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
      <table className="w-full text-left text-gray-400">
        <thead className="text-xs uppercase bg-hybrid  text-gray-400 border-b border-gray-700">
          <tr>
            <th>
              <th className="py-3 px-7 text-xs">{header1}</th>
              <th className="py-3  text-xs">{header2}</th>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
