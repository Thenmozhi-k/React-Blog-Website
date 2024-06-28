import React from 'react';

const Pagination = ({ onPageChange, currentPage, pageSize, totalBlogs }) => {
  const totalPage = Math.ceil(totalBlogs / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map((pageNumber) => (
      <li
        className={`${
          pageNumber === currentPage ? "activePagination" : ""
        }`}
        key={pageNumber}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPageChange(pageNumber);
          }}
          className="px-2 py-1"
        >
          {pageNumber}
        </a>
      </li>
    ));
  };

  return (
    <div className="flex justify-center mt-8">
      <ul className="pagination flex flex-wrap justify-center gap-4 mb-6">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
        </li>

        <div className="flex flex-wrap gap-1">
          {renderPaginationLinks()}
        </div>

        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPage}
            className="px-3 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
