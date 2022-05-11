import * as Yup from "yup";

export const initialValues = {
  countryId: "",
  cityId: "",
  price: "",
  region_en: "",
  region_ar: "",
};

export const validationSchema = Yup.object({
  countryId: Yup.string().required("Required !"),
  cityId: Yup.string().required("Required !"),
  price: Yup.string().required("Required !"),
  region_en: Yup.string().required("Required !"),
  region_ar: Yup.string().required("Required !"),
});
