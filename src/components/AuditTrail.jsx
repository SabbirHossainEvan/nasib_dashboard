import React, { useState } from "react";
import { Filter, Download, Calendar } from "lucide-react";

const AuditTrail = () => {

  const formatDate = (date) => date.toISOString().split("T")[0];

  const today = new Date();
  const lastFiveDays = new Date();
  lastFiveDays.setDate(today.getDate() - 5);


  const [startDate, setStartDate] = useState(formatDate(lastFiveDays));
  const [endDate, setEndDate] = useState(formatDate(today));

  const auditData = [
    {
      id: 1,
      timestamp: "Oct 22, 2025, 11:25 AM",
      admin: "admin1",
      type: "User Balance Adjustment",
      typeColor: "text-red-400",
      details: "Adjusted balance for user1 by -$850.49",
      ip: "192.168.123.152",
    },
    {
      id: 2,
      timestamp: "Oct 22, 2025, 11:25 AM",
      admin: "admin1",
      type: "Logout",
      typeColor: "text-green-400",
      details: "Action performed on system",
      ip: "192.168.123.152",
    },
    {
      id: 3,
      timestamp: "Oct 22, 2025, 11:25 AM",
      admin: "admin1",
      type: "User Balance Adjustment",
      typeColor: "text-red-400",
      details: "Adjusted balance for user1 by -$850.49",
      ip: "192.168.123.152",
    },
    {
      id: 4,
      timestamp: "Oct 22, 2025, 11:25 AM",
      admin: "admin1",
      type: "Login",
      typeColor: "text-blue-400",
      details: "User logged into system",
      ip: "192.168.123.152",
    },
    {
      id: 5,
      timestamp: "Oct 22, 2025, 11:25 AM",
      admin: "admin1",
      type: "Round Inspection",
      typeColor: "text-orange-400",
      details: "Game round inspected by admin",
      ip: "192.168.123.152",
    },
  ];


  const handleExport = () => {
    const headers = "Timestamp,Admin User,Action Type,Details,IP Address\n";
    const rows = auditData
      .map(
        (row) =>
          `${row.timestamp},${row.admin},${row.type},${row.details},${row.ip}`
      )
      .join("\n");

    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `Audit_Trail_${startDate}_to_${endDate}.csv`;
    link.click();
  };

  return (
    <div className="mt-12 m-8  text-white font-sans">
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Audit Trail</h2>
        <p className="text-gray-400 text-sm">
          Track and review all admin actions for security and compliance
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-4 mb-6 bg-[#0a111a] p-4 rounded-xl border border-gray-800">
        <div className="flex items-center gap-2 bg-[#121d2b] border border-gray-700 rounded-lg px-3 py-2">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="bg-transparent outline-none text-sm text-gray-300 cursor-pointer"
          />
          <Calendar size={16} className="text-gray-500" />
        </div>

        <span className="text-gray-500">to</span>

        <div className="flex items-center gap-2 bg-[#121d2b] border border-gray-700 rounded-lg px-3 py-2">
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="bg-transparent outline-none text-sm text-gray-300 cursor-pointer"
          />
          <Calendar size={16} className="text-gray-500" />
        </div>

        <button className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors ml-auto">
          <Filter size={16} /> Configure Filters
        </button>

        <button
          onClick={handleExport}
          className="flex items-center gap-2 bg-[#2dd4bf]/20 text-[#2dd4bf] border border-[#2dd4bf]/30 px-6 py-2 rounded-lg text-sm font-bold hover:bg-[#2dd4bf]/30 transition-all"
        >
          <Download size={16} /> Export
        </button>
      </div>

      {/* Audit Table */}
      <div className="bg-[#0a111a] border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#1e2733] text-gray-400 text-[11px] uppercase tracking-wider">
                <th className="px-6 py-4">
                  <input type="checkbox" className="accent-teal-500" />
                </th>
                <th className="px-4 py-4 font-bold">Timestamp</th>
                <th className="px-4 py-4 font-bold">Admin User</th>
                <th className="px-4 py-4 font-bold">Action Type</th>
                <th className="px-4 py-4 font-bold">Details</th>
                <th className="px-4 py-4 font-bold text-right">IP Address</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800/50">
              {auditData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-[#121d2b] transition-colors"
                >
                  <td className="px-6 py-4">
                    <input type="checkbox" className="accent-teal-500" />
                  </td>
                  <td className="px-4 py-4 text-xs text-gray-300 whitespace-nowrap">
                    {item.timestamp}
                  </td>
                  <td className="px-4 py-4 text-sm font-bold">{item.admin}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`text-[10px] font-bold px-3 py-1 rounded-full border border-gray-700 bg-gray-800/50 ${item.typeColor}`}
                    >
                      {item.type}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-xs text-gray-400 max-w-xs truncate">
                    {item.details}
                  </td>
                  <td className="px-4 py-4 text-xs text-gray-400 text-right font-mono">
                    {item.ip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditTrail;
