import { useQuery } from "react-query";
import { request } from "../../utils/axios-utils";

const filterByCategory = async ({ queryKey }) => {
  return await request({ url: `/subcategories/category/${queryKey[1]}` });
};

export const useFilterByCategory = (id) => {
  return useQuery(["filt-sub-cat", id], filterByCategory, {
    enabled: id !== "",
  });
};
