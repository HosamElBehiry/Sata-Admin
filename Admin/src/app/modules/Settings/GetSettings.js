import { request } from "../../../utils/axios-utils";
import { toast } from "react-toastify";
import DispLang from "../../../utils/HEADERS";
import { useMutation, useQuery } from "react-query";

const fetchSettings = async ({ queryKey }) => {
  return await request({ url: `/settings/${queryKey[1]}` });
};

export const useFetchSettings = (id) => {
  return useQuery(["settings-info", id], fetchSettings);
};

const updateSetting = async (values) => {
  const formData = new FormData();
  formData.append("mobile", values.mobile);
  formData.append("address_en", values.address_en);
  formData.append("address_ar", values.address_ar);
  formData.append("description_en", values.description_en);
  formData.append("description_ar", values.description_ar);
  formData.append("logo", values.logo);
  formData.append("favIcon", values.favIcon);
  formData.append("title_en", values.title_en);
  formData.append("title_ar", values.title_ar);
  formData.append("worktime", values.worktime);
  formData.append("map", values.map);
  formData.append("meta_title_en", values.meta_title_en);
  formData.append("meta_title_ar", values.meta_title_ar);
  formData.append("about_title_en", values.about_title_en);
  formData.append("about_title_ar", values.about_title_ar);
  formData.append("about_description_en", values.about_description_en);
  formData.append("about_description_ar", values.about_description_ar);
  formData.append("term_conditons_en", values.term_conditons_en);
  formData.append("term_conditons_ar", values.term_conditons_ar);
  formData.append("privacy_policy_en", values.privacy_policy_en);
  formData.append("privacy_policy_ar", values.privacy_policy_ar);
  return await request({
    url: `/settings/${values.id}`,
    method: `put`,
    data: formData,
  });
};

export const useUpdateSettings = () => {
  return useMutation(updateSetting, {
    onSuccess: () =>
      toast.success(DispLang ? `تم التعديل بنجاح` : `Edited Successfully`),
  });
};
