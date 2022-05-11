import * as Yup from "yup";

export const initialValues = {
  rate: "",
  comment: "",
  status: "",
};

export const validationSchema = Yup.object({
  rate: Yup.string().required("Required !"),
  comment: Yup.string().required("Required !"),
  status: Yup.string().required("Required !"),
});
