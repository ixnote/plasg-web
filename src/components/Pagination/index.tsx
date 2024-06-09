import { cn } from "@/utils";
import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

function PaginationComponent({ totalPages, currentPage, onPageChange }: any) {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const totalNumbers = 5; // Total page numbers to show (including 1 and last page)
    const halfTotalNumbers = Math.floor(totalNumbers / 2);

    let startPage = Math.max(2, currentPage - halfTotalNumbers);
    let endPage = Math.min(totalPages - 1, currentPage + halfTotalNumbers);

    if (currentPage <= halfTotalNumbers) {
      endPage = totalNumbers - 1;
    }

    if (currentPage + halfTotalNumbers >= totalPages) {
      startPage = totalPages - totalNumbers + 2;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (startPage > 2) {
      pageNumbers.unshift("...");
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push("...");
    }

    return [1, ...pageNumbers, totalPages];
  };

  const pageNumbers = getPageNumbers();
  return (
    <span className="flex  w-full justify-end max-w-[1200px] mx-auto">
      {currentPage !== 1 && (
        <span
          className={cn(
            "w-10 h-10 flex justify-center items-center rounded-md",
            { "bg-none": currentPage === 1 },
            { "cursor-pointer bg-none text-white": currentPage !== 1 }
          )}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        >
          <GoChevronLeft size={28} />
        </span>
      )}
      {pageNumbers.map((page, index) => (
        <span
          key={index}
          className={cn(
            "w-10 h-10 flex justify-center items-center rounded-md mx-1 cursor-pointer",
            {
              "bg-brand-lightYellow text-brand-main": page === currentPage,
              "bg-none text-white": page !== currentPage && page !== "...",
              "bg-none text-white cursor-default": page === "...",
            }
          )}
          onClick={() => page !== "..." && onPageChange(page)}
        >
          {page}
        </span>
      ))}
      {currentPage !== totalPages && (
        <span
          className={cn(
            "w-10 h-10 flex justify-center items-center rounded-md",
            { "bg-none": currentPage === totalPages },
            {
              "cursor-pointer bg-none text-white": currentPage !== totalPages,
            }
          )}
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
        >
          <GoChevronRight size={28} />
        </span>
      )}
    </span>
  );
}

export default PaginationComponent;
