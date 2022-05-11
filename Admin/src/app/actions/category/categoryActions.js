import * as types from "./categoryTypes";
import request from "../../../utils/api-utils";
import { toast } from "react-toastify";
import DetectLang from "../../../utils/HEADERS";

const FetchRequest = () => {
  return {
    type: types.FETCH_REQUEST,
  };
};

const FetchAll = (categories) => {
  return {
    type: types.GET_ALL_CATEGORY,
    payload: categories,
  };
};

const FetchError = (error) => {
  return {
    type: types.FETCH_ERROR,
    payload: error,
  };
};

export const FetchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const categories = await request.get("/categories?isDeleted=false");
      dispatch(FetchAll(categories.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DetectLang ? "خطأ من السيرفر" : "Error from server !!");
    }
  };
};

export const FetchById = (data) => {
  return {
    type: types.FETCH_BY_ID,
    payload: data,
  };
};

export const hookFetchById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const catId = await request.get(`/categories/${id}`);
      dispatch(FetchById(catId.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DetectLang ? "خطأ من السيرفر" : "Error from server !!");
    }
  };
};

export const updateById = (data) => {
  return {
    type: types.UPDATE_CATEGORY,
    payload: data,
  };
};

export const hookUpdateById = (data) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const { id, ...rest } = data;
      const formData = new FormData();
      formData.append("title_en", rest.title_en);
      formData.append("title_ar", rest.title_ar);
      formData.append("image", rest.image);
      formData.append("showInHomepage", rest.showInHomepage);
      formData.append("showInMenu", rest.showInMenu);
      formData.append("isDeleted", rest.isDeleted);
      const updateCategory = await request.put(`/categories/${id}`, formData);
      dispatch(updateById(updateCategory.data.data));
      toast.success(DetectLang ? "تم تحديث البيانات" : "Updated Successfully");
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DetectLang ? "خطا اثناء ارسال البيانات" : "Error invalid");
    }
  };
};

const deleteById = (data) => {
  return {
    type: types.DELETE_BY_ID,
    payload: data,
  };
};

export const hookDelById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const delCat = await request.delete(`/categories/${id}`);
      dispatch(deleteById(delCat.data.data));
      toast.success(DetectLang ? "تم المسح بنجاح" : "Deleted Successfully");
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DetectLang ? "خطا اثناء ارسال البيانات" : "Error invalid");
    }
  };
};

const deleteMany = (data) => {
  return {
    type: types.DELETE_MANY,
    payload: data,
  };
};

export const hookDeleteMany = (ids) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const delCat = await request.delete(`/categories/many-category`, {
        data: ids,
      });
      dispatch(deleteMany(delCat.data.data));
      toast.success(DetectLang ? "تم المسح بنجاح" : "Deleted Successfully");
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DetectLang ? "خطا اثناء ارسال البيانات" : "Error invalid");
    }
  };
};
