import React from "react";
import { FormattedMessage } from "react-intl";

function TableHeader({ headerGroups }) {
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
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className={`datatable-cell datatable-cell-sort ${i === 0 &&
                "datatable-cell-center "}`}
            >
              <span
                style={
                  i !== 0 && i !== 1 && i !== 7
                    ? { width: "137px" }
                    : i === 0 || i === 1
                    ? { width: "40px" }
                    : { width: "125px" }
                }
              >
                {i === 0 ? (
                  column.render("Header")
                ) : (
                  <FormattedMessage
                    id={`TABLE.SLIDERS.${column.render("Header")}`}
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
}

export default TableHeader;
