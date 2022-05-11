import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAsyncDebounce } from "react-table";
import DispLang from "../../../../utils/HEADERS";
import { hookDeleteMany } from "../../../actions/blogs/blogs";

function GlobalFilter({ filter, setFilter, selectedFlatRows }) {
  const [value, setValue] = useState(filter);
  const dispatch = useDispatch();
  const onChange = useAsyncDebounce(
    (value) => setFilter(value || undefined),
    500
  );
  const ids = selectedFlatRows.map((d) => d.original._id);
  return (
    <div className="mb-7">
      <div className="row align-items-center">
        <div className="col-lg-9 col-xl-8">
          <div className="row align-items-center">
            <div className="col-md-4 my-2 my-md-0">
              <div className="input-icon">
                <input
                  type="text"
                  className="form-control"
                  placeholder={DispLang ? "ابحث هنا" : "Search"}
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
            {ids.length > 0 && (
              <div className="col-md-4 my-2 my-md-0">
                <div className="input-icon">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => dispatch(hookDeleteMany(ids))}
                  >
                    {DispLang ? `مسح المحدد` : `Delete`}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalFilter;
