import * as types from "./bannerTypes";
import DispLang from "../../../utils/HEADERS";
import request from "../../../utils/api-utils";
import { toast } from "react-toastify";

export const FetchRequest = () => {
  return {
    type: types.FETCH_REQUEST,
  };
};

export const fetchAll = (data) => {
  return {
    type: types.FETCH_ALL,
    payload: data,
  };
};

export const hookFetchAll = () => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const allbanners = await request.get("/banner");
      dispatch(fetchAll(allbanners.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? "خطأ من السيرفر" : "Error from server !!");
    }
  };
};

const FetchById = (data) => {
  return {
    type: types.FETCH_BY_ID,
    payload: data,
  };
};

export const hookFetchById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const bnrData = await request.get(`/banner/${id}`);
      dispatch(FetchById(bnrData.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? "خطأ من السيرفر" : "Error from server !!");
    }
  };
};

export const FetchError = (error) => {
  return {
    type: types.FETCH_ERROR,
    payload: error,
  };
};

const useForm = (values) => {
  const formData = new FormData();
  formData.append("image", values.image);
  formData.append("isActive", values.isActive);
  formData.append("title_en", values.title_en);
  formData.append("title_ar", values.title_ar);
  formData.append("showInHome", values.showInHome);
  formData.append("startDate", values.startDate);
  formData.append("endDate", values.endDate);
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
      const newBnr = await request.post("/banner", useForm(values));
      dispatch(addNew(newBnr.data.data));
      toast.success(
        DispLang ? "تم اضافه اعلان جديد بنجاح" : "Banner added successfully"
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? "خطأ من السيرفر" : "Error from server !!");
    }
  };
};

const updateById = (data) => {
  return {
    type: types.UPDATE_BY_ID,
    payload: data,
  };
};

export const hookUpdateById = (values) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const updBnr = await request.put(`/banner/${values.id}`, useForm(values));
      dispatch(updateById(updBnr.data.data));
      toast.success(
        DispLang ? "تم تعديل اعلان بنجاح" : "Banner updated successfully"
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? "خطأ من السيرفر" : "Error from server !!");
    }
  };
};

const deleteById = (data) => {
  return {
    type: types.DELETE_BY_ID,
    payload: data,
  };
};

export const hookDeleteById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      await request.delete(`/banner/${id}`);
      dispatch(deleteById(id));
      toast.success(DispLang ? `تم المسح بنجاح` : `Deleted successfully`);
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? "خطأ من السيرفر" : "Error from server !!");
    }
  };
};

// delete many banners ..
const deleteMany = (data) => {
  return {
    type: types.DELETE_MANY,
    payload: data,
  };
};

export const hookdeleteMany = (ids) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const dltBanners = await request.delete("/banner/many-banners", {
        data: ids,
      });
      dispatch(deleteMany(dltBanners.data.data));
      toast.success(DispLang ? `تم المسح بنجاح` : `Deleted successfully`);
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? "خطأ من السيرفر" : "Error from server !!");
    }
  };
};
