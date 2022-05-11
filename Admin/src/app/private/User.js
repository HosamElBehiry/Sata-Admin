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
  return await request({
    url: `/auth/register`,
    data: formData,
    method: "post",
  });
};

export const useAddCustomer = () => {
  return useMutation(addNew, {
    onSuccess: () =>
      toast.success(
        DispLang ? `تم اضافه مستخدم جديد بنجاح` : `User Added Successfully`
      ),
    onError: () =>
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`),
  });
};

// 1-  مستخدمها عشان اجيب كل المستخدمين اللى الرول بتاعهم بائع فى حوار انى اضيف او اعدل منتج
// انا هنا مستخدم الشرط عشان ممكن اجيب الناس اللى معمولهم سوفت ديليت

// 2- مستخدمها فى حوار انى اعمل شرط عشان اضافه العامل ممكن يكون من الادمن وممكن يكون من البائع نفسه
const findByRole = async ({ queryKey }) => {
  return queryKey[3] === 1
    ? await request({
        url: `/users/findByRole/${queryKey[1]}?isDeleted=${queryKey[2]}`,
      })
    : undefined;
};

export const useFindByRole = (role, isDeleted, byWhom) => {
  return useQuery(["usr-by-role", role, isDeleted, byWhom], findByRole);
};

// مستخدمها فى حته ارسال الاشعارات
const findAll = async () => {
  return await request({ url: `/users` });
};

export const useFindAll = () => {
  return useQuery("all-customers", findAll);
};
