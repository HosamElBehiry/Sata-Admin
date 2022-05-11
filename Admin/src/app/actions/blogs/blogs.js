import * as types from "./types";
import request from "../../../utils/api-utils";
import { toast } from "react-toastify";
import DispLang from "../../../utils/HEADERS";

export const FetchRequest = () => {
  return {
    type: types.FETCH_REQUEST,
  };
};

export const FetchError = (error) => {
  return {
    type: types.FETCH_ERROR,
    payload: error,
  };
};

const fetchAll = (data) => {
  return {
    type: types.FETCH_ALL,
    payload: data,
  };
};

export const hookFetchAll = () => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const allBlogs = await request.get("/blogs");
      dispatch(fetchAll(allBlogs.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطأ من السيرفر` : `Error from server `);
    }
  };
};

const useForm = (values) => {
  const formData = new FormData();
  formData.append("title_en", values.title_en);
  formData.append("title_ar", values.title_ar);
  formData.append("image", values.image);
  formData.append("description_en", values.description_en);
  formData.append("description_ar", values.description_ar);
  return formData;
};

const addNew = (data) => {
  return {
    type: types.ADD_NEW,
    payload: data,
  };
};

export const hookAddNew = (values) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const newBlog = await request.post("/blogs", useForm(values));
      dispatch(addNew(newBlog.data.data));
      toast.success(
        DispLang ? `تم اضافه مقال جديد بنجاح` : `Blog Added Successfully`
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطأ من السيرفر` : `Error from server `);
    }
  };
};

const updateBlog = (data) => {
  return {
    type: types.UPDATE_BLOG,
    payload: data,
  };
};

export const hookUpdate = (values) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const updBlog = await request.put(`/blogs/${values.id}`, useForm(values));
      dispatch(updateBlog(updBlog.data.data));
      toast.success(
        DispLang ? `تم تعديل المقال بنجاح` : `Blog Edited Successfully`
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطأ من السيرفر` : `Error from server `);
    }
  };
};

const delById = (id) => {
  return {
    type: types.DELETE_BLOG,
    payload: id,
  };
};

export const hookDelById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      await request.delete(`/blogs/${id}`);
      dispatch(delById(id));
      toast.success(
        DispLang ? `تم مسح المقال بنجاح` : `Blog Deleted Successfully`
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطأ من السيرفر` : `Error from server `);
    }
  };
};

// delete many blogs ..
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
      const dltBlogs = await request.delete(`/blogs/many-blogs`, { data: ids });
      dispatch(deleteMany(dltBlogs.data.data));
      toast.success(
        DispLang ? `تم مسح المقال بنجاح` : `Blog Deleted Successfully`
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطأ من السيرفر` : `Error from server `);
    }
  };
};
