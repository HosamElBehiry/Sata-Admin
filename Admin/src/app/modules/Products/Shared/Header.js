import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { FormattedMessage } from "react-intl";

function Header({ current, setCurrent }) {
  return (
    <div className="card-header card-header-tabs-line nav-tabs-line-3x">
      <div className="card-toolbar">
        <ul className="nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-3x">
          <li
            className="nav-item mr-3 cursor-pointer"
            onClick={() => setCurrent("Profile")}
          >
            <span
              className={`nav-link ${current === "Profile" && "active"}`}
              data-toggle="tab"
            >
              <span className="nav-icon">
                <span className="svg-icon">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Design/Image.svg")}
                  ></SVG>
                </span>
              </span>
              <span className="nav-text font-size-lg">
                <FormattedMessage id="TABLE.VENDORS.TITLE.IMAGES" />
              </span>
            </span>
          </li>
          <li
            className="nav-item mr-3 cursor-pointer"
            onClick={() => setCurrent("Info")}
          >
            <span
              className={`nav-link ${current === "Info" && "active"}`}
              data-toggle="tab"
            >
              <span className="nav-icon">
                <span className="svg-icon">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/General/User.svg")}
                  ></SVG>
                </span>
              </span>
              <span className="nav-text font-size-lg">
                <FormattedMessage id="TABLE.VENDORS.TITLE.INFO" />
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
