import * as types from "./customerTypes";
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

export const fetchByRole = (data) => {
  return {
    type: types.FETCH_BY_ROLE,
    payload: data,
  };
};

export const hookFetchByRole = (role) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const usersRole = await request.get(
        `/users/findByRole/${role}?isDeleted=false`
      );
      dispatch(fetchByRole(usersRole.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

export const hookFetchOnline = (role) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const onlineUsers = await request.get(`/users/online/${role}`);
      dispatch(fetchByRole(onlineUsers.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

export const hookFetchNews = (days, role) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const newUsers = await request.get(`/users/news/${days}/${role}`);
      dispatch(fetchByRole(newUsers.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

export const hookFetchNotSigned = (days, role) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const notSignedUsers = await request.get(
        `/users/not-signed-in/${days}/${role}`
      );
      dispatch(fetchByRole(notSignedUsers.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

export const hookFetchBlocked = (role) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const blocked = await request.get(`/users/blocked/${role}`);
      dispatch(fetchByRole(blocked.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

export const fetchById = (data) => {
  return {
    type: types.FETCH_BY_ID,
    payload: data,
  };
};

export const hookFetchById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const userData = await request.get(`/users/getUserById/${id}`);
      dispatch(fetchById(userData.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

export const updateById = (data) => {
  return {
    type: types.UPDATE_BY_ID,
    payload: data,
  };
};

export const hookUpdateById = (values) => {
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
      const updUsr = await request.put(`/users/${values.id}`, formData);
      dispatch(updateById(updUsr.data.data));
      toast.success(DispLang ? `تم التعديل بنجاح  ` : `Edited Successfully`);
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

export const delByID = (data) => {
  return {
    type: types.DELETE_BY_ID,
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

// soft delete many users

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
