import * as Yup from "yup";

export const initialValues = {
  mobile: "",
  address_en: "",
  address_ar: "",
  description_en: "",
  description_ar: "",
  logo: "",
  favIcon: "",
  title_en: "",
  title_ar: "",
  worktime: "",
  map: "",
  meta_title_en: "",
  meta_title_ar: "",
  about_title_en: "",
  about_title_ar: "",
  about_description_en: "",
  about_description_ar: "",
  term_conditons_en: "",
  term_conditons_ar: "",
  privacy_policy_en: "",
  privacy_policy_ar: "",
};

export const validationSchema = Yup.object({
  mobile: Yup.string().required("Required !"),
  address_en: Yup.string().required("Required !"),
  address_ar: Yup.string().required("Required !"),
  description_en: Yup.string().required("Required !"),
  description_ar: Yup.string().required("Required !"),
  logo: Yup.string().required("Required !"),
  favIcon: Yup.string().required("Required !"),
  title_en: Yup.string().required("Required !"),
  title_ar: Yup.string().required("Required !"),
  worktime: Yup.string().required("Required !"),
  map: Yup.string().required("Required !"),
  meta_title_en: Yup.string().required("Required !"),
  meta_title_ar: Yup.string().required("Required !"),
  about_title_en: Yup.string().required("Required !"),
  about_title_ar: Yup.string().required("Required !"),
  about_description_en: Yup.string().required("Required !"),
  about_description_ar: Yup.string().required("Required !"),
  term_conditons_en: Yup.string().required("Required !"),
  term_conditons_ar: Yup.string().required("Required !"),
  privacy_policy_en: Yup.string().required("Required !"),
  privacy_policy_ar: Yup.string().required("Required !"),
});

export const oldData = (data) => {
  return {
    id: data._id,
    mobile: data.mobile,
    address_en: data.address.en,
    address_ar: data.address.ar,
    description_en: data.description.en,
    description_ar: data.description.ar,
    logo: data.logo,
    favIcon: data.favIcon,
    title_en: data.title.en,
    title_ar: data.title.ar,
    worktime: data.worktime,
    map: data.map,
    meta_title_en: data.meta_title.en,
    meta_title_ar: data.meta_title.ar,
    about_title_en: data.about_title.en,
    about_title_ar: data.about_title.ar,
    about_description_en: data.about_description.en,
    about_description_ar: data.about_description.ar,
    term_conditons_en: data.term_conditons.en,
    term_conditons_ar: data.term_conditons.ar,
    privacy_policy_en: data.privacy_policy.en,
    privacy_policy_ar: data.privacy_policy.ar,
  };
};
