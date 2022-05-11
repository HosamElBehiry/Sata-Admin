import * as types from "./deliveryTypes";
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
      const deliveries = await request.get(`/delivery?isDeleted=false`);
      dispatch(fetchAll(deliveries.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

export const findByUsrId = (data) => {
  return {
    type: types.FIND_BY_USR_ID,
    payload: data,
  };
};

export const hookFetchByUsrId = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const deliveryInfo = await request.get(`/delivery/${id}`);
      dispatch(findByUsrId(deliveryInfo.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

export const updateByUsrId = (data) => {
  return {
    type: types.FIND_BY_USR_ID,
    payload: data,
  };
};

export const hookUpdateByUsrId = (values) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const formData = new FormData();
      formData.append("image", values.image);
      formData.append("licence_front", values.licence_front);
      formData.append("licence_back", values.licence_back);
      formData.append("licenceCar_front", values.licenceCar_front);
      formData.append("licenceCar_back", values.licenceCar_back);
      formData.append("drugAnalysis", values.drugAnalysis);
      formData.append("fullname", values.fullname);
      formData.append("email", values.email);
      formData.append("mobile", values.mobile);
      formData.append("telephone", values.telephone);
      formData.append("password", values.password);
      formData.append("role", values.role);
      formData.append("company", values.company);
      formData.append("licence_expiration", values.licence_expiration);
      formData.append("licenceCar_expiration", values.licenceCar_expiration);
      formData.append("status", values.status);
      formData.append("isDeleted", values.isDeleted);
      const deliveryInfo = await request.put(`/users/${values.id}`, formData);
      dispatch(updateByUsrId(deliveryInfo.data.data));
      toast.success(
        DispLang ? `تم التعديل بنجاح` : `Delivery Edited Successfully`
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

export const deleteByUsrId = (data) => {
  return {
    type: types.DELETE_BY_USR_ID,
    payload: data,
  };
};

export const hookDeltByUsrId = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      await request.delete(`/users/${id}`);
      dispatch(deleteByUsrId(id));
      toast.success(
        DispLang ? `تم المسح بنجاح` : `Delivery Deleted Successfully`
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

// soft delete for multi delivery

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
      const delDelivery = await request.delete(`/users/many-users`, {
        data: ids,
      });
      dispatch(deleteMany(delDelivery.data.data));
      toast.success(
        DispLang ? `تم المسح بنجاح` : `Delivery Deleted Successfully`
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};
