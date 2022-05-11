import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import { COLUMNS } from "./COLUMNS";
import GlobalFilter from "./GlobalFilter";
import TableHeader from "./TableHeader";
import Pagination from "../../shared/Pagination";
import TableBody from "./TableBody";
import IndeterminateCheckbox from "../../shared/IndeterminateCheckbox";

const Table = ({ companies }) => {
  const data = useMemo(() => companies, [companies]);
  const columns = useMemo(() => COLUMNS, []);
  const {
    getTableBodyProps,
    getTableProps,
    page,
    state,
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
    setGlobalFilter,
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
        filter={state.globalFilter}
        setFilter={setGlobalFilter}
        selectedFlatRows={selectedFlatRows}
      />
      <div
        className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded"
        id="kt_datatable"
      >
        <table {...getTableProps()} className="datatable-table d-block">
          <TableHeader {...{ headerGroups }} />
          <tbody {...getTableBodyProps()} className="datatable-body">
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
};

export default Table;
