import { use, useEffect, useState } from "react";

const Pagination = ({ onPageChange, totalPages }) => {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const THRESHOLD = 10;

  const handleClick = (pageNo) => {
    setSelectedPage(pageNo);
    setPages(getPageRange(pageNo, totalPages));
    onPageChange(pageNo);
  };

  const getPageRange = (currentPage, totalPages) => {
    let allowedOnLeft = THRESHOLD / 2;
    let allowedOnRight = THRESHOLD-allowedOnLeft-1;
    let start = Math.max(1, currentPage - allowedOnLeft);
    let end = Math.min(totalPages, currentPage + allowedOnRight);
  
    // Adjust start and end if they are out of bounds
    if (end - start < THRESHOLD - 1) {
      if (start === 1) {
        end = Math.min(THRESHOLD, totalPages);
      } else if (end === totalPages) {
        start = Math.max(totalPages - (THRESHOLD-1), 1);
      }
    }
  
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  useEffect(() => {
    // if(selectedPage == undefined) selectedPage = 1;
    const list = getPageRange(selectedPage, totalPages);
    setPages(list);
  }, [totalPages]);

  return (
    <div className="pagination">
      <button
        onClick={() => handleClick(selectedPage - 1)}
        disabled={selectedPage == pages[0]}
      >
        &lt;
      </button>
      {pages.map((page) => (
        <button
          className={selectedPage === page ? "active" : ""}
          key={page}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handleClick(selectedPage + 1)}
        disabled={selectedPage == pages[pages.length - 1]}
      >
        &gt;
      </button>
    </div>
  );
};
export default Pagination;
