import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../../utils/axios-utils";
import { toast } from "react-toastify";
import DispLang from "../../utils/HEADERS";

const fetchRegions = async () => {
  return await request({ url: `/region` });
};

export const useFetchRegions = () => {
  return useQuery("regions", fetchRegions);
};

const fetchCountries = async () => {
  return await request({ url: `/country` });
};

export const useFetchCountries = () => {
  return useQuery("countries", fetchCountries);
};

const fetchCities = async ({ queryKey }) => {
  return await request({ url: `/city/country/${queryKey[1]}` });
};

export const useFetchCities = (id) => {
  return useQuery(["cities", id], fetchCities, {
    enabled: id !== "",
  });
};

const addRegion = async (values) => {
  return await request({ url: `/region`, method: "post", data: values });
};

export const useAddNewRegion = () => {
  const queryClient = useQueryClient();
  return useMutation(addRegion, {
    onSuccess: () => {
      toast.success(DispLang ? `تمت الاضافه بنجاح` : `Added Successfully`);
      queryClient.invalidateQueries(["regions"]);
    },
    onError: () => {
      toast.error(DispLang ? `خطأ اثناء الاضافه` : `Error from server !`);
    },
  });
};

const fetchRegionById = async ({ queryKey }) => {
  return await request({ url: `/region/${queryKey[1]}` });
};

export const useFetchRegionById = (id) => {
  return useQuery(["region-id", id], fetchRegionById);
};

const updateRegion = async (values) => {
  const { id, ...rest } = values;
  return await request({ url: `/region/${id}`, method: "put", data: rest });
};

export const useUpdateRegion = () => {
  const queryClient = useQueryClient();
  return useMutation(updateRegion, {
    onSuccess: () => {
      queryClient.invalidateQueries(["regions"]);
      toast.success(DispLang ? `تم التعديل بنجاح` : `Edited Successfully`);
    },
    onError: () => {
      toast.error(DispLang ? `خطأ اثناء الاضافه` : `Error from server !`);
    },
  });
};
