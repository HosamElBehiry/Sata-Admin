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
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className={`datatable-cell datatable-cell-sort ${i === 0 &&
                "datatable-cell-left"}`}
            >
              <span
                style={
                  i === 0 || i === 1
                    ? { width: `40px` }
                    : i === 5
                    ? { width: `130px` }
                    : { width: `158px` }
                }
              >
                {i !== 0 ? (
                  <FormattedMessage
                    id={`TABLE.BLOGS.${column.render("Header")}`}
                  />
                ) : (
                  column.render("Header")
                )}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </span>
            </th>
          ))}
        </tr>
      ))}
    </>
  );
}

export default TableHeader;
