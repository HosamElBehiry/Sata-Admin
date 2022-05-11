import * as Yup from "yup";

export const initialValues = {
  image: "",
  fullname: "",
  email: "",
  role: "worker",
  mobile: "",
  telephone: "",
  password: "",
  vpassword: "",
  status: "",
  canAdd: "",
  canUpdate: "",
  canDelete: "",
  vendor: "",
};

export const validationUpdate = Yup.object({
  image: Yup.string().required("Required !"),
  fullname: Yup.string().required("Required !"),
  email: Yup.string()
    .required("Required !")
    .email("Email is not valid !"),
  mobile: Yup.string().required("Required !"),
  telephone: Yup.string().required("Required !"),
  status: Yup.string().required("Required !"),
  canAdd: Yup.string().required("Required !"),
  canUpdate: Yup.string().required("Required !"),
  canDelete: Yup.string().required("Required !"),
  vendor: Yup.string().required("Required !"),
});

export const vendInitialValues = {
  canAdd: "",
  canUpdate: "",
  canDelete: "",
};
