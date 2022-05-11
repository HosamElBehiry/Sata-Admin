import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import DispLang from "../../../../utils/HEADERS";

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce(
    (value) => setFilter(value || undefined),
    500
  );
  return (
    <div className="row align-items-center">
      <div className="col-lg-9 col-xl-8">
        <div className="row align-items-center">
          <div className="col-md-4 my-2 my-md-0">
            <div className="input-icon">
              <input
                type="text"
                className="form-control"
                placeholder={DispLang ? "ابحث" : "Search..."}
                id="kt_datatable_search_query"
                value={value || ""}
                onChange={(e) => {
                  setValue(e.target.value);
                  onChange(e.target.value);
                }}
              />
              <span>
                <i className="flaticon2-search-1 text-muted"></i>
              </span>
            </div>
          </div>
          <div className="col-md-4 my-2 my-md-0">
            <div className="d-flex align-items-center">
              <label className="mr-3 mb-0 d-none d-md-block">
                {DispLang ? `الحالات` : `Status:`}
              </label>
              <div className="d-flex align-items-center">
                <select
                  className="form-control form-control-sm text-dark font-weight-bold mr-4 border-0 bg-light"
                  style={{ width: "200px" }}
                  value={value || ""}
                  onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                  }}
                >
                  <option value="">
                    {DispLang ? `اختر من الحالات` : `Select By Status`}
                  </option>
                  <option value="Pending">
                    {DispLang ? `معلقه` : `Pending`}
                  </option>
                  <option value="Confirmed">
                    {DispLang ? `مؤكده` : `Confirmed`}
                  </option>
                  <option value="Deliverd">
                    {DispLang ? `تم توصيلها` : `Deliverd`}
                  </option>
                  <option value="onDelivery">
                    {DispLang ? `جارى توصيلها` : `onDelivery`}
                  </option>
                  <option value="Refused">
                    {DispLang ? `مرفوضه` : `Refused`}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2 my-md-0">
            <div className="d-flex align-items-center">
              <label className="mr-3 mb-0 d-none d-md-block">
                {DispLang ? `المدفوع` : `Paid:`}
              </label>

              <div className="d-flex align-items-center">
                <select
                  className="form-control form-control-sm text-dark font-weight-bold mr-4 border-0 bg-light"
                  style={{ width: "200px" }}
                  value={value || ""}
                  onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                  }}
                >
                  <option value="">
                    {DispLang ? `ابحث بالمدفوع` : `Paid`}
                  </option>
                  <option value="true">{DispLang ? ` مدفوع` : `paid`}</option>
                  <option value="false">
                    {DispLang ? `غير مدفوع` : `not paid`}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFilter;
