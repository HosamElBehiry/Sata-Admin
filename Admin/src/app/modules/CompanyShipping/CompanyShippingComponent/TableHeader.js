import React from "react";
import { FormattedMessage } from "react-intl";

const TableHeader = ({ headerGroups }) => {
  return (
    <thead className="datatable-head">
      {headerGroups.map((headerGroup) => (
        <tr
          className="datatable-row"
          style={{ left: "0px" }}
          {...headerGroup.getHeaderGroupProps()}
        >
          {headerGroup.headers.map((column, i) => (
            <th
              className={`${
                i === 0
                  ? "datatable-cell-center datatable-cell datatable-cell-check"
                  : "datatable-cell datatable-cell-sort"
              }`}
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              <span style={{ width: `${i === 0 ? "40px" : "137px"}` }}>
                {i === 0 ? (
                  column.render("Header")
                ) : (
                  <FormattedMessage
                    id={`TABLE.COMPANY.SHIPPING.${column.render("Header")}`}
                  />
                )}

                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </span>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
