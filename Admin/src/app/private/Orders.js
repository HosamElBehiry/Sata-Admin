import { useQuery } from "react-query";
import { request } from "../../utils/axios-utils";

// بجيب منها الاوردرات اللى معمولها سوفت ديليت لحد دلوقتى
// مستخدمها فى الداش بورد بتاعت البائع لما
//يخش عشان يجيب مجموع عدد الاوردرات اللى جاتله
// مستخدمها فى الاوردر عشان اجيب كل الاوردرات اللى مش ممسوحه

const fetchOrders = async ({ queryKey }) => {
  return await request({ url: `/orders?isDeleted=${queryKey[1]}` });
};

export const useFetchOrders = (isDeleted) => {
  return useQuery(["orders", isDeleted], fetchOrders);
};
