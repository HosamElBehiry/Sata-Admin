import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useAsyncDebounce } from "react-table";
import { useHistory } from "react-router-dom";
import DispLang from "../../../../utils/HEADERS";
import { hookDeleteMany } from "../../../actions/subcategory/subcategoryActions";
import { useDispatch } from "react-redux";

function GlobalFilter({ filter, setFilter, id, selectedFlatRows }) {
  const [value, setValue] = useState(filter);
  const history = useHistory();
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
            <div className="col-md-2 my-2 my-md-0">
              <div className="d-flex align-items-center">
                <label className="mr-3 mb-0 d-none d-md-block"> </label>
                <div className="d-flex align-items-center">
                  <div
                    className=""
                    onClick={() =>
                      history.push(`/categories/sub-category/add/${id}`)
                    }
                  >
                    <span className="btn btn-primary px-6 font-weight-bold">
                      <FormattedMessage id="BUTTON.ADD" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {ids.length > 0 && (
              <div className="col-md-2 my-2 my-md-0">
                <div className="input-icon">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => dispatch(hookDeleteMany(ids, id))}
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
