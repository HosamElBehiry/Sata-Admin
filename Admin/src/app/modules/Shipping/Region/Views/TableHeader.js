import React from "react";
import { FormattedMessage } from "react-intl";
const TableHeader = ({ headerGroups }) => {
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
                style={{
                  width: `${
                    i === 0 || i === 1 ? "40px" : i !== 6 ? "158px" : "130px"
                  }`,
                }}
              >
                {i === 0 ? (
                  column.render("Header")
                ) : (
                  <FormattedMessage
                    id={`TABLE.SHIPPING.REGION.${column.render("Header")}`}
                  />
                )}
              </span>
            </th>
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableHeader;
