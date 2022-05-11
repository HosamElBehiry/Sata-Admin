import * as types from "./vendorTypes";
import { toast } from "react-toastify";
import request from "../../../utils/api-utils";
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
      const allVendors = await request.get("/vendors");
      dispatch(fetchAll(allVendors.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error from server !"
      );
    }
  };
};

export const fetchByUsrId = (data) => {
  return {
    type: types.FETCH_BY_USR_ID,
    payload: data,
  };
};

export const hookFetchByUsrId = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const specVendor = await request.get(`/vendors/${id}`);
      dispatch(fetchByUsrId(specVendor.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error from server !"
      );
    }
  };
};

export const updateByUsrId = (data) => {
  return {
    type: types.UPDATE_BY_USR_ID,
    payload: data,
  };
};

export const hookUpdateByUsrId = (values) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const formData = new FormData();
      formData.append("image", values.image);
      formData.append("fullname", values.fullname);
      formData.append("email", values.email);
      formData.append("mobile", values.mobile);
      formData.append("role", values.role);
      formData.append("telephone", values.telephone);
      formData.append("password", values.password);
      formData.append("status", values.status);
      formData.append("isDeleted", values.isDeleted);
      formData.append("taxcard_front", values.taxcard_front);
      formData.append("taxcard_back", values.taxcard_back);
      formData.append("commercialRecord", values.commercialRecord);
      formData.append("taxcard_expiration", values.taxcard_expiration);
      formData.append(
        "commericalRecord_expiration",
        values.commericalRecord_expiration
      );
      formData.append("app_balance_type", values.app_balance_type);
      formData.append("app_balance_amount", values.app_balance_amount);
      const updUsr = await request.put(`/users/${values.id}`, formData);
      dispatch(updateByUsrId(updUsr.data.data));
      toast.success(
        DispLang ? `تم التعديل بنجاح` : `Vendor Edited Successfully `
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error from server !"
      );
    }
  };
};

export const delByID = (data) => {
  return {
    type: types.DEL_BY_USR_ID,
    payload: data,
  };
};

export const hookDelById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      await request.delete(`/users/${id}`);
      dispatch(delByID(id));
      toast.success(DispLang ? `تم المسح بنجاح  ` : `Deleted Successfully`);
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

// soft delete many vendor

export const deleteMany = (data) => {
  return {
    type: types.DELETE_MANY,
    payload: data,
  };
};

export const hookDeleteMany = (ids) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const delUsers = await request.delete(`/users/many-users`, { data: ids });
      dispatch(deleteMany(delUsers.data.data));
      toast.success(DispLang ? `تم المسح بنجاح  ` : `Deleted Successfully`);
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};
