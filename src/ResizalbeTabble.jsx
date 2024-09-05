// import React, { useState, useRef } from "react";

// const ResizableTableWithPaginationAndCheckboxes = () => {
//   const [columnWidths, setColumnWidths] = useState({
//     col1: 200,
//     col2: 200,
//     col3: 200,
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedRows, setSelectedRows] = useState([]);

//   const rowsPerPage = 10;
//   const rows = [
//     ["Data 1", "Data 2", "Data 3"],
//     ["Data 4", "Data 5", "Data 6"],
//     ["Data 7", "Data 8", "Data 9"],
//     ["Data 10", "Data 11", "Data 12"],
//     ["Data 13", "Data 14", "Data 15"],
//     ["Data 16", "Data 17", "Data 18"],
//     ["Data 19", "Data 20", "Data 21"],
//     ["Data 22", "Data 23", "Data 24"],
//     ["Data 25", "Data 26", "Data 27"],
//     ["Data 28", "Data 29", "Data 30"],
//     ["Data 31", "Data 32", "Data 33"],
//     ["Data 34", "Data 35", "Data 36"],
//     // Add more rows as needed for testing
//   ];

//   const totalPages = Math.ceil(rows.length / rowsPerPage);
  
//   const isResizing = useRef(false);
//   const currentColumn = useRef(null);
//   const startX = useRef(0);
//   const startWidth = useRef(0);

//   const handleMouseDown = (e, colKey) => {
//     isResizing.current = true;
//     currentColumn.current = colKey;
//     startX.current = e.clientX;
//     startWidth.current = columnWidths[colKey];

//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", handleMouseUp);
//   };

//   const handleMouseMove = (e) => {
//     if (!isResizing.current) return;

//     const deltaX = e.clientX - startX.current;
//     const newWidth = startWidth.current + deltaX;

//     setColumnWidths((prev) => ({
//       ...prev,
//       [currentColumn.current]: newWidth > 50 ? newWidth : 50, // Minimum width of 50px
//     }));
//   };

//   const handleMouseUp = () => {
//     isResizing.current = false;
//     document.removeEventListener("mousemove", handleMouseMove);
//     document.removeEventListener("mouseup", handleMouseUp);
//   };

//   // Determine the rows to display based on the current page
//   const startRow = (currentPage - 1) * rowsPerPage;
//   const displayedRows = rows.slice(startRow, startRow + rowsPerPage);

//   // Function to change page
//   const changePage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Handle row selection
//   const handleCheckboxChange = (rowIndex) => {
//     if (selectedRows.includes(rowIndex)) {
//       setSelectedRows(selectedRows.filter((index) => index !== rowIndex));
//     } else {
//       setSelectedRows([...selectedRows, rowIndex]);
//     }
//   };

//   return (
//     <div className="overflow-auto">
//       {/* Table displaying only the rows for the current page */}
//       <table className="table-auto border-collapse w-full mb-4">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Select</th>
//             <th
//               className="border p-2 relative"
//               style={{ width: columnWidths.col1 }}
//             >
//               Column 1
//               <div
//                 className="absolute top-0 right-0 h-full w-2 cursor-col-resize"
//                 onMouseDown={(e) => handleMouseDown(e, "col1")}
//               ></div>
//             </th>
//             <th
//               className="border p-2 relative"
//               style={{ width: columnWidths.col2 }}
//             >
//               Column 2
//               <div
//                 className="absolute top-0 right-0 h-full w-2 cursor-col-resize"
//                 onMouseDown={(e) => handleMouseDown(e, "col2")}
//               ></div>
//             </th>
//             <th
//               className="border p-2 relative"
//               style={{ width: columnWidths.col3 }}
//             >
//               Column 3
//               <div
//                 className="absolute top-0 right-0 h-full w-2 cursor-col-resize"
//                 onMouseDown={(e) => handleMouseDown(e, "col3")}
//               ></div>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {displayedRows.map((row, rowIndex) => {
//             const globalRowIndex = startRow + rowIndex;
//             return (
//               <tr key={globalRowIndex}>
//                 <td className="border p-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedRows.includes(globalRowIndex)}
//                     onChange={() => handleCheckboxChange(globalRowIndex)}
//                   />
//                 </td>
//                 {row.map((cell, cellIndex) => (
//                   <td className="border p-2" key={cellIndex}>
//                     {cell}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="flex justify-center space-x-2">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             className={`px-3 py-1 border ${
//               currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => changePage(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResizableTableWithPaginationAndCheckboxes;
