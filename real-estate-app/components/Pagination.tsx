import { useState } from "react";
import styles from "@/styles/pagination.module.css";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Dummy total pages

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.pagination}>
      <button className={styles.arrow} disabled={currentPage === 1} onClick={() => handlePageClick(1)}>
        «
      </button>
      <button className={styles.arrow} disabled={currentPage === 1} onClick={() => handlePageClick(currentPage - 1)}>
        ‹
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`${styles.pageNumber} ${currentPage === index + 1 ? styles.active : ""}`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button className={styles.arrow} disabled={currentPage === totalPages} onClick={() => handlePageClick(currentPage + 1)}>
        ›
      </button>
      <button className={styles.arrow} disabled={currentPage === totalPages} onClick={() => handlePageClick(totalPages)}>
        »
      </button>
    </div>
  );
};

export default Pagination;
