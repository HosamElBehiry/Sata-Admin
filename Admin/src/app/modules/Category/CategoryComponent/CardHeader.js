import React from "react";
import { FormattedMessage } from "react-intl";
function CardHeader({ headerGroups }) {
  return (
    <thead className="datatable-head">
      {headerGroups.map((headerGroup) => (
        <tr
          {...headerGroup.getHeaderGroupProps()}
          className="datatable-row"
          style={{ left: "0px" }}
        >
          {headerGroup.headers.map((column, i) => {
            return (
              <th
                className={`${
                  i === 0
                    ? "datatable-cell-center datatable-cell datatable-cell-check"
                    : "datatable-cell datatable-cell-sort"
                }`}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {i === 0 ? (
                  <span style={{ width: "40px" }}>
                    {column.render("Header")}
                  </span>
                ) : (
                  <span style={{ width: `${i === 1 ? "40px" : "137px"}` }}>
                    <FormattedMessage
                      id={`TABLE.CATEGORY.${column.render("Header")}`}
                    />
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </span>
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
}

export default CardHeader;
