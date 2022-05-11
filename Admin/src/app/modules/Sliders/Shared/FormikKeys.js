import * as Yup from "yup";

export const initialValues = {
  title_en: "",
  title_ar: "",
  image: "",
  isActive: "",
  isMobile: "",
};

export const sliderValidation = Yup.object({
  title_en: Yup.string().required("Required !"),
  title_ar: Yup.string().required("Required !"),
  image: Yup.string().required("Required !"),
  isActive: Yup.string().required("Required !"),
  isMobile: Yup.string().required("Required !"),
});
