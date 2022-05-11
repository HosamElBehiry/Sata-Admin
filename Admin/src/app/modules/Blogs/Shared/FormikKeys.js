import * as Yup from "yup";

export const initialValues = {
  title_en: "",
  title_ar: "",
  image: "",
  description_en: "",
  description_ar: "",
};

export const blogValidation = Yup.object({
  title_en: Yup.string().required("Required !"),
  title_ar: Yup.string().required("Required !"),
  image: Yup.string().required("Required !"),
  description_en: Yup.string().required("Required !"),
  description_ar: Yup.string().required("Required !"),
});
