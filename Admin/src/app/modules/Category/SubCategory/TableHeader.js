import React from "react";
import { FormattedMessage } from "react-intl";
const TableHeader = ({ headerGroups }) => {
  return (
    <thead className="datatable-head">
      {headerGroups.map((headerGroup) => (
        <tr
          {...headerGroup.getHeaderGroupProps()}
          className="datatable-row"
          style={{ left: "0px" }}
        >
          {headerGroup.headers.map((column, i) => (
            <th
              className={`datatable-cell datatable-cell-sort ${i === 0 &&
                "datatable-cell-center datatable-cell-check"}`}
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              <span
                style={
                  i !== 0 && i !== 5
                    ? { width: "137px" }
                    : i === 0
                    ? { width: "20px" }
                    : { width: "125px" }
                }
              >
                {i === 0 ? (
                  column.render("Header")
                ) : (
                  <FormattedMessage
                    id={`TABLE.SUB.CATEGORY.${column.render("Header")}`}
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
