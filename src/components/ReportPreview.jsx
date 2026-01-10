import React from 'react';
import { RefreshCw, Download } from 'lucide-react';

const ReportPreview = () => {

  const reportData = Array(12).fill({
    username: 'User',
    email: 'user1@example.com',
    balance: '50', 
    totalWagered: '520',
    totalWon: '115',
    status: 'Active'
  });


  const downloadCSV = () => {

    const headers = ["Username,Email,Balance,Total Wagered,Total Won,Status"];
    

    const rows = reportData.map(user => 
      `${user.username},${user.email},${user.balance},${user.totalWagered},${user.totalWon},${user.status}`
    );


    const csvContent = headers.concat(rows).join("\n");


    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    
    link.setAttribute("href", url);
    link.setAttribute("download", `System_Report_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className=" bg-[#0a111a] border border-gray-800 m-8 rounded-xl overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-6 gap-4 border-b border-gray-800">
        <h3 className="text-lg font-semibold text-white">Report Preview</h3>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.location.reload()} 
            className="flex items-center gap-2 bg-transparent hover:bg-gray-800 border border-gray-700 py-2 px-4 rounded-md text-sm font-medium transition-colors text-white"
          >
            <RefreshCw size={18} />
            Refresh
          </button>
          
          <button 
            onClick={downloadCSV}
            className="flex items-center gap-2 bg-[#facc15] hover:bg-yellow-500 text-black py-2 px-4 rounded-md text-sm font-bold transition-colors shadow-lg active:scale-95"
          >
            <Download size={18} />
            Generate & Download CSV
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto px-6 pb-6 mt-4">
        <table className="w-full text-left border-separate border-spacing-y-1">
          <thead>
            <tr className="bg-[#1a2330] text-gray-400 uppercase text-[10px] tracking-widest">
              <th className="px-4 py-4 rounded-l-lg font-bold">Username</th>
              <th className="px-4 py-4 font-bold">Email</th>
              <th className="px-4 py-4 font-bold">Balance</th>
              <th className="px-4 py-4 font-bold">Total Wagered</th>
              <th className="px-4 py-4 font-bold">Total Won</th>
              <th className="px-4 py-4 rounded-r-lg font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm ">
            {reportData.map((row, index) => (
              <tr key={index} className="hover:bg-[#121d2b] transition-all group border-b border-gray-800">
                <td className="px-4 py-4 text-white font-medium border-b border-gray-800">{row.username}</td>
                <td className="px-4 py-4 text-gray-500 border-b border-gray-800">{row.email}</td>
                <td className="px-4 py-4 text-white font-bold border-b border-gray-800">${row.balance}</td>
                <td className="px-4 py-4 text-gray-400 border-b border-gray-800">${row.totalWagered}</td>
                <td className="px-4 py-4 text-gray-400 border-b border-gray-800">${row.totalWon}</td>
                <td className="px-4 py-4 border-b border-gray-800">
                  <span className="bg-[#121d2b] border border-gray-800 text-[#2dd4bf] text-[10px] font-bold px-3 py-1 rounded-full ring-1 ring-[#2dd4bf]/20">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportPreview;