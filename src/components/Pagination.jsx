import React from "react";

/* Pagination component that receives props such as page number and total number of pages from the page that it's on */
const Pagination = ({ page, totalPages, turnPage }) => {
  return (
    <div className="flex justify-center items-center space-x-5 text-cyan-300">
      {/* Disabled if we're on the first page */}
      <button
        disabled={page <= 1}
        /* When clicked, go back one page and change the search params */
        onClick={() => {
          turnPage({
            page: Number(page) - 1,
          });
        }}
        className="bg-gray-900 text-white text-center p-3 m-2 rounded-xl transition-all duration-300 hover:text-cyan-300 disabled:bg-slate-400 disabled:hover:text-white"
      >
        Previous page
      </button>
      <p className="text-gray-800 text-xl">
        Page {page} of {totalPages}
      </p>
      <button
        disabled={page === totalPages}
        onClick={() => {
          turnPage({
            page: Number(page) + 1,
          });
        }}
        className="bg-gray-900 text-white text-center p-3 m-2 rounded-xl transition-all duration-300  hover:text-cyan-300"
      >
        Next page
      </button>
    </div>
  );
};

export default Pagination;
