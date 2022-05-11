import React, { useMemo } from "react";
import GlobalFilter from "./GlobalFilter";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import { column } from "./Column";
import Pagination from "../../shared/Pagination";
import IndeterminateCheckbox from "../../shared/IndeterminateCheckbox";
function Table({ banners }) {
  const columns = useMemo(() => column, []);
  const data = useMemo(() => banners, [banners]);
  const {
    getTableBodyProps,
    getTableProps,
    page,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    pageOptions,
    setPageSize,
    prepareRow,
    headerGroups,
    selectedFlatRows,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ]);
    }
  );
  return (
    <div className="card-body">
      <GlobalFilter
        filter={state.filter}
        setFilter={setGlobalFilter}
        selectedFlatRows={selectedFlatRows}
      />
      <div
        className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded"
        id="kt_datatable"
      >
        <table className="datatable-table d-block" {...getTableProps()}>
          <TableHeader headerGroups={headerGroups} />
          <tbody className="datatable-body" {...getTableBodyProps()}>
            <TableBody {...{ page, prepareRow }} />
          </tbody>
        </table>
        <Pagination
          nextPage={nextPage}
          previousPage={previousPage}
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          state={state}
          gotoPage={gotoPage}
          pageCount={pageCount}
          pageOptions={pageOptions}
          data={data}
          setPageSize={setPageSize}
        />
      </div>
    </div>
  );
}

export default Table;
