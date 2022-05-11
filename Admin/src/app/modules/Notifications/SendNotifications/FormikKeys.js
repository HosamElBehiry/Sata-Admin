import * as Yup from "yup";

export const initialValues = {
  all: [],
  customers: [],
  vendors: [],
  workers: [],
  deliveries: [],
  description_en: "",
  description_ar: "",
};

export const validationSchema = Yup.object().shape({
  description_en: Yup.string().required("Required !"),
  description_ar: Yup.string().required("Required !"),
});
