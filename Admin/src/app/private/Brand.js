import { useQuery } from "react-query";
import { request } from "../../utils/axios-utils";

const filterByCategory = async ({ queryKey }) => {
  return await request({ url: `/brands/category/${queryKey[1]}` });
};

export const useFilterBrandByCategory = (id) => {
  return useQuery(["filt-brand", id], filterByCategory, {
    enabled: id !== "",
  });
};

// مستخدمها عشان اجيب العلامات التجاريه اللى معمول ليها سوفت ديليت
const fetchBrands = async ({ queryKey }) => {
  return await request({ url: `/brands?isDeleted=${queryKey[1]}` });
};

export const useFetchBrands = (isDeleted) => {
  return useQuery(["brands", isDeleted], fetchBrands);
};
