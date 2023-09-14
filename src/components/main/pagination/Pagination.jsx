import React from "react";
import "./pagination.scss";
import ReactPaginate from "react-paginate";

const Pagination = ({ onChangePage }) => {
  return (
    <>
      <ReactPaginate
        className="paginationList"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={16}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
