import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../../utils/axios-utils";
import { toast } from "react-toastify";
import DispLang from "../../utils/HEADERS";

const findAll = async ({ queryKey }) => {
  // انا هنا عامل الشرط ده عشان البائع ممكن
  // يدخل يشوف المنتجات فيشوف المنتجات الخاصه بيه هو بس
  return await request({
    url: `${
      queryKey[2] === 1
        ? `/products?isDeleted=${queryKey[1]}`
        : `/products/vendorProducts`
    }`,
  });
};

export const useFindAll = (isDeleted, role) => {
  return useQuery(["products", isDeleted, role], findAll);
};

const findLowest = async () => {
  return await request({ url: `/products/lowest` });
};

export const useFindLowest = () => {
  return useQuery("lowest-products", findLowest);
};

const findMostBought = async () => {
  return await request({ url: `/products/mostBought` });
};

export const useFindMostBought = () => {
  return useQuery("most-bought", findMostBought);
};

const findById = async ({ queryKey }) => {
  return await request({ url: `/products/${queryKey[1]}` });
};

export const useFindById = (id) => {
  return useQuery(["prod-id", id], findById);
};

const findByBrandId = async ({ queryKey }) => {
  return await request({ url: `/products/brand/${queryKey[1]}` });
};

export const useFindByBrandId = (id) => {
  return useQuery(["prod-brand-id", id], findByBrandId);
};

const findByCatSubId = async ({ queryKey }) => {
  return await request({ url: `/products/filtCatSub/${queryKey[1]}` });
};

export const useFindByCatSubId = (id) => {
  return useQuery(["prod-cat-sub-id", id], findByCatSubId);
};

const addNew = async (values) => {
  const formData = new FormData();
  formData.append("title_en", values.title_en);
  formData.append("title_ar", values.title_ar);
  formData.append("description_en", values.description_en);
  formData.append("description_ar", values.description_ar);
  formData.append("price", values.price);
  formData.append("categoryId", values.categoryId);
  formData.append("subCategory", values.subCategory);
  formData.append("brand", values.brand);
  formData.append("vendor", values.vendor);
  formData.append("color", values.color);
  formData.append("size", values.size);
  formData.append("store", values.store);
  values.image.map((image) => formData.append("image", image));
  return await request({ url: `/products`, method: "post", data: formData });
};

export const useAddNew = () => {
  const queryClient = useQueryClient();
  return useMutation(addNew, {
    onSuccess: () => {
      toast.success(
        DispLang ? `تم اضافه منتج جديد بنجاح` : `Product Added Successfully`
      );
      queryClient.invalidateQueries(["products"]);
    },
    onError: () =>
      toast.error(DispLang ? `حدث خطأ اثناء الاضافه` : `Error from server !`),
  });
};

const updateProduct = async (values) => {
  return await request({
    url: `/products/${values.id}`,
    method: "put",
    data: makeForm(values),
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(updateProduct, {
    onSuccess: () => {
      toast.success(DispLang ? `تم التعديل بنجاح` : `Edited Successfully`);
      queryClient.invalidateQueries(["products"]);
    },
    onError: () =>
      toast.error(DispLang ? `خطأ من السيرفر` : `Error from server !`),
  });
};

// soft delete for many product ..

const deleteMany = async (values) => {
  return await request({
    url: `/products/many-products`,
    method: "delete",
    data: values,
  });
};

export const useDeleteMany = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteMany, {
    onSuccess: () => {
      toast.success(DispLang ? `تم المسح بنجاح` : `Deleted Successfully`);
      queryClient.invalidateQueries(["products"]);
    },
    onError: () =>
      toast.error(DispLang ? `خطأ من السيرفر` : `Error from server !`),
  });
};

function makeForm(values) {
  const formData = new FormData();
  formData.append("title_en", values.title_en);
  formData.append("title_ar", values.title_ar);
  formData.append("description_en", values.description_en);
  formData.append("description_ar", values.description_ar);
  formData.append("price", values.price);
  formData.append("categoryId", values.categoryId);
  formData.append("subCategory", values.subCategory);
  formData.append("brand", values.brand);
  formData.append("vendor", values.vendor);
  formData.append("color", values.color);
  formData.append("size", values.size);
  formData.append("store", values.store);
  return formData;
}
