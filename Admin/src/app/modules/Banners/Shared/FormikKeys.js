import * as Yup from "yup";

export const initialValues = {
  image: "",
  isActive: "",
  title_en: "",
  title_ar: "",
  showInHome: "",
  startDate: "",
  endDate: "",
};

export const bannerValidation = Yup.object({
  image: Yup.string().required("Required !"),
  isActive: Yup.string().required("Required !"),
  title_en: Yup.string().required("Required !"),
  title_ar: Yup.string().required("Required !"),
  showInHome: Yup.string().required("Required !"),
  startDate: Yup.string().required("Required !"),
  endDate: Yup.string().required("Required !"),
});
