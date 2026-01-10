// // import React, { useState } from "react";
// // import { Eye, X, Download, UserCircle } from "lucide-react";

// // const RecentGame = () => {
// //   const [roundsData] = useState([
// //     {
// //       id: "d29dbee5-ed53-42b2-a4e8-f888ff49",
// //       user: "user88",
// //       game: "Blackjack",
// //       stake: "$573.28",
// //       payout: "$697.00",
// //       status: "Active",
// //       timestamp: "Nov 13, 2025, 05:32 AM",
// //       fxRate: "0.967",
// //       seed: "3333a839",
// //       initialState: "decd4",
// //       finalState: "5d736"
// //     },
// //     {
// //       id: "d29dbee5-ed53-42b2-a4e8-f888ff49",
// //       user: "user88",
// //       game: "Blackjack",
// //       stake: "$573.28",
// //       payout: "$697.00",
// //       status: "Active",
// //       timestamp: "Nov 13, 2025, 05:32 AM",
// //       fxRate: "0.967",
// //       seed: "3333a839",
// //       initialState: "decd4",
// //       finalState: "5d736"
// //     },
// //     {
// //       id: "d29dbee5-ed53-42b2-a4e8-f888ff49",
// //       user: "user88",
// //       game: "Blackjack",
// //       stake: "$573.28",
// //       payout: "$697.00",
// //       status: "Active",
// //       timestamp: "Nov 13, 2025, 05:32 AM",
// //       fxRate: "0.967",
// //       seed: "3333a839",
// //       initialState: "decd4",
// //       finalState: "5d736"
// //     },

// //   ]);

// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedRound, setSelectedRound] = useState(null);

// //   const handleViewDetails = (round) => {
// //     setSelectedRound(round);
// //     setIsModalOpen(true);
// //   };

// //   return (
// //     <div className="bg-[#0a111a] p-6 m-10 rounded-xl border border-gray-800 shadow-lg font-sans">
// //       <h2 className="text-white text-lg font-semibold mb-6">Recent Game Rounds</h2>

// //       <div className="overflow-x-auto">
// //         <table className="w-full text-left border-collapse">
// //           <thead>
// //             <tr className="bg-[#1e293b] text-gray-400 text-sm uppercase">
// //               <th className="p-4 rounded-l-lg">
// //                 <input type="checkbox" className="w-4 h-4 accent-yellow-500 rounded border-gray-600 bg-gray-700 cursor-pointer" />
// //               </th>
// //               <th className="p-4 font-medium">Round ID</th>
// //               <th className="p-4 font-medium">User</th>
// //               <th className="p-4 font-medium">Game</th>
// //               <th className="p-4 font-medium">Stake</th>
// //               <th className="p-4 font-medium">Payout</th>
// //               <th className="p-4 font-medium">Status</th>
// //               <th className="p-4 font-medium">Timestamp</th>
// //               <th className="p-4 font-medium rounded-r-lg text-center">Actions</th>
// //             </tr>
// //           </thead>

// //           <tbody className="text-gray-300 divide-y divide-gray-800">
// //             {roundsData.map((round) => (
// //               <tr key={round.id} className="hover:bg-gray-800/50 transition-colors">
// //                 <td className="p-4">
// //                   <input type="checkbox" className="w-4 h-4 accent-yellow-500 rounded border-gray-600 bg-gray-700 cursor-pointer" />
// //                 </td>
// //                 <td className="p-4 font-bold text-white truncate max-w-[120px]">{round.id}</td>
// //                 <td className="p-4 font-bold text-white">{round.user}</td>
// //                 <td className="p-4 font-bold text-white">{round.game}</td>
// //                 <td className="p-4 font-bold text-white">{round.stake}</td>
// //                 <td className="p-4 font-bold text-white">{round.payout}</td>
// //                 <td className="p-4">
// //                   <span className="px-3 py-1 rounded-md text-xs font-semibold bg-[#1e293b] text-[#4ade80] border border-gray-700">
// //                     {round.status}
// //                   </span>
// //                 </td>
// //                 <td className="p-4 text-sm font-bold text-white">{round.timestamp}</td>
// //                 <td className="p-4 text-center">
// //                   <button
// //                     onClick={() => handleViewDetails(round)}
// //                     className="flex items-center justify-center gap-2 text-[#d4a017] hover:text-yellow-400 transition-colors font-bold mx-auto"
// //                   >
// //                     <Eye size={18} />
// //                     <span>View</span>
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* --- View Details Modal (Image 3 Design) --- */}
// //       {isModalOpen && selectedRound && (
// //         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
// //           <div className="bg-[#111827] w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-800 p-6 relative">

