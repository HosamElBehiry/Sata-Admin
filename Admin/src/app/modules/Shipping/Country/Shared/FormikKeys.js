import * as Yup from "yup";

export const initialValues = {
  name_en: "",
  name_ar: "",
  image: "",
};

export const validationSchema = Yup.object({
  name_en: Yup.string().required("Required !"),
  name_ar: Yup.string().required("Required !"),
  image: Yup.string().required("Required !"),
});
