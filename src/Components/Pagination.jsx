import React from 'react';

const Pagination = ({ onPageChange, currentPage, pageSize, totalBlogs }) => {
  const totalPage = Math.ceil(totalBlogs / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map((pageNumber) => (
      <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
        <a href="#" onClick={(e) => { e.preventDefault(); onPageChange(pageNumber); }}>{pageNumber}</a>
      </li>
    ));
  };

  return (
    <div>
      <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
          <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        </li>

        <div className='flex gap-1'>{renderPaginationLinks()}</div>

        <div>
          <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPage}>Next</button>
        </div>
      </ul>
    </div>
  );
};

export default Pagination;