// //             {/* Modal Title & Close */}
// //             <div className="flex justify-between items-center mb-6">
// //               <h3 className="text-white text-lg font-medium">Round Details</h3>
// //               <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition">
// //                 <X size={20} />
// //               </button>
// //             </div>

// //             {/* Main Info Card */}
// //             <div className="bg-[#1c2533] rounded-xl p-6 border border-gray-700/50 grid grid-cols-2 gap-y-6 gap-x-12 mb-6">
// //               {/* Left Column: Basic Information */}
// //               <div className="space-y-6">
// //                 <h4 className="text-gray-300 font-semibold mb-2">Basic Information</h4>
// //                 <div>
// //                   <p className="text-[#d4a017] text-sm mb-1">Round ID</p>
// //                   <p className="text-gray-300 text-sm break-all">{selectedRound.id}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-[#d4a017] text-sm mb-1">User</p>
// //                   <p className="text-gray-300 text-sm">{selectedRound.user}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-[#d4a017] text-sm mb-1">Game Type</p>
// //                   <p className="text-gray-300 text-sm">{selectedRound.game}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-[#d4a017] text-sm mb-1">Timestamp</p>
// //                   <p className="text-gray-300 text-sm">{selectedRound.timestamp}</p>
// //                 </div>
// //               </div>

// //               {/* Right Column: Financial Details */}
// //               <div className="space-y-6">
// //                 <h4 className="text-gray-300 font-semibold mb-2">Financial Details</h4>
// //                 <div>
// //                   <p className="text-[#d4a017] text-sm mb-1">Stake</p>
// //                   <p className="text-gray-300 text-sm">{selectedRound.stake}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-[#d4a017] text-sm mb-1">Payout</p>
// //                   <p className="text-gray-300 text-sm">{selectedRound.payout}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-[#d4a017] text-sm mb-1">Status</p>
// //                   <span className="bg-[#242f3d] text-[#4ade80] text-[10px] px-2 py-0.5 rounded border border-gray-700 font-medium">
// //                     {selectedRound.status}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <p className="text-[#d4a017] text-sm mb-1">FX Rate</p>
// //                   <p className="text-gray-300 text-sm">{selectedRound.fxRate}</p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* RNG Data Section */}
// //             <div className="bg-[#111827] rounded-xl p-4 border border-gray-800 mb-6">
// //               <h4 className="text-gray-300 font-semibold mb-4">RNG Data</h4>
// //               <div className="bg-[#0a111a] rounded-lg p-4 space-y-2 border border-gray-800">
// //                 <p className="text-sm"><span className="text-[#d4a017]">Seed:</span> <span className="text-gray-300">{selectedRound.seed}</span></p>
// //                 <p className="text-sm"><span className="text-[#d4a017]">Initial State:</span> <span className="text-gray-300">{selectedRound.initialState}</span></p>
// //                 <p className="text-sm"><span className="text-[#d4a017]">Final State:</span> <span className="text-gray-300">{selectedRound.finalState}</span></p>
// //               </div>
// //             </div>

// //             {/* Footer Buttons */}
// //             <div className="flex gap-4">
// //               <button className="flex items-center gap-2 bg-[#337a7a] hover:bg-[#2a6666] text-white px-4 py-2 rounded-lg text-sm font-medium transition shadow-lg">
// //                 <Download size={18} /> Export Details
// //               </button>
// //               <button className="flex items-center gap-2 bg-transparent border border-gray-700 hover:border-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
// //                 <UserCircle size={18} /> View User Profile
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default RecentGame;

