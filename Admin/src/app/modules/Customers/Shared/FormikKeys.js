import * as Yup from "yup";

export const initialValues = {
  image: "",
  fullname: "",
  email: "",
  role: "user",
  mobile: "",
  telephone: "",
  password: "",
  vpassword: "",
  status: "",
  isDeleted: "",
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
});

export const validationSchema = Yup.object({
  image: Yup.string().required("Required !"),
  fullname: Yup.string().required("Required !"),
  email: Yup.string()
    .required("Required !")
    .email("Email is not valid !"),
  mobile: Yup.string().required("Required !"),
  telephone: Yup.string().required("Required !"),
  password: Yup.string().required("Required !"),
  vpassword: Yup.string()
    .required("Required !")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password didn't match"
      ),
    }),
});
