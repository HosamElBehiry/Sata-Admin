import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import Parent from "./Parent";
import { FormattedMessage } from "react-intl";
export const SettingContent = React.createContext();
function Header() {
  const [current, setCurrent] = useState("Images");
  return (
    <div className="d-flex flex-column-fluid">
      <div className="container">
        <div className="card card-custom">
          <div className="card-header card-header-tabs-line nav-tabs-line-3x">
            <div className="card-toolbar">
              <ul className="nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-3x">
                <li
                  className="nav-item mr-3 cursor-pointer"
                  onClick={() => setCurrent(`Images`)}
                >
                  <span
                    className={`nav-link ${current === "Images" && "active"}`}
                    data-toggle="tab"
                  >
                    <span className="nav-icon">
                      <span className="svg-icon">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Design/Image.svg"
                          )}
                        ></SVG>
                      </span>
                    </span>
                    <span className="nav-text font-size-lg">
                      <FormattedMessage id="TABLE.SETTINGS.HEADERS.IMAGE" />
                    </span>
                  </span>
                </li>
                <li
                  className="nav-item mr-3 cursor-pointer"
                  onClick={() => setCurrent(`Title`)}
                >
                  <span
                    className={`nav-link ${current === "Title" && "active"}`}
                    data-toggle="tab"
                  >
                    <span className="nav-icon">
                      <span className="svg-icon">
                        <SVG
                          src={toAbsoluteUrl("/media/svg/icons/Text/Text.svg")}
                        ></SVG>
                      </span>
                    </span>
                    <span className="nav-text font-size-lg">
                      <FormattedMessage id="TABLE.SETTINGS.HEADERS.TITLE" />
                    </span>
                  </span>
                </li>
                <li
                  className="nav-item mr-3 cursor-pointer"
                  onClick={() => setCurrent(`Descriptions`)}
                >
                  <span
                    className={`nav-link ${current === "Descriptions" &&
                      "active"}`}
                    data-toggle="tab"
                  >
                    <span className="nav-icon">
                      <span className="svg-icon">
                        <SVG
                          src={toAbsoluteUrl("/media/svg/icons/Text/Font.svg")}
                        ></SVG>
                      </span>
                    </span>
                    <span className="nav-text font-size-lg">
                      <FormattedMessage id="TABLE.SETTINGS.HEADERS.DESCRIPTION" />
                    </span>
                  </span>
                </li>
                <li
                  className="nav-item mr-3 cursor-pointer"
                  onClick={() => setCurrent(`Terms && Conditions`)}
                >
                  <span
                    className={`nav-link ${current === "Terms && Conditions" &&
                      "active"}`}
                    data-toggle="tab"
                  >
                    <span className="nav-icon">
                      <span className="svg-icon">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Home/Mirror.svg"
                          )}
                        ></SVG>
                      </span>
                    </span>
                    <span className="nav-text font-size-lg">
                      <FormattedMessage id="TABLE.SETTINGS.HEADERS.TERMS.CONDITIONS" />
                    </span>
                  </span>
                </li>
                <li
                  className="nav-item mr-3 cursor-pointer"
                  onClick={() => setCurrent(`Extras`)}
                >
                  <span
                    className={`nav-link ${current === "Extras" && "active"}`}
                    data-toggle="tab"
                  >
                    <span className="nav-icon">
                      <span className="svg-icon">
                        <MdOutlineAddLocationAlt
                          color={`${current === "Extras" ? "#3699ff" : ""}`}
                        />
                      </span>
                    </span>
                    <span className="nav-text font-size-lg">
                      <FormattedMessage id="TABLE.SETTINGS.HEADERS.EXTRAS" />{" "}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <SettingContent.Provider value={{ current, setCurrent }}>
            <Parent />
          </SettingContent.Provider>
        </div>
      </div>
    </div>
  );
}

export default Header;