// import React, { useState } from "react";
// import {
//   Eye,
//   X,
//   Download,
//   UserCircle,
//   CreditCard,
//   History,
//   Gamepad2,
// } from "lucide-react";

// const RecentGame = () => {
//   const [roundsData] = useState([
//     {
//       id: "d29dbee5-ed53-42b2-a4e8-f888ff49",
//       user: "user88",
//       email: "user88@example.com",
//       game: "Blackjack",
//       stake: "$573.28",
//       payout: "$697.00",
//       status: "Active",
//       timestamp: "Nov 13, 2025, 05:32 AM",
//       fxRate: "0.967",
//       seed: "3333a839",
//       initialState: "decd4",
//       finalState: "5d736",
//       balance: "$2,797.02",
//       totalWagered: "$22,749.70",
//       totalWon: "$25,497.06",
//       userType: "Active",
//       joinedDate: "11/14/2025",
//     },
//     {
//       id: "d29dbee5-ed53-42b2-a4e8-f888ff49",
//       user: "user88",
//       email: "user88@example.com",
//       game: "Blackjack",
//       stake: "$573.28",
//       payout: "$697.00",
//       status: "Active",
//       timestamp: "Nov 13, 2025, 05:32 AM",
//       fxRate: "0.967",
//       seed: "3333a839",
//       initialState: "decd4",
//       finalState: "5d736",
//       balance: "$2,797.02",
//       totalWagered: "$22,749.70",
//       totalWon: "$25,497.06",
//       userType: "Active",
//       joinedDate: "11/14/2025",
//     },
//     {
//       id: "d29dbee5-ed53-42b2-a4e8-f888ff49",
//       user: "user88",
//       email: "user88@example.com",
//       game: "Blackjack",
//       stake: "$573.28",
//       payout: "$697.00",
//       status: "Active",
//       timestamp: "Nov 13, 2025, 05:32 AM",
//       fxRate: "0.967",
//       seed: "3333a839",
//       initialState: "decd4",
//       finalState: "5d736",
//       balance: "$2,797.02",
//       totalWagered: "$22,749.70",
//       totalWon: "$25,497.06",
//       userType: "Active",
//       joinedDate: "11/14/2025",
//     },
//   ]);

//   // States for Modals
//   const [isRoundModalOpen, setIsRoundModalOpen] = useState(false);
//   const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
//   const [selectedRound, setSelectedRound] = useState(null);
//   const [activeTab, setActiveTab] = useState("Details");

