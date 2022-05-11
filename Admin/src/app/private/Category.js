import { useQuery, useMutation } from "react-query";
import { toast } from "react-toastify";
import { request } from "../../utils/axios-utils";
import DispLang from "../../utils/HEADERS";

const findAll = async ({ queryKey }) => {
  return await request({ url: `/categories?isDeleted=${queryKey[1]}` });
};

export const useFindAll = (isDeleted) => {
  return useQuery(["all-categories", isDeleted], findAll);
};

const addNewCategory = async (data) => {
  const formData = new FormData();
  formData.append("title_en", data.title_en);
  formData.append("title_ar", data.title_ar);
  formData.append("showInMenu", data.showInMenu);
  formData.append("showInHomePage", data.showInHomepage);
  formData.append("image", data.image);
  return await request({ url: "/categories", method: "post", data: formData });
};

export const useAddNewCategory = () => {
  return useMutation(addNewCategory, {
    onSuccess: () => {
      toast.success(
        DispLang ? "تم اضافه قسم جديد" : "New Category has been Added !"
      );
    },
    onError: () =>
      toast.error(
        DispLang ? "خطأ فى اراسال البيانات " : "Error while Adding !"
      ),
  });
};
