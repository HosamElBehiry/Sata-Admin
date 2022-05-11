/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { FormattedMessage } from "react-intl";
import {
  MdDeliveryDining,
  MdNotificationsActive,
  MdStarRate,
} from "react-icons/md";
import { GiKnightBanner } from "react-icons/gi";
import { BiSliderAlt } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { FaBloggerB, FaUserSecret, FaUsersCog } from "react-icons/fa";
import { GoListOrdered } from "react-icons/go";
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.DASHBOARD" />
            </span>
          </NavLink>
        </li>

        {/* Company Shipping */}

        {user.roles[0] === 1 && (
          <li
            className={`menu-item ${getMenuItemActive(
              "/company-shipping",
              false
            )}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/company-shipping">
              <span className="svg-icon menu-icon">
                <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Home/Building.svg")}
                />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.COMPANYSHIPPING" />
              </span>
            </NavLink>
          </li>
        )}

        {/* /Site-Settings */}
        {user.roles[0] === 1 && (
          <li
            className={`menu-item ${getMenuItemActive(
              "/Site-Settings",
              false
            )}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/Site-Settings">
              <span className="svg-icon menu-icon">
                <SVG
                  src={toAbsoluteUrl("/media/svg/icons/General/Settings-1.svg")}
                />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.SETTINGS" />
              </span>
            </NavLink>
          </li>
        )}

        {/* <h4 className="menu-text">{` Components `}</h4> */}
        <li className="menu-section ">
          <h4 className="menu-text">{`  `}</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>

        {/* Rates  */}

        {user.roles[0] === 1 && (
          <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/rates",
              true
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/rates">
              <span className="svg-icon menu-icon">
                <MdStarRate />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.RATES" />
              </span>
              <i
                className="menu-arrow text-muted"
                style={{ fontSize: "0.8rem", marginRight: "5px" }}
              />
            </NavLink>
            <div className="menu-submenu ">
              <ul className="menu-subnav">
                <ul className="menu-subnav">
                  <li
                    className="menu-item  menu-item-parent"
                    aria-haspopup="true"
                  >
                    <span className="menu-link">
                      <span className="menu-text">
                        <FormattedMessage id="MENU.RATES" />
                      </span>
                    </span>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/rates/vendor">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.VENDORS" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/rates/delivery">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.DELIVERYBOYS" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/rates/product">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.PRODUCTS" />
                      </span>
                    </NavLink>
                  </li>

                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/rates/order">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.ORDERS" />
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </div>
          </li>
        )}

        {/* Brands  */}
        {user.roles[0] === 1 && (
          <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/brands",
              true
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/brands">
              <span className="svg-icon menu-icon">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Text/Bold.svg")} />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.BRANDS" />
              </span>
              <i
                className="menu-arrow text-muted"
                style={{ fontSize: "0.8rem", marginRight: "5px" }}
              />
            </NavLink>
            <div className="menu-submenu ">
              <ul className="menu-subnav">
                <ul className="menu-subnav">
                  <li
                    className="menu-item  menu-item-parent"
                    aria-haspopup="true"
                  >
                    <span className="menu-link">
                      <span className="menu-text">
                        <FormattedMessage id="MENU.BRANDS" />
                      </span>
                    </span>
                  </li>
                  <li className={`menu-item `} aria-haspopup="true">
                    <NavLink className="menu-link" to="/brands">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.ALL" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item `} aria-haspopup="true">
                    <NavLink className="menu-link" to="/brands/add">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.ADD" />
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </div>
          </li>
        )}

        {/* Categories */}
        {user.roles[0] === 1 && (
          <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              "",
              true
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/categories" exact>
              <span className="svg-icon menu-icon">
                <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Home/Commode2.svg")}
                />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.CATEGORIES" />
              </span>
              <i
                className="menu-arrow text-muted"
                style={{ fontSize: "0.8rem", marginRight: "5px" }}
              />
            </NavLink>
            <div className="menu-submenu">
              <i className="menu-arrow" />
              <ul className="menu-subnav">
                <li className="menu-item menu-item-parent" aria-haspopup="true">
                  <span className="menu-link">
                    <span className="menu-text">
                      <FormattedMessage id="MENU.CATEGORIES" />
                    </span>
                  </span>
                </li>
                <li className={`menu-item `} aria-haspopup="true">
                  <NavLink className="menu-link" to="/categories">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.ALL" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/categories/add">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.ADD" />
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        )}

        {/* Banners */}

        {user.roles[0] === 1 && (
          <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/banners",
              true
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/banners">
              <span className="svg-icon menu-icon">
                <GiKnightBanner />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.BANNERS" />
              </span>
              <i
                className="menu-arrow text-muted"
                style={{ fontSize: "0.8rem", marginRight: "5px" }}
              />
            </NavLink>
            <div className="menu-submenu ">
              <ul className="menu-subnav">
                <ul className="menu-subnav">
                  <li
                    className="menu-item  menu-item-parent"
                    aria-haspopup="true"
                  >
                    <span className="menu-link">
                      <span className="menu-text">
                        <FormattedMessage id="MENU.BANNERS" />
                      </span>
                    </span>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/banners/all">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.ALL" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/banners/add">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.ADD" />
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </div>
          </li>
        )}

        {/* Mobile Sliders */}

        {user.roles[0] === 1 && (
          <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/sliders",
              true
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/sliders">
              <span className="svg-icon menu-icon">
                <BiSliderAlt />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.SLIDERS" />
              </span>
              <i
                className="menu-arrow text-muted"
                style={{ fontSize: "0.8rem", marginRight: "5px" }}
              />
            </NavLink>
            <div className="menu-submenu ">
              <ul className="menu-subnav">
                <ul className="menu-subnav">
                  <li
                    className="menu-item  menu-item-parent"
                    aria-haspopup="true"
                  >
                    <span className="menu-link">
                      <span className="menu-text">
                        <FormattedMessage id="MENU.SLIDERS" />
                      </span>
                    </span>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/sliders/all">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.ALL" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item `} aria-haspopup="true">
                    <NavLink className="menu-link" to="/sliders/add">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.ADD" />
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </div>
          </li>
        )}

        {/* <h4 className="menu-text">{` Applications `}</h4> */}
        {user.roles[0] === 1 && (
          <li className="menu-section ">
            <h4 className="menu-text">{`  `}</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
        )}

        {/* Orders */}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/orders",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" exact to="/orders">
            <span className="svg-icon menu-icon">
              <GoListOrdered />
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.ORDERS" />
            </span>
            <i
              className="menu-arrow text-muted"
              style={{ fontSize: "0.8rem", marginRight: "5px" }}
            />
          </NavLink>
          <div className="menu-submenu">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item menu-item-parent">
                <span className="menu-link">
                  <span className="menu-text">
                    <FormattedMessage id="MENU.ORDERS" />
                  </span>
                </span>
              </li>
              <li className={`menu-item `}>
                <NavLink className="menu-link" to="/orders" exact>
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">
                    <FormattedMessage id="MENU.ALL" />
                  </span>
                </NavLink>
              </li>
              {user.roles[0] === 1 && (
                <>
                  <li className={`menu-item `}>
                    <NavLink
                      className="menu-link"
                      to="/orders/type/Pending"
                      exact
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="TABLE.ORDERS.TYPES.PENDING" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item `}>
                    <NavLink
                      className="menu-link"
                      to="/orders/type/Confirmed"
                      exact
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="TABLE.ORDERS.TYPES.CONFIRMED" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item `}>
                    <NavLink
                      className="menu-link"
                      to="/orders/type/onDelivery"
                      exact
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="TABLE.ORDERS.TYPES.ONDELIVERY" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item `}>
                    <NavLink
                      className="menu-link"
                      to="/orders/type/Deliverd"
                      exact
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="TABLE.ORDERS.TYPES.DELIVERD" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item `}>
                    <NavLink
                      className="menu-link"
                      to="/orders/type/Refused"
                      exact
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="TABLE.ORDERS.TYPES.REFUSED" />
                      </span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </li>

        {/* product section */}

        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/products",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/products/all">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Cart2.svg")} />
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.PRODUCTS" />
            </span>
            <i
              className="menu-arrow text-muted"
              style={{ fontSize: "0.8rem", marginRight: "5px" }}
            />
          </NavLink>
          <div className="menu-submenu">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">
                    <FormattedMessage id="MENU.PRODUCTS" />
                  </span>
                </span>
              </li>
              <li className={`menu-item`} aria-haspopup="true">
                <NavLink className="menu-link" to="/products/all">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">
                    <FormattedMessage id="MENU.ALL" />
                  </span>
                </NavLink>
              </li>
              {user.roles[0] === 1 && (
                <>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/products/lowest">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.PRODUCTS.LOWEST" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/products/mostBought">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.PRODUCTS.MOSTBOUGHT" />
                      </span>
                    </NavLink>
                  </li>
                </>
              )}
              {/* خلى بالك ان البائع لازم الحاله بتاعته فى جدول اليوزرات
               وفى جدول البائع يكون متوافق عليه 
               من الادمن عشانت يقدر يضيف او يعدل المنتجات */}
              {user.roles[0] === 1 ? (
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/products/Add">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.ADD" />
                    </span>
                  </NavLink>
                </li>
              ) : (
                user.roles[0] === 2 &&
                user.status === "Confirmed" && (
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/products/Add">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.ADD" />
                      </span>
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        </li>

        {/* <h4 className="menu-text">{` Customers `}</h4> */}
        {user.roles[0] === 1 && (
          <li className="menu-section ">
            <h4 className="menu-text">{`  `}</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
        )}

        {user.roles[0] === 1 && (
          <li
            className={`menu-item menu-item-submenu `}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/customers/all">
              <span className="svg-icon menu-icon">
                <SVG
                  src={toAbsoluteUrl(
                    "/media/svg/icons/Communication/Group.svg"
                  )}
                />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.CUSTOMERS" />
              </span>
              <i
                className="menu-arrow text-muted"
                style={{ fontSize: "0.8rem", marginRight: "5px" }}
              />
            </NavLink>
            <div className="menu-submenu">
              <i className="menu-arrow" />
              <ul className="menu-subnav">
                <li className="menu-item menu-item-parent" aria-haspopup="true">
                  <span className="menu-link">
                    <span className="menu-text">
                      <FormattedMessage id="MENU.CUSTOMERS" />
                    </span>
                  </span>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/customers/all">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.ALL" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/customers/online">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.ONLINE" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/customers/news/3">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.NEW" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/customers/news/7">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.JOINED7DAY" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/customers/news/30">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.JOINED1MONTH" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink
                    className="menu-link"
                    exact
                    to="/customers/not-signed/7"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.NOTSIGNED7DAY" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink
                    className="menu-link"
                    exact
                    to="/customers/not-signed/30"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.NOTSIGNED1MONTH" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/customers/blocked">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.BLOCKED" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/customers/Add">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.ADD" />
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        )}

        {user.roles[0] === 1 && (
          <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/vendors",
              true
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/vendors/all">
              <span className="svg-icon menu-icon">
                <FaUserSecret />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.VENDORS" />
              </span>
              <i
                className="menu-arrow text-muted"
                style={{ fontSize: "0.8rem", marginRight: "5px" }}
              />
            </NavLink>
            <div className="menu-submenu">
              <i className="menu-arrow" />
              <ul className="menu-subnav">
                <li className="menu-item menu-item-parent" aria-haspopup="true">
                  <span className="menu-link">
                    <span className="menu-text">
                      <FormattedMessage id="MENU.VENDORS" />
                    </span>
                  </span>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/vendors/all">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.ALL" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/vendors/online">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.ONLINE" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/vendors/news/3">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.NEW" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/vendors/news/7">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.JOINED7DAY" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/vendors/news/30">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.JOINED1MONTH" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink
                    className="menu-link"
                    exact
                    to="/vendors/not-signed/7"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.NOTSIGNED7DAY" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink
                    className="menu-link"
                    exact
                    to="/vendors/not-signed/30"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.NOTSIGNED1MONTH" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/vendors/blocked">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.BLOCKED" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/vendors/Add">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.ADD" />
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        )}

        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/workers",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/workers/all">
            <span className="svg-icon menu-icon">
              <FaUsersCog />
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.WORKERS" />
            </span>
            <i
              className="menu-arrow text-muted"
              style={{ fontSize: "0.8rem", marginRight: "5px" }}
            />
          </NavLink>
          <div className="menu-submenu">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">
                    <FormattedMessage id="MENU.WORKERS" />
                  </span>
                </span>
              </li>

              <li className={`menu-item`} aria-haspopup="true">
                <NavLink className="menu-link" to="/workers/all">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">
                    <FormattedMessage id="MENU.ALL" />
                  </span>
                </NavLink>
              </li>

              {user.roles[0] === 1 && (
                <>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/workers/online">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.ONLINE" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/workers/news/3">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.NEW" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/workers/news/7">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.JOINED7DAY" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/workers/news/30">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.JOINED1MONTH" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink
                      className="menu-link"
                      exact
                      to="/workers/not-signed/7"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.NOTSIGNED7DAY" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink
                      className="menu-link"
                      exact
                      to="/workers/not-signed/30"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.NOTSIGNED1MONTH" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/workers/blocked">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.BLOCKED" />
                      </span>
                    </NavLink>
                  </li>
                </>
              )}
              <li className={`menu-item`} aria-haspopup="true">
                <NavLink className="menu-link" to="/workers/Add">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">
                    <FormattedMessage id="MENU.ADD" />
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </li>

        {user.roles[0] === 1 && (
          <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/deliveries",
              true
            )} `}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/deliveries/all">
              <span className="svg-icon menu-icon">
                <MdDeliveryDining />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.DELIVERYBOYS" />
              </span>
              <i
                className="menu-arrow text-muted"
                style={{ fontSize: "0.8rem", marginRight: "5px" }}
              />
            </NavLink>
            <div className="menu-submenu ">
              <ul className="menu-subnav">
                <ul className="menu-subnav">
                  <li
                    className="menu-item  menu-item-parent"
                    aria-haspopup="true"
                  >
                    <span className="menu-link">
                      <span className="menu-text">
                        <FormattedMessage id="MENU.DELIVERYBOYS" />
                      </span>
                    </span>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" exact to="/deliveries/all">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.ALL" />
                      </span>
                    </NavLink>
                  </li>

                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink
                      className="menu-link"
                      exact
                      to="/deliveries/news/3"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.NEW" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink
                      className="menu-link"
                      exact
                      to="/deliveries/blocked"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.BLOCKED" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink
                      className="menu-link"
                      exact
                      to="/deliveries/news/7"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.JOINED7DAY" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink
                      className="menu-link"
                      exact
                      to="/deliveries/news/30"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.JOINED1MONTH" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink
                      className="menu-link"
                      exact
                      to="/deliveries/not-signed/7"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.NOTSIGNED7DAY" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink
                      className="menu-link"
                      exact
                      to="/deliveries/not-signed/30"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.NOTSIGNED1MONTH" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" exact to="/deliveries/Add">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.ADD" />
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </div>
          </li>
        )}

        {/* <h4 className="menu-text">{` Components `}</h4> */}
        {user.roles[0] === 1 && (
          <li className="menu-section ">
            <h4 className="menu-text">{`  `}</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
        )}

        {/* soft delete  */}
        {user.roles[0] === 1 && (
          <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/deleted",
              true
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/deleted">
              <span className="svg-icon menu-icon">
                <AiFillDelete />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.DELETED" />
              </span>
              <i
                className="menu-arrow text-muted"
                style={{ fontSize: "0.8rem", marginRight: "5px" }}
              />
            </NavLink>
            <div className="menu-submenu">
              <i className="menu-arrow" />
              <ul className="menu-subnav">
                <li className="menu-item menu-item-parent" aria-haspopup="true">
                  <span className="menu-link">
                    <span className="menu-text">
                      <FormattedMessage id="MENU.DELETED" />
                    </span>
                  </span>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/deleted/user">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.CUSTOMERS" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/deleted/vendor">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.VENDORS" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/deleted/worker">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.WORKERS" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/deleted/brand">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.BRANDS" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/deleted/category">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.CATEGORIES" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/deleted/delivery">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.DELIVERYBOYS" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/deleted/order">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.ORDERS" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/deleted/product">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.PRODUCTS" />
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        )}

        {/* Shipping */}
        {/* test .. */}
        {user.roles[0] === 1 && (
          <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/shipping",
              true
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/shipping">
              <span className="svg-icon menu-icon">
                <ImLocation />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.SHIPPING" />
              </span>
              <i
                className="menu-arrow text-muted"
                style={{ fontSize: "0.8rem", marginRight: "5px" }}
              />
            </NavLink>
            <div className="menu-submenu ">
              <i
                className="menu-arrow text-muted"
                style={{ fontSize: "0.8rem", marginRight: "5px" }}
              />
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">
                      <FormattedMessage id="MENU.SHIPPING" />
                    </span>
                  </span>
                </li>

                {/* Inputs */}
                <li
                  className={`menu-item menu-item-submenu`}
                  aria-haspopup="true"
                  data-menu-toggle="hover"
                >
                  <NavLink
                    className="menu-link menu-toggle"
                    to="/shipping/inputs"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.SHIPPING.COUNTRY" />
                    </span>
                    <i
                      className="menu-arrow text-muted"
                      style={{ fontSize: "0.8rem", marginRight: "5px" }}
                    />
                  </NavLink>
                  <div className="menu-submenu ">
                    <i
                      className="menu-arrow text-muted"
                      style={{ fontSize: "0.8rem", marginRight: "5px" }}
                    />
                    <ul className="menu-subnav">
                      <li className={`menu-item `} aria-haspopup="true">
                        <NavLink className="menu-link" to="/shipping/county">
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">
                            <FormattedMessage id="MENU.ALL" />
                          </span>
                        </NavLink>
                      </li>
                      <li className={`menu-item `} aria-haspopup="true">
                        <NavLink
                          className="menu-link"
                          to="/shipping/county/Add"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">
                            <FormattedMessage id="MENU.ADD" />{" "}
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>

                <li
                  className={`menu-item menu-item-submenu`}
                  aria-haspopup="true"
                  data-menu-toggle="hover"
                >
                  <NavLink
                    className="menu-link menu-toggle"
                    to="/shipping/inputs"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.SHIPPING.CITY" />
                    </span>
                    <i
                      className="menu-arrow text-muted"
                      style={{ fontSize: "0.8rem", marginRight: "5px" }}
                    />
                  </NavLink>
                  <div className="menu-submenu ">
                    <i
                      className="menu-arrow text-muted"
                      style={{ fontSize: "0.8rem", marginRight: "5px" }}
                    />
                    <ul className="menu-subnav">
                      <li className={`menu-item `} aria-haspopup="true">
                        <NavLink className="menu-link" to="/shipping/city">
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">
                            <FormattedMessage id="MENU.ALL" />
                          </span>
                        </NavLink>
                      </li>
                      <li className={`menu-item `} aria-haspopup="true">
                        <NavLink className="menu-link" to="/shipping/city/Add">
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">
                            <FormattedMessage id="MENU.ADD" />{" "}
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>

                <li
                  className={`menu-item menu-item-submenu`}
                  aria-haspopup="true"
                  data-menu-toggle="hover"
                >
                  <NavLink
                    className="menu-link menu-toggle"
                    to="/shipping/inputs"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="TABLE.SHIPPING.REGION.REGION" />
                    </span>
                    <i
                      className="menu-arrow text-muted"
                      style={{ fontSize: "0.8rem", marginRight: "5px" }}
                    />
                  </NavLink>
                  <div className="menu-submenu ">
                    <i
                      className="menu-arrow text-muted"
                      style={{ fontSize: "0.8rem", marginRight: "5px" }}
                    />
                    <ul className="menu-subnav">
                      <li className={`menu-item `} aria-haspopup="true">
                        <NavLink className="menu-link" to="/shipping/regions">
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">
                            <FormattedMessage id="MENU.ALL" />
                          </span>
                        </NavLink>
                      </li>
                      <li className={`menu-item `} aria-haspopup="true">
                        <NavLink
                          className="menu-link"
                          to="/shipping/regions/Add"
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">
                            <FormattedMessage id="MENU.ADD" />{" "}
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        )}
        {/* end test .. */}

        {/* Blogs */}
        {user.roles[0] === 1 && (
          <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/blogs",
              true
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/blogs">
              <span className="svg-icon menu-icon">
                <FaBloggerB />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.BLOGS" />
              </span>
              <i
                className="menu-arrow text-muted"
                style={{ fontSize: "0.8rem", marginRight: "5px" }}
              />
            </NavLink>
            <div className="menu-submenu">
              <i className="menu-arrow" />
              <ul className="menu-subnav">
                <li className="menu-item menu-item-parent" aria-haspopup="true">
                  <span className="menu-link">
                    <span className="menu-text">
                      <FormattedMessage id="MENU.BLOGS" />
                    </span>
                  </span>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/blogs-page">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.ALL" />
                    </span>
                  </NavLink>
                </li>
                <li className={`menu-item`} aria-haspopup="true">
                  <NavLink className="menu-link" to="/blogs-page/new">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">
                      <FormattedMessage id="MENU.ADD" />
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        )}

        {/* Notifications */}

        {user.roles[0] === 1 && (
          <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/Notifications",
              true
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/Notifications">
              <span className="svg-icon menu-icon">
                <MdNotificationsActive />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.NOTIFICATIONS" />
              </span>
              <i
                className="menu-arrow text-muted"
                style={{ fontSize: "0.8rem", marginRight: "5px" }}
              />
            </NavLink>
            <div className="menu-submenu ">
              <ul className="menu-subnav">
                <ul className="menu-subnav">
                  <li
                    className="menu-item  menu-item-parent"
                    aria-haspopup="true"
                  >
                    <span className="menu-link">
                      <span className="menu-text">
                        <FormattedMessage id="MENU.NOTIFICATIONS" />
                      </span>
                    </span>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/Notifications">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.NOTIFICATIONS.SEND" />
                      </span>
                    </NavLink>
                  </li>
                  <li className={`menu-item`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/Notifications/Contacts">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.NOTIFICATIONS.ALL.CONTACTS" />
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </div>
          </li>
        )}
      </ul>
    </>
  );
}
