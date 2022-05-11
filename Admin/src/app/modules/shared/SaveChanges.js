import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";

function SaveChanges({ formik }) {
  const history = useHistory();
  return (
    <div className="card-footer pb-0">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9">
              <button
                type={`submit`}
                className="btn btn-light-primary font-weight-bold"
                disabled={
                  !formik.isValid || !formik.dirty || formik.values.isSubmitting
                }
              >
                <FormattedMessage id="BUTTON.SAVECHANGES" />
              </button>
              <button
                type={"button"}
                className="btn btn-clean font-weight-bold"
                onClick={() => history.goBack()}
              >
                <FormattedMessage id="BUTTON.CANCEL" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveChanges;
