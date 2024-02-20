"use client";

import Image from "next/image";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  itemsPerPage: number;
  total: number;
  setItemOffset: (newOffset: number) => void;
  itemOffset: number;
}

const Pagination = ({
  itemsPerPage,
  total,
  setItemOffset,
  itemOffset,
}: PaginationProps) => {
  console.log(itemOffset);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(total / itemsPerPage);

  const handlePageClick = (event: any) => {
    window.scrollTo({ top: 100, behavior: "smooth" });
    const newOffset = (event.selected * itemsPerPage) % total;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel={
        <Image
          className=""
          width={24}
          height={24}
          src="/icons/left.svg"
          alt="logo"
        />
      }
      nextLabel={
        <Image
          className=""
          width={24}
          height={24}
          src="/icons/right.svg"
          alt="logo"
        />
      }
      renderOnZeroPageCount={null}
      activeClassName={"item active "}
      breakClassName={"item break-me "}
      containerClassName={"pagination"}
      disabledClassName={"disabled-page"}
      nextClassName={"item next"}
      pageClassName={"item pagination-page "}
      previousClassName={"item previous"}
      disabledLinkClassName={"disabled"}
    />
  );
};

export default Pagination;