//   // 1. Download Logic
//   const handleExport = (data) => {
//     const fileName = `round-${data.id}.json`;
//     const json = JSON.stringify(data, null, 2);
//     const blob = new Blob([json], { type: "application/json" });
//     const href = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = href;
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleViewRound = (round) => {
//     setSelectedRound(round);
//     setIsRoundModalOpen(true);
//   };

//   const handleViewProfile = () => {
//     setIsRoundModalOpen(false);
//     setIsProfileModalOpen(true);
//   };

//   return (
//     <div className="bg-[#0a111a] p-6 m-10 rounded-xl border border-gray-800 shadow-lg font-sans">
//       <h2 className="text-white text-lg font-semibold mb-6 text-left">
//         Recent Game Rounds
//       </h2>

//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-[#1e293b] text-gray-400 text-sm uppercase">
//               <th className="p-4 rounded-l-lg">
//                 <input type="checkbox" className="accent-yellow-500" />
//               </th>
//               <th className="p-4 font-medium">Round ID</th>
//               <th className="p-4 font-medium">User</th>
//               <th className="p-4 font-medium">Game</th>
//               <th className="p-4 font-medium">Stake</th>
//               <th className="p-4 font-medium">Payout</th>
//               <th className="p-4 font-medium">Status</th>
//               <th className="p-4 font-medium">Timestamp</th>
//               <th className="p-4 font-medium rounded-r-lg text-center">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-300 divide-y divide-gray-800">
//             {roundsData.map((round) => (
//               <tr
//                 key={round.id}
//                 className="hover:bg-gray-800/50 transition-colors"
//               >
//                 <td className="p-4">
//                   <input type="checkbox" className="accent-yellow-500" />
//                 </td>
//                 <td className="p-4 font-bold text-white truncate max-w-[120px]">
//                   {round.id}
//                 </td>
//                 <td className="p-4 font-bold text-white">{round.user}</td>
//                 <td className="p-4 font-bold text-white">{round.game}</td>
//                 <td className="p-4 font-bold text-white">{round.stake}</td>
//                 <td className="p-4 font-bold text-white">{round.payout}</td>
//                 <td className="p-4">
//                   <span className="px-3 py-1 rounded-md text-xs font-semibold bg-[#1e293b] text-[#4ade80] border border-gray-700">
//                     {round.status}
//                   </span>
//                 </td>
//                 <td className="p-4 text-sm font-bold text-white">
//                   {round.timestamp}
//                 </td>
//                 <td className="p-4 text-center">
//                   <button
//                     onClick={() => handleViewRound(round)}
//                     className="flex items-center gap-2 text-[#d4a017] hover:text-yellow-400 transition-colors font-bold mx-auto"
//                   >
//                     <Eye size={18} /> View
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {isRoundModalOpen && selectedRound && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
//           <div className="bg-[#111827] w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-800 p-6 relative">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-white text-lg font-medium">Round Details</h3>
//               <button
//                 onClick={() => setIsRoundModalOpen(false)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             <div className="bg-[#1c2533] rounded-xl p-6 border border-gray-700/50 grid grid-cols-2 gap-y-6 gap-x-12 mb-6">
//               <div className="space-y-4 text-left">
//                 <h4 className="text-gray-300 font-semibold border-b border-gray-700 pb-2">
//                   Basic Information
//                 </h4>
//                 <div>
//                   <p className="text-[#d4a017] text-xs uppercase">Round ID</p>
//                   <p className="text-gray-300 text-sm break-all">
//                     {selectedRound.id}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-[#d4a017] text-xs uppercase">User</p>
//                   <p className="text-gray-300 text-sm">{selectedRound.user}</p>
//                 </div>
//                 <div>
//                   <p className="text-[#d4a017] text-xs uppercase">Game Type</p>
//                   <p className="text-gray-300 text-sm">{selectedRound.game}</p>
//                 </div>
//                 <div>
//                   <p className="text-[#d4a017] text-xs uppercase">Timestamp</p>
//                   <p className="text-gray-300 text-sm">
//                     {selectedRound.timestamp}
//                   </p>
//                 </div>
//               </div>
//               <div className="space-y-4 text-left">
//                 <h4 className="text-gray-300 font-semibold border-b border-gray-700 pb-2">
//                   Financial Details
//                 </h4>
//                 <div>
//                   <p className="text-[#d4a017] text-xs uppercase">Stake</p>
//                   <p className="text-gray-300 text-sm">{selectedRound.stake}</p>
//                 </div>
//                 <div>
//                   <p className="text-[#d4a017] text-xs uppercase">Payout</p>
//                   <p className="text-gray-300 text-sm">
//                     {selectedRound.payout}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-[#d4a017] text-xs uppercase mb-1">
//                     Status
//                   </p>
//                   <span className="bg-[#242f3d] text-[#4ade80] text-[10px] px-2 py-0.5 rounded border border-gray-700">
//                     {selectedRound.status}
//                   </span>
//                 </div>
//                 <div>
//                   <p className="text-[#d4a017] text-xs uppercase">FX Rate</p>
//                   <p className="text-gray-300 text-sm">
//                     {selectedRound.fxRate}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-[#111827] rounded-xl p-4 border border-gray-800 mb-6 text-left">
//               <h4 className="text-gray-300 font-semibold mb-4">RNG Data</h4>
//               <div className="bg-[#0a111a] rounded-lg p-4 space-y-2 border border-gray-800 font-mono text-xs">
//                 <p>
//                   <span className="text-[#d4a017]">Seed:</span>{" "}
//                   <span className="text-gray-300">{selectedRound.seed}</span>
//                 </p>
//                 <p>
//                   <span className="text-[#d4a017]">Initial State:</span>{" "}
//                   <span className="text-gray-300">
//                     {selectedRound.initialState}
//                   </span>
//                 </p>
//                 <p>
//                   <span className="text-[#d4a017]">Final State:</span>{" "}
//                   <span className="text-gray-300">
//                     {selectedRound.finalState}
//                   </span>
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <button
//                 onClick={() => handleExport(selectedRound)}
//                 className="flex items-center gap-2 bg-[#337a7a] hover:bg-[#2a6666] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
//               >
//                 <Download size={18} /> Export Details
//               </button>
//               <button
//                 onClick={handleViewProfile}
//                 className="flex items-center gap-2 bg-transparent border border-gray-700 hover:border-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
//               >
//                 <UserCircle size={18} /> View User Profile
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* --- User Profile Modal  --- */}
//       {isProfileModalOpen && selectedRound && (
//         <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
//           <div className="bg-[#0a111a] w-full max-w-3xl rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
//             {/* Header with Avatar */}
//             <div className="p-6 bg-[#111827] flex justify-between items-center border-b border-gray-800">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
//                   {selectedRound.user.charAt(0).toUpperCase()}
//                 </div>
//                 <div>
//                   <h3 className="text-white font-bold">{selectedRound.user}</h3>
//                   <p className="text-gray-500 text-xs text-left">
//                     Joined Date: {selectedRound.joinedDate}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setIsProfileModalOpen(false)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             {/* Tabs */}
//             <div className="flex border-b border-gray-800 px-6 bg-[#0a111a]">
//               {["Details", "Login History", "Game Logs"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`py-4 px-4 text-sm font-medium transition-all ${
//                     activeTab === tab
//                       ? "text-[#d4a017] border-b-2 border-[#d4a017]"
//                       : "text-gray-500 hover:text-gray-300"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             <div className="p-8 text-left">
//               {activeTab === "Details" && (
//                 <div className="space-y-6">
//                   <h4 className="text-gray-300 font-semibold mb-4">
//                     Account Details
//                   </h4>
//                   <div className="grid grid-cols-2 gap-6">
//                     <div className="bg-[#111827] p-4 rounded-xl border border-gray-800">
//                       <p className="text-[#d4a017] text-xs uppercase mb-1">
//                         Email
//                       </p>
//                       <p className="text-white text-sm">
//                         {selectedRound.email}
//                       </p>
//                     </div>
//                     <div className="bg-[#111827] p-4 rounded-xl border border-gray-800">
//                       <p className="text-[#d4a017] text-xs uppercase mb-1">
//                         Status
//                       </p>
//                       <span className="bg-green-900/20 text-green-500 text-[10px] px-2 py-1 rounded border border-green-900/50">
//                         Active
//                       </span>
//                     </div>
//                     <div className="bg-[#111827] p-4 rounded-xl border border-gray-800">
//                       <p className="text-[#d4a017] text-xs uppercase mb-1">
//                         Balance
//                       </p>
//                       <p className="text-white font-bold">
//                         {selectedRound.balance}
//                       </p>
//                     </div>
//                     <div className="bg-[#111827] p-4 rounded-xl border border-gray-800">
//                       <p className="text-[#d4a017] text-xs uppercase mb-1">
//                         Total Wagered
//                       </p>
//                       <p className="text-white font-bold">
//                         {selectedRound.totalWagered}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {activeTab === "Game Logs" && (
//                 <div className="text-gray-400 text-center py-10 italic">
//                   Game log history will appear here...
//                 </div>
//               )}
//             </div>

//             {/* Footer Actions */}
//             <div className="p-6 bg-[#111827] border-t border-gray-800 flex gap-4">
//               <button className="bg-[#d4a017] hover:bg-[#b88a14] text-black font-bold px-6 py-2 rounded-lg text-sm transition shadow-lg">
//                 Adjust Balance
//               </button>
//               <button className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold px-6 py-2 rounded-lg text-sm transition">
//                 Suspend Account
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RecentGame;

import React, { useState } from "react";
import { Eye, X, Download, UserCircle } from "lucide-react";

// Helper Component for Details Tab
const InfoBox = ({ label, value, isStatus }) => (
  <div className="bg-[#111827] p-3 rounded-xl border border-gray-800/50">
    <p className="text-[#d4a017] text-[10px] font-bold uppercase mb-1 tracking-tight">
      {label}
    </p>
    {isStatus ? (
      <span className="bg-red-900/20 text-red-500 text-[9px] px-2 py-0.5 rounded border border-red-900/50 font-bold uppercase">
        {value || "Suspended"}
      </span>
    ) : (
      <p className="text-white text-[12px] font-bold truncate">{value}</p>
    )}
  </div>
);

const RecentGame = () => {
  const [roundsData] = useState([
    {
      id: "d29dbee5-ed53-42b2-a4e8-f888ff49",
      user: "user88",
      email: "user4@example.com",
      game: "Blackjack",
      stake: "$573.28",
      payout: "$697.00",
      status: "Active",
      timestamp: "Nov 13, 2025, 05:32 AM",
      fxRate: "0.967",
      seed: "3333a839",
      initialState: "decd4",
      finalState: "5d736",
      balance: "2,797.02",
      totalWagered: "22,749.70",
      totalWon: "25,497.06",
      userType: "Inactive",
      joinedDate: "11/14/2025",
    },
    {
      id: "d29dbee5-ed53-42b2-a4e8-f888ff49",
      user: "user88",
      email: "user4@example.com",
      game: "Blackjack",
      stake: "$573.28",
      payout: "$697.00",
      status: "Active",
      timestamp: "Nov 13, 2025, 05:32 AM",
      fxRate: "0.967",
      seed: "3333a839",
      initialState: "decd4",
      finalState: "5d736",
      balance: "2,797.02",
      totalWagered: "22,749.70",
      totalWon: "25,497.06",
      userType: "Inactive",
      joinedDate: "11/14/2025",
    },
    {
      id: "d29dbee5-ed53-42b2-a4e8-f888ff49",
      user: "user88",
      email: "user4@example.com",
      game: "Blackjack",
      stake: "$573.28",
      payout: "$697.00",
      status: "Active",
      timestamp: "Nov 13, 2025, 05:32 AM",
      fxRate: "0.967",
      seed: "3333a839",
      initialState: "decd4",
      finalState: "5d736",
      balance: "2,797.02",
      totalWagered: "22,749.70",
      totalWon: "25,497.06",
      userType: "Inactive",
      joinedDate: "11/14/2025",
    },
  ]);

  const [isRoundModalOpen, setIsRoundModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedRound, setSelectedRound] = useState(null);
  const [activeTab, setActiveTab] = useState("Details");

  // Export/Download Logic
  const handleExport = (data) => {
    const fileName = `round-${data.id}.json`;
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewDetails = (round) => {
    setSelectedRound(round);
    setIsRoundModalOpen(true);
  };

  const handleOpenProfile = () => {
    setIsRoundModalOpen(false);
    setIsProfileModalOpen(true);
  };

  return (
    <div className="bg-[#0a111a] p-6 m-10 rounded-xl border border-gray-800 shadow-lg font-sans text-left">
      <h2 className="text-white text-lg font-semibold mb-6">
        Recent Game Rounds
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1e293b] text-gray-400 text-sm uppercase">
              <th className="p-4 rounded-l-lg">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-yellow-500 rounded border-gray-600 bg-gray-700"
                />
              </th>
              <th className="p-4 font-medium">Round ID</th>
              <th className="p-4 font-medium">User</th>
              <th className="p-4 font-medium">Game</th>
              <th className="p-4 font-medium">Stake</th>
              <th className="p-4 font-medium">Payout</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Timestamp</th>
              <th className="p-4 font-medium rounded-r-lg text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-300 divide-y divide-gray-800">
            {roundsData.map((round) => (
              <tr
                key={round.id}
                className="hover:bg-gray-800/50 transition-colors"
              >
                <td className="p-4">
                  <input type="checkbox" className="accent-yellow-500" />
                </td>
                <td className="p-4 font-bold text-white truncate max-w-[120px]">
                  {round.id}
                </td>
                <td className="p-4 font-bold text-white">{round.user}</td>
                <td className="p-4 font-bold text-white">{round.game}</td>
                <td className="p-4 font-bold text-white">{round.stake}</td>
                <td className="p-4 font-bold text-white">{round.payout}</td>
                <td className="p-4">
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-[#1e293b] text-[#4ade80] border border-gray-700">
                    {round.status}
                  </span>
                </td>
                <td className="p-4 text-sm font-bold text-white">
                  {round.timestamp}
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleViewDetails(round)}
                    className="flex items-center justify-center gap-2 text-[#d4a017] hover:text-yellow-400 font-bold mx-auto"
                  >
                    <Eye size={18} /> <span>View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Round Details Modal --- */}
      {isRoundModalOpen && selectedRound && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#111827] w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-800 p-6 relative">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white text-lg font-medium">Round Details</h3>
              <button
                onClick={() => setIsRoundModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-[#1c2533] rounded-xl p-6 border border-gray-700/50 grid grid-cols-2 gap-y-6 gap-x-12 mb-6 text-left">
              <div className="space-y-6">
                <h4 className="text-gray-300 font-semibold mb-2">
                  Basic Information
                </h4>
                <div>
                  <p className="text-[#d4a017] text-sm mb-1">Round ID</p>
                  <p className="text-gray-300 text-sm break-all">
                    {selectedRound.id}
                  </p>
                </div>
                <div>
                  <p className="text-[#d4a017] text-sm mb-1">User</p>
                  <p className="text-gray-300 text-sm">{selectedRound.user}</p>
                </div>
                <div>
                  <p className="text-[#d4a017] text-sm mb-1">Game Type</p>
                  <p className="text-gray-300 text-sm">{selectedRound.game}</p>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-gray-300 font-semibold mb-2">
                  Financial Details
                </h4>
                <div>
                  <p className="text-[#d4a017] text-sm mb-1">Stake</p>
                  <p className="text-gray-300 text-sm">{selectedRound.stake}</p>
                </div>
                <div>
                  <p className="text-[#d4a017] text-sm mb-1">Payout</p>
                  <p className="text-gray-300 text-sm">
                    {selectedRound.payout}
                  </p>
                </div>
                <div>
                  <p className="text-[#d4a017] text-sm mb-1">Status</p>
                  <span className="bg-[#242f3d] text-[#4ade80] text-[10px] px-2 py-0.5 rounded border border-gray-700">
                    {selectedRound.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#111827] rounded-xl p-4 border border-gray-800 mb-6 text-left">
              <h4 className="text-gray-300 font-semibold mb-4">RNG Data</h4>
              <div className="bg-[#0a111a] rounded-lg p-4 space-y-2 border border-gray-800 text-xs">
                <p>
                  <span className="text-[#d4a017]">Seed:</span>{" "}
                  <span className="text-gray-300 font-mono">
                    {selectedRound.seed}
                  </span>
                </p>
                <p>
                  <span className="text-[#d4a017]">Initial State:</span>{" "}
                  <span className="text-gray-300 font-mono">
                    {selectedRound.initialState}
                  </span>
                </p>
                <p>
                  <span className="text-[#d4a017]">Final State:</span>{" "}
                  <span className="text-gray-300 font-mono">
                    {selectedRound.finalState}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => handleExport(selectedRound)}
                className="flex items-center gap-2 bg-[#337a7a] text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                <Download size={18} /> Export Details
              </button>
              <button
                onClick={handleOpenProfile}
                className="flex items-center gap-2 border border-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                <UserCircle size={18} /> View User Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- User Profile Modal --- */}
      {isProfileModalOpen && selectedRound && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0a111a] w-full max-w-lg rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
            <div className="p-4 bg-[#111827] flex justify-between items-center border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                  {selectedRound.user.charAt(0).toUpperCase()}
                </div>
                <div className="text-left">
                  <h3 className="text-white font-bold text-sm">
                    {selectedRound.user}
                  </h3>
                  <p className="text-gray-500 text-[10px]">
                    Joined Date: {selectedRound.joinedDate}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsProfileModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tabs Design Snippet */}
            <div className="flex px-5 gap-6 mt-5 text-[11px] font-bold uppercase border-b border-gray-800">
              {["Details", "Login History", "Game Logs"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 transition-all relative ${
                    activeTab === tab
                      ? "text-yellow-500 border-b-2 border-yellow-500"
                      : "text-gray-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content Design Snippet */}
            <div className="p-5 min-h-[250px]">
              {activeTab === "Details" && (
                <div className="animate-in fade-in duration-300 text-left">
                  <h4 className="text-[12px] text-gray-400 font-bold uppercase mb-4 tracking-wider">
                    Account Details
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <InfoBox label="Email" value={selectedRound.email} />
                    <InfoBox label="Status" value="Suspended" isStatus />
                    <InfoBox
                      label="Balance"
                      value={`$${selectedRound.balance}`}
                    />
                    <InfoBox
                      label="Total Wagered"
                      value={`$${selectedRound.totalWagered}`}
                    />
                    <InfoBox label="User Type" value={selectedRound.userType} />
                    <InfoBox label="Total Won" value={selectedRound.totalWon} />
                  </div>
                </div>
              )}

              {activeTab === "Login History" && (
                <div className="animate-in slide-in-from-right duration-300">
                  <div className="bg-[#1e293b] p-2 rounded-t-lg flex justify-between text-[10px] text-gray-400 font-bold uppercase px-4">
                    <span>Date & Time</span>
                    <span>IP Address</span>
                    <span>Device</span>
                  </div>
                  <div className="flex justify-between text-[11px] p-4 text-gray-300 bg-[#161f30] rounded-b-lg border border-gray-800">
                    <span>Nov 15, 2025, 11:28 PM</span>
                    <span>192.168.1.1</span>
                    <span>Chrome / Windows</span>
                  </div>
                </div>
              )}

              {activeTab === "Game Logs" && (
                <div className="animate-in slide-in-from-right duration-300 overflow-hidden rounded-lg border border-gray-800">
                  <table className="w-full text-[10px] text-left">
                    <thead className="bg-[#1e293b] text-gray-400 uppercase font-bold">
                      <tr>
                        <th className="p-2 pl-4">Date</th>
                        <th className="p-2">Game</th>
                        <th className="p-2 text-center">Result</th>
                        <th className="p-2">Stake</th>
                        <th className="p-2">Payout</th>
                        <th className="p-2 text-right pr-4">Net</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800 bg-[#161f30]">
                      <tr className="hover:bg-gray-800/30">
                        <td className="p-2 pl-4 text-gray-400">12/4/17</td>
                        <td className="p-2 text-gray-400">Scratch Card</td>
                        <td className="p-2 text-center text-green-400 font-bold">
                          Win
                        </td>
                        <td className="p-2 text-gray-400">$50</td>
                        <td className="p-2 text-gray-400">$50</td>
                        <td className="p-2 text-right pr-4 text-gray-200 font-medium">
                          $50
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-800/30">
                        <td className="p-2 pl-4 text-gray-400">8/30/14</td>
                        <td className="p-2 text-gray-400">Spin Wheel</td>
                        <td className="p-2 text-center text-red-400 font-bold">
                          Loss
                        </td>
                        <td className="p-2 text-gray-400">$50</td>
                        <td className="p-2 text-gray-400">$50</td>
                        <td className="p-2 text-right pr-4 text-gray-200 font-medium">
                          $50
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="p-5 bg-[#0a111a] border-t border-gray-800 flex gap-3">
              <button className="flex-1 bg-[#d4a017] text-black font-bold py-2 rounded-lg text-xs uppercase transition-all">
                Adjust Balance
              </button>
              <button className="flex-1 bg-[#ef4444] text-white font-bold py-2 rounded-lg text-xs uppercase transition-all">
                Suspend Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentGame;
