import { ErrorMessage, Field } from "formik";
import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import TextError from "../../shared/TextError";
import { ProductContext } from "./FormikChildren";
import { colorOptions, sizeOptions } from "./Constants";
import CustomSelect from "../../shared/CustomSelect";
import DispLang from "../../../../utils/HEADERS";
import { useFindAll } from "../../../private/Category";
import { useFilterByCategory } from "../../../private/SubCategory";
import { useFilterBrandByCategory } from "../../../private/Brand";
import { useFindByRole } from "../../../private/User";
import { useSelector } from "react-redux";

function ProductInfo({ formik }) {
  const data = useContext(ProductContext);
  const { user } = useSelector((state) => state.auth);
  const { data: categories } = useFindAll(false);
  const { data: subCategory } = useFilterByCategory(formik.values.categoryId);
  const { data: brand } = useFilterBrandByCategory(formik.values.categoryId);
  const { data: vendors } = useFindByRole("vendor", false, user.roles[0]);
  const categoryOptions = categories?.data.data.map((c) => {
    return { label: DispLang ? c.title.ar : c.title.en, value: c._id };
  });
  const subCategoryOptions = subCategory?.data.data.map((s) => {
    return { label: DispLang ? s.title.ar : s.title.en, value: s._id };
  });
  const brandsOptions = brand?.data.data.map((b) => {
    return { label: DispLang ? b.title.ar : b.title.en, value: b._id };
  });
  const vendorsOptions = vendors?.data.data.map((v) => {
    return { label: v.fullname, value: v._id };
  });
  return (
    <div
      className={`tab-pane px-7 ${data === "Info" && "active"}`}
      id="kt_user_edit_tab_2"
      role="tabpanel"
    >
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7">
          <div className="my-2">
            <div className="row">
              <label className="col-form-label col-3 text-lg-right text-left"></label>
              <div className="col-9">
                <h6 className="text-dark font-weight-bold mb-10"> </h6>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.BRANDS.TITLEEN" />
              </label>
              <div className="col-9">
                <div className="">
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="title_en"
                  />
                  <ErrorMessage name="title_en" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.BRANDS.TITLEAR" />
              </label>
              <div className="col-9">
                <div className="input-group input-group-lg input-group-solid">
                  <Field
                    name="title_ar"
                    className="form-control form-control-lg form-control-solid"
                  />
                </div>
                <ErrorMessage name="title_ar" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.PRODUCT.DESCRIPTION.EN" />
              </label>
              <div className="col-9">
                <div className="">
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="description_en"
                    as="textarea"
                  />
                  <ErrorMessage name="description_en" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.PRODUCT.DESCRIPTION.AR" />
              </label>
              <div className="col-9">
                <div className="">
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="description_ar"
                    as="textarea"
                  />
                  <ErrorMessage name="description_ar" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.ORDERS.PRICE" />
              </label>
              <div className="col-9">
                <div className="input-group input-group-lg input-group-solid">
                  <Field
                    name="price"
                    type="number"
                    className="form-control form-control-lg form-control-solid"
                  />
                </div>
                <ErrorMessage name="price" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.PRODUCT.STORE" />
              </label>
              <div className="col-9">
                <div className="">
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="store"
                    type="number"
                  />
                  <ErrorMessage name="store" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.PRODUCT.SIZE" />
              </label>
              <div className="col-9">
                <div className="">
                  <Field
                    style={{ marginBottom: "1rem", maxWidth: "20rem" }}
                    name="size"
                    options={sizeOptions}
                    component={CustomSelect}
                    placeholder={
                      DispLang
                        ? "اختر مقاس او عده مقاسات"
                        : "Select multi Sizes..."
                    }
                    isMulti={true}
                  />
                  <ErrorMessage name="size" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.PRODUCT.COLOR" />
              </label>
              <div className="col-9">
                <div className="">
                  <Field
                    style={{ marginBottom: "1rem", maxWidth: "20rem" }}
                    name="color"
                    options={colorOptions}
                    component={CustomSelect}
                    placeholder={
                      DispLang
                        ? "اختر لون او عده الوان"
                        : "Select multi Colors..."
                    }
                    isMulti={true}
                  />
                  <ErrorMessage name="color" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.PRODUCT.CATEGORY" />
              </label>
              <div className="col-9">
                <div className="">
                  <Field
                    name="categoryId"
                    options={categoryOptions}
                    component={CustomSelect}
                    style={{ marginBottom: "1rem", maxWidth: "20rem" }}
                    placeholder={
                      DispLang
                        ? "اختر القسم التابع له هذا المنتج  "
                        : "Select Category ... "
                    }
                  />
                </div>
                <ErrorMessage name="categoryId" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.PRODUCT.SUB.CATEGORY" />
              </label>
              <div className="col-9">
                <div className="">
                  <Field
                    name="subCategory"
                    options={subCategoryOptions}
                    component={CustomSelect}
                    style={{ marginBottom: "1rem", maxWidth: "20rem" }}
                    placeholder={
                      DispLang
                        ? "اختر القسم الفرعى التابع له هذا المنتج  "
                        : "Select Sub Category ... "
                    }
                  />
                  <ErrorMessage name="subCategory" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.PRODUCT.BRAND" />
              </label>
              <div className="col-9">
                <div className="">
                  <Field
                    className=""
                    name="brand"
                    options={brandsOptions}
                    component={CustomSelect}
                    style={{ marginBottom: "1rem", maxWidth: "20rem" }}
                    placeholder={
                      DispLang
                        ? "اختر العلامه التجاريه التابع لها هذا المنتج  "
                        : "Select Brand ... "
                    }
                  />
                  <ErrorMessage name="brand" component={TextError} />
                </div>
              </div>
            </div>
            {user.roles[0] === 1 && (
              <div className="form-group row">
                <label className="col-form-label col-3 text-lg-right text-left">
                  <FormattedMessage id="TABLE.PRODUCT.VENDOR" />
                </label>
                <div className="col-9">
                  <div className="">
                    <Field
                      className=""
                      name="vendor"
                      options={vendorsOptions}
                      component={CustomSelect}
                      style={{ marginBottom: "1rem", maxWidth: "20rem" }}
                      placeholder={
                        DispLang
                          ? "اختر البائع التابع له هذا المنتج  "
                          : "Select Vendor ... "
                      }
                    />
                    <ErrorMessage name="vendor" component={TextError} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
