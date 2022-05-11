import React, { useContext, useState, Fragment } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { ProductContext } from "../Shared/FormikChildren";
import { FieldArray, ErrorMessage, Field } from "formik";
import TextError from "../../shared/TextError";
import DispLang from "../../../../utils/HEADERS";
function ImagesUpd({ formik, user }) {
  const data = useContext(ProductContext);
  const [productImages, setImages] = useState(formik.values.image);
  const [isChanged, setIsChanged] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleImage = (e, i) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        isChanged[i] = true;
        productImages[i] = { _id: productImages[i]._id, image: reader.result };
        setImages(productImages);
        setIsChanged(isChanged);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div
      className={`tab-pane show px-7 ${data === "Profile" && "active"}`}
      id="kt_user_edit_tab_1"
      role="tabpanel"
    >
      <div className={`form-group row `}>
        <label className="col-form-label"> </label>
        <FieldArray name="image">
          {(props) => {
            const { form } = props;
            const { values } = form;
            const { image } = values;
            return (
              <>
                {image.slice(0, 5).map((_img, i) => {
                  return (
                    <Fragment key={i}>
                      <div className={`col-2 mb-5 `}>
                        <div
                          className="image-input image-input-outline"
                          id="kt_profile_avatar"
                          style={
                            productImages[i] === ""
                              ? {
                                  backgroundImage: `url(${toAbsoluteUrl(
                                    "/media/users/blank.png"
                                  )})`,
                                }
                              : !isChanged[i]
                              ? {
                                  backgroundImage: `url(${process.env.REACT_APP_API_URL}/${productImages[i].image})`,
                                }
                              : {
                                  backgroundImage: `url(${productImages[i]})`,
                                }
                          }
                        >
                          <div className="image-input-wrapper"></div>
                          <label
                            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                            data-action="change"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Change avatar"
                            style={{ marginRight: "50%" }}
                          >
                            <i className="fa fa-pen icon-sm text-muted"></i>
                            <input
                              type="file"
                              name={`image[${i}]`}
                              accept=".png, .jpg, .jpeg"
                              onChange={(e) => {
                                handleImage(e, i);
                                formik.setFieldValue(`image[${i}]`, {
                                  _id: `${image[`${i}`][`${image["_id"]}`]}`,
                                  image: e.target.files[0],
                                });
                              }}
                            />
                            <Field type="hidden" name={`image[${i}]`} />
                          </label>
                          {i < 4 && (
                            <label
                              className={`btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow`}
                              data-action="remove"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Remove avatar"
                              onClick={() => {
                                // formik.values.image.push({
                                //   _id: "",
                                //   image: "",
                                // });
                                // push("");
                                // push({ _id: "", image: "" });
                                // productImages.push({ _id: "", image: "" });
                              }}
                            >
                              <i className="ki ki-plus text-success icon-xs text-muted"></i>
                            </label>
                          )}
                          {i > 0 && (
                            <label
                              className={`btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow`}
                              data-action="remove"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Remove avatar"
                              style={
                                DispLang
                                  ? { marginLeft: "95%" }
                                  : { marginRight: "95%" }
                              }
                              // onClick={() => remove(_img)}
                            >
                              <i className="ki ki-minus text-success icon-xs text-muted"></i>
                            </label>
                          )}
                        </div>
                      </div>
                      <ErrorMessage
                        name={`image[${i}]`}
                        component={TextError}
                      />
                    </Fragment>
                  );
                })}
              </>
            );
          }}
        </FieldArray>
      </div>
    </div>
  );
}

export default ImagesUpd;
