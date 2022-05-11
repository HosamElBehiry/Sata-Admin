import * as Yup from "yup";

export const initialValues = {
  image: "",
  fullname: "",
  email: "",
  password: "",
  vpassword: "",
  telephone: "",
  mobile: "",
  role: "vendor",
  isDeleted: "",
  taxcard_front: "",
  taxcard_back: "",
  commercialRecord: "",
  taxcard_expiration: "",
  commericalRecord_expiration: "",
  app_balance_type: "",
  app_balance_amount: "",
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
  taxcard_front: Yup.string().required("Required !"),
  taxcard_back: Yup.string().required("Required !"),
  commercialRecord: Yup.string().required("Required !"),
  taxcard_expiration: Yup.string().required("Required !"),
  commericalRecord_expiration: Yup.string().required("Required !"),
  app_balance_type: Yup.string().required("Required !"),
  app_balance_amount: Yup.string().required("Required !"),
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
  taxcard_front: Yup.string().required("Required !"),
  taxcard_back: Yup.string().required("Required !"),
  commercialRecord: Yup.string().required("Required !"),
  taxcard_expiration: Yup.string().required("Required !"),
  commericalRecord_expiration: Yup.string().required("Required !"),
  app_balance_type: Yup.string().required("Required !"),
  app_balance_amount: Yup.string().required("Required !"),
});
