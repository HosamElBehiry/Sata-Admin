import * as Yup from "yup";

export const initialValues = {
  fullname: "",
  telephone: "",
  mobile: "",
  email: "",
  image: "",
  role: "delivery",
  password: "",
  vpassword: "",
  licence_front: "",
  licence_back: "",
  licenceCar_front: "",
  licenceCar_back: "",
  drugAnalysis: "",
  company: "",
  isDeleted: "",
  licence_expiration: "",
  licenceCar_expiration: "",
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
  licence_front: Yup.string().required("Required !"),
  licence_back: Yup.string().required("Required !"),
  licenceCar_front: Yup.string().required("Required !"),
  licenceCar_back: Yup.string().required("Required !"),
  drugAnalysis: Yup.string().required("Required !"),
  company: Yup.string().required("Required !"),
  licence_expiration: Yup.string().required("Required !"),
  licenceCar_expiration: Yup.string().required("Required !"),
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
  licence_front: Yup.string().required("This Field is Required!"),
  licence_back: Yup.string().required("This Field is Required!"),
  licenceCar_front: Yup.string().required("This Field is Required!"),
  licenceCar_back: Yup.string().required("This Field is Required!"),
  drugAnalysis: Yup.string().required("This Field is Required!"),
  company: Yup.string().required("Required!"),
  licence_expiration: Yup.string().required("Required !"),
  licenceCar_expiration: Yup.string().required("Required !"),
});
