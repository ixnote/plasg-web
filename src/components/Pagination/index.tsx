import { cn } from "@/utils";
import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

function PaginationComponent({
  totalPages,
  currentPage,
  onPageChange,
  lightMode = false,
}: any) {
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages === 1) {
      return [1];
    }

    if (totalPages === 2) {
      return [1, 2];
    }

    const totalNumbers = 3; // Total page numbers to show (including 1 and last page)
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
    <span className="flex w-full justify-end max-w-[1200px] mx-auto">
      {currentPage !== 1 && (
        <span
          className={cn(
            "w-10 h-10 flex justify-center items-center rounded-md",
            { "bg-none": currentPage === 1 },
            { "cursor-pointer bg-none text-white": currentPage !== 1 },
            { "text-brand-main": lightMode }
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
              "bg-brand-lightYellow text-brand-main ": page === currentPage,
              "bg-none text-white border":
                page !== currentPage && page !== "...",
              "bg-none text-white cursor-default": page === "...",
            },
            {
              "text-brand-main": lightMode,
              "bg-brand-main text-white": page === currentPage && lightMode,
              "border-none":
                lightMode && page !== currentPage && page !== "...",
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
            },
            { "text-brand-main": lightMode }
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
