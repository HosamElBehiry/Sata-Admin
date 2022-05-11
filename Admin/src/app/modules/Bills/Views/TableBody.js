import React from "react";
import DispLang from "../../../../utils/HEADERS";

function TableBody({ page, prepareRow }) {
  return (
    <>
      {page.map((row) => {
        prepareRow(row);
        return (
          <tr
            {...row.getRowProps()}
            className="datatable-row"
            style={{ left: `0px` }}
          >
            {row.cells.map((cell, i) => {
              return (
                <td
                  {...cell.getCellProps()}
                  className={`datatable-cell ${
                    i === 0 || i === 1
                      ? "datatable-cell-sorted datatable-cell-left"
                      : ""
                  }`}
                >
                  <span
                    style={
                      i === 0 || i === 1
                        ? { width: `40px` }
                        : i === 2 || i === 3
                        ? { width: "250px" }
                        : i !== 7
                        ? { width: "130px" }
                        : {
                            overflow: `visible`,
                            position: `relative`,
                            width: `130px`,
                          }
                    }
                  >
                    {i === 0 || i === 1 ? (
                      <span className="font-weight-bolder">
                        {cell.render("Cell")}
                      </span>
                    ) : i === 2 || i === 3 ? (
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-40 symbol-sm flex-shrink-0">
                          <img
                            className=""
                            src={`${process.env.REACT_APP_API_URL}/${
                              i === 2
                                ? row.original.vendor.image
                                : row.original.ordItm.product.image
                            }`}
                            alt="Pic"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">
                            {i === 2
                              ? row.original.vendor.fullname
                              : DispLang
                              ? row.original.ordItm.product.title.ar
                              : row.original.ordItm.product.title.en}
                          </div>
                          <span className="text-muted font-weight-bold text-hover-primary">
                            {i === 2
                              ? row.original.vendor.email
                              : row.original.ordItm.product.price}{" "}
                            {i !== 2 && " EGP"}
                          </span>
                        </div>
                      </div>
                    ) : i === 4 ? (
                      <>
                        <div className="font-weight-bolder text-primary mb-0">
                          {cell.render("Cell")}
                        </div>
                        <div className="text-muted">
                          {String(row.original.acceptedBySata) === "true"
                            ? DispLang
                              ? `تم الاستلام`
                              : `Accepted`
                            : DispLang
                            ? `لم يتم الاستلام`
                            : `Not Accepted`}
                        </div>
                      </>
                    ) : i === 5 ? (
                      <>
                        <div className="font-weight-bolder text-success mb-0">
                          {String(row.original.deliverdToSata) === "true"
                            ? DispLang
                              ? ` تم الارسال`
                              : "Deliverd"
                            : DispLang
                            ? "لم يتم الارسال"
                            : "Not Deliverd"}
                        </div>
                        <div className="text-muted ml-1">
                          {row.original.order.payment_type.with_money
                            ? DispLang
                              ? "مدفوعه نقدا"
                              : "Money"
                            : DispLang
                            ? "مدفوعه من خلال المحفظه"
                            : `Bocket`}
                        </div>
                      </>
                    ) : i === 6 ? (
                      <>
                        <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">
                          {cell.render("Cell")} {` EGP`}
                        </div>
                        <div className="text-muted ml-1">
                          {` ${DispLang ? "  المباع :" : "Bought: "}`}
                          {row.original.ordItm.quantity}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </span>
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
}

export default TableBody;
