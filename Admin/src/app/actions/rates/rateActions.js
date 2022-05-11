import * as types from "./rateTypes";
import { toast } from "react-toastify";
import DispLang from "../../../utils/HEADERS";
import request from "../../../utils/api-utils";

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

export const filterBy = (data) => {
  return {
    type: types.FILTER_BY,
    payload: data,
  };
};

export const hookFilter = (filter) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const ratesProd = await request.get(`/rates/filter-rate/${filter}`);
      dispatch(filterBy(ratesProd.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطأ من السيرفر` : `Error from server `);
    }
  };
};

export const updateById = (data) => {
  return {
    type: types.UPDATE_BY_ID,
    payload: data,
  };
};

export const hookUpdate = (values) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const updRate = await request.put(`/rates/${values.id}`, values);
      dispatch(updateById(updRate.data.data));
      toast.success(
        DispLang ? `تم تعديل التقييم بنجاح` : `Updated Successfully`
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطأ من السيرفر` : `Error from server `);
    }
  };
};
