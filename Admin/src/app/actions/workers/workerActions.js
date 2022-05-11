import * as types from "./workerTypes";
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
      const allWorkers = await request.get("/worker");
      dispatch(fetchAll(allWorkers.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error from server !"
      );
    }
  };
};

export const delByUsrID = (data) => {
  return {
    type: types.DEL_BY_USR_ID,
    payload: data,
  };
};

export const hookDelByUsrId = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      await request.delete(`/users/${id}`);
      dispatch(delByUsrID(id));
      toast.success(DispLang ? `تم المسح بنجاح  ` : `Deleted Successfully`);
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

// عشان لما البائع يحب يمسح بيانات العامل
export const delById = (data) => {
  return {
    type: types.DEL_BY_ID,
    payload: data,
  };
};

export const hookDelById = (id, user) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      await request.delete(`/worker/${id}`, { data: { user } });
      dispatch(delById(id));
      toast.success(DispLang ? `تم المسح بنجاح  ` : `Deleted Successfully`);
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

// soft delete many worker ..

export const deleteMany = (data) => {
  return {
    type: types.DELETE_MANY,
    payload: data,
  };
};

// انا هنا عامل الحته ديه عشان ممكن البائع يخش يمسح كذا عامل خاص به

export const hookDeleteMany = (ids, role) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const delWorkers = await request.delete(
        `${role === 1 ? "/users/many-users" : "/worker/many-workers"}`,
        {
          data: ids,
        }
      );
      dispatch(deleteMany(delWorkers.data.data));
      toast.success(DispLang ? `تم المسح بنجاح  ` : `Deleted Successfully`);
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};
