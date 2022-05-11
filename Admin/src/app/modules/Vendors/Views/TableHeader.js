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
                "datatable-cell-left"}`}
            >
              <span
                style={
                  i === 0 || i === 1
                    ? { width: `40px` }
                    : i === 2
                    ? { width: `250px` }
                    : i !== 6
                    ? { width: "158px" }
                    : { width: "130px" }
                }
              >
                {i === 0 ? (
                  column.render("Header")
                ) : (
                  <FormattedMessage
                    id={`TABLE.VENDORS.${column.render("Header")}`}
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
