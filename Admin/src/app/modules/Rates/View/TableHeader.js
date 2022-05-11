import React from "react";
import { FormattedMessage } from "react-intl";
function TableHeader({ headerGroups }) {
  return (
    <>
      {headerGroups.map((headerGroup) => (
        <tr
          {...headerGroup.getHeaderGroupProps()}
          className="datatable-row"
          style={{ left: `0px` }}
        >
          {headerGroup.headers.map((column, i) => (
            <th
              {...column.getHeaderProps()}
              className={`datatable-cell datatable-cell-sort ${i === 0 &&
                "datatable-cell datatable-cell-sort"}`}
            >
              <span
                style={
                  i === 0 || i === 1
                    ? { width: "40px" }
                    : i === 2 || i === 4
                    ? { width: "180px" }
                    : { width: "130px" }
                }
                className={`${
                  i !== 0 && i !== 1 && i !== 5 ? "text-center" : ""
                }`}
              >
                {i === 0 ? (
                  column.render("Header")
                ) : (
                  <FormattedMessage
                    id={`TABLE.RATES.${column.render("Header")}`}
                  />
                )}
              </span>
            </th>
          ))}
        </tr>
      ))}
    </>
  );
}

export default TableHeader;
