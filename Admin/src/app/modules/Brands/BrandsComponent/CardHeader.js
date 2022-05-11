import React from "react";
import { FormattedMessage } from "react-intl";

const CardHeader = ({ headerGroups }) => {
  return (
    <thead className="datatable-head">
      {headerGroups.map((headerGroup) => (
        <tr
          className="datatable-row"
          style={{ left: "0px" }}
          {...headerGroup.getHeaderGroupProps()}
        >
          {headerGroup.headers.map((column, i) => {
            return (
              <th
                className={`datatable-cell datatable-cell-sort ${i === 0 &&
                  "datatable-cell-left"}`}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                <span
                  style={
                    i === 0 || i === 1
                      ? { width: "40px" }
                      : i === 6
                      ? { width: "130px" }
                      : { width: "158px" }
                  }
                >
                  {i !== 0 ? (
                    <FormattedMessage
                      id={`TABLE.BRANDS.${column.render("Header")}`}
                    />
                  ) : (
                    column.render("Header")
                  )}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </span>
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default CardHeader;
