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
  formData.append("licence_front", values.licence_front);
  formData.append("licence_back", values.licence_back);
  formData.append("licenceCar_front", values.licenceCar_front);
  formData.append("licenceCar_back", values.licenceCar_back);
  formData.append("drugAnalysis", values.drugAnalysis);
  formData.append("company", values.company);
  formData.append("licence_expiration", values.licence_expiration);
  formData.append("licenceCar_expiration", values.licenceCar_expiration);
  formData.append("isAddedByAdmin", true);
  return await request({
    url: `/auth/register`,
    data: formData,
    method: "post",
  });
};

export const useAddDelivery = () => {
  return useMutation(addNew, {
    onSuccess: () =>
      toast.success(
        DispLang
          ? `تم اضافه عامل توصيل جديد بنجاح`
          : `Delivery Added Successfully`
      ),
    onError: () =>
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`),
  });
};

// الهدف انى اجيب منها كل عمال التوصيل اللى معمول ليهم سوفت ديليت
const fetchDeliveries = async ({ queryKey }) => {
  return await request({ url: `/delivery?isDeleted=${queryKey[1]}` });
};

export const useFetchDeliveries = (isDeleted) => {
  return useQuery(["deliveries", isDeleted], fetchDeliveries);
};
