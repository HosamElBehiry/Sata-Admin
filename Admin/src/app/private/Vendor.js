import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { request } from "../../utils/axios-utils";
import DispLang from "../../utils/HEADERS";

export const addNew = async (values) => {
  const formData = new FormData();
  formData.append("image", values.image);
  formData.append("fullname", values.fullname);
  formData.append("email", values.email);
  formData.append("mobile", values.mobile);
  formData.append("role", values.role);
  formData.append("telephone", values.telephone);
  formData.append("password", values.password);
  formData.append("taxcard_front", values.taxcard_front);
  formData.append("taxcard_back", values.taxcard_back);
  formData.append("commercialRecord", values.commercialRecord);
  formData.append(
    "commericalRecord_expiration",
    values.commericalRecord_expiration
  );
  formData.append("app_balance_type", values.app_balance_type);
  formData.append("app_balance_amount", values.app_balance_amount);
  formData.append("isAddedByAdmin", true);
  return await request({
    url: `/auth/register`,
    data: formData,
    method: "post",
  });
};

export const useAddVendor = () => {
  return useMutation(addNew, {
    onSuccess: () =>
      toast.success(
        DispLang ? `تم اضافه بائع جديد بنجاح` : `Vendor Added Successfully`
      ),
    onError: () =>
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`),
  });
};

// دى بتجيب البروفايل بتاعت البائع
const fetchProfile = async ({ queryKey }) => {
  return await request({ url: `/vendors/profile/${queryKey[1]}` });
};

export const useFetchProfile = (id) => {
  return useQuery(["vend-profile", id], fetchProfile, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

// مستخدمها عشان اجيب البائعين اللى معمول ليهم سوفت ديليت
const fetchVendors = async ({ queryKey }) => {
  return await request({ url: `/vendors?isDeleted=${queryKey[1]}` });
};

export const useFetchVendors = (isDeleted) => {
  return useQuery(["vendors", isDeleted], fetchVendors);
};
