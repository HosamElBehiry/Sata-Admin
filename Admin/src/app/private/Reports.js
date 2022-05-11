// هنا الهدف انى اجيب النظام المالى كله تبع النظام
import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../../utils/axios-utils";
import { toast } from "react-toastify";
import DispLang from "../../utils/HEADERS";

const getTotalPayments = async () => {
  return await request({ url: `/order-item/type/deliverd/` });
};

export const useGetTotalPayment = () => {
  return useQuery("total-payment", getTotalPayments);
};

const getCommissionsAndProfits = async () => {
  return await request({ url: `/vendors/profits-commissions` });
};

export const useGetCommissions = () => {
  return useQuery("commissions-profits", getCommissionsAndProfits);
};

const filterByPaymentType = async () => {
  return await request({ url: `/orders/filt-payment` });
};

export const useFilterByPayment = () => {
  return useQuery("filter-by-payment", filterByPaymentType);
};

// دى بتاعت الفواتير الغير مسدده
const getBillsNotPaid = async () => {
  return await request({ url: `/orders/not-deliverd` });
};

export const useGetBillsNotPaid = () => {
  return useQuery("bills-not-paid", getBillsNotPaid);
};

// بتاعت الفواتير المستحقه
const getDueBills = async () => {
  return await request({ url: `/orders/due-bills` });
};

export const useGetDueBills = () => {
  return useQuery("due-bills", getDueBills);
};

// الحته بتاعت انشاء فاتوره
const generateBill = async ({ queryKey }) => {
  return await request({ url: `/bills/between/${queryKey[1]}/${queryKey[2]}` });
};

export const useGenerateBill = (start, end) => {
  return useQuery(["generate-bill", start, end], generateBill, {
    enabled: start !== "" && end !== "",
    onError: () =>
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`),
  });
};

// الحته دى بجيب منها ارباح الشركه اللى هى الفواتير اللى اتسلمت لساتا وساتا وافقت عليها
const getsataProfits = async () => {
  return await request({ url: `/bills/sata-profits` });
};

export const useGetSataProfits = () => {
  return useQuery("sata-profits", getsataProfits);
};

// الحته دى بتاعت تعديل الفواتير
// deliverdToSata: true , acceptedBySata: true

const updateMultiBills = async (values) => {
  return await request({
    url: `/bills/many-bills`,
    method: "PUT",
    data: values,
  });
};

export const useUpdateBills = () => {
  const queryClient = useQueryClient();
  return useMutation(updateMultiBills, {
    onSuccess: () => {
      queryClient.invalidateQueries("generate-bill");
      toast.success(DispLang ? `تم التعديل بنجاح` : `Updated Successfully`);
    },
    onError: () =>
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`),
  });
};

// الحته دى بتاعت مكسب البائع
const fetchVendorProfits = async () => {
  return await request({ url: `/bills/vendor-profits` });
};

export const useFetchProfits = () => {
  return useQuery("vendor-profit", fetchVendorProfits);
};
