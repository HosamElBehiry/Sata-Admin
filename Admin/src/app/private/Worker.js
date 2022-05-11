import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { request } from "../../utils/axios-utils";
import DispLang from "../../utils/HEADERS";

export const addNew = async (values, byWhom) => {
  const formData = new FormData();
  formData.append("image", values.image);
  formData.append("fullname", values.fullname);
  formData.append("email", values.email);
  formData.append("mobile", values.mobile);
  formData.append("role", values.role);
  formData.append("telephone", values.telephone);
  formData.append("password", values.password);
  formData.append("vendor", values.vendor);
  formData.append("canAdd", values.canAdd);
  formData.append("canUpdate", values.canUpdate);
  formData.append("canDelete", values.canDelete);
  formData.append("isAddedByAdmin", byWhom === 1 ? true : false);
  return await request({
    url: `/auth/register`,
    data: formData,
    method: "post",
  });
};

export const useAddWorker = () => {
  return useMutation(addNew, {
    onSuccess: () =>
      toast.success(
        DispLang ? `تم اضافه عامل مخزن جديد بنجاح` : `Worker Added Successfully`
      ),
    onError: () =>
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`),
  });
};

// بستخدمها عشان اجيب الداتا بتاعت العامل وبعدين اعمل ليه تعديل فى فايل التعديل
export const findByUsrId = async ({ queryKey }) => {
  return await request({ url: `/worker/user/${queryKey[1]}` });
};

export const useFetchByUsrId = (id) => {
  return useQuery(["find-by-usr-id", id], findByUsrId);
};

// هنا انا بحاول استخدم الاى بى اى اللى بتعمل تعديل
export const updateWorker = async (values) => {
  const formData = new FormData();
  formData.append("image", values.image);
  formData.append("fullname", values.fullname);
  formData.append("email", values.email);
  formData.append("mobile", values.mobile);
  formData.append("role", values.role);
  formData.append("telephone", values.telephone);
  formData.append("password", values.password);
  formData.append("vendor", values.vendor);
  formData.append("canAdd", values.canAdd);
  formData.append("canUpdate", values.canUpdate);
  formData.append("canDelete", values.canDelete);
  formData.append("status", values.status);
  formData.append("isDeleted", values.isDeleted);
  return await request({
    url: `/users/${values.id}`,
    data: formData,
    method: "put",
  });
};

export const useUpdateWorker = () => {
  return useMutation(updateWorker, {
    onSuccess: () =>
      toast.success(
        DispLang ? `تم التعديل بنجاح` : `Worker Edited Successfully`
      ),
    onError: () =>
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`),
  });
};

const updateByVendor = async (values) => {
  const { id, ...rest } = values;
  return await request({
    url: `/worker/${id}`,
    method: "put",
    data: rest,
  });
};

export const useUpdateByVendor = () => {
  return useMutation(updateByVendor, {
    onSuccess: () =>
      toast.success(
        DispLang
          ? `تم تعديل بيانات العامل بنجاح`
          : `Worker Updated Successfully`
      ),
    onError: () =>
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`),
  });
};

// بجيب منها عمال المخازن اللى معمولهم سوفت ديليت
const fetchWorkers = async ({ queryKey }) => {
  return await request({ url: `/worker?isDeleted=${queryKey[1]}` });
};

export const useFetchWorkers = (isDeleted) => {
  return useQuery(["workers", isDeleted], fetchWorkers);
};
