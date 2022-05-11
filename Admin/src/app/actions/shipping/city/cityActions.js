import * as types from "./cityTypes";
import { toast } from "react-toastify";
import DispLang from "../../../../utils/HEADERS";
import request from "../../../../utils/api-utils";

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
      const cities = await request.get("/city");
      dispatch(fetchAll(cities.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطأ من السيرفر` : `Error from server `);
    }
  };
};

export const addNew = (data) => {
  return {
    type: types.ADD_NEW,
    payload: data,
  };
};

export const hookAddNew = (values) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const cities = await request.post("/city", values);
      dispatch(addNew(cities.data.data));
      toast.success(DispLang ? `تمت الاضافه بنجاح` : `Added Successfully`);
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطأ من السيرفر` : `Error from server `);
    }
  };
};

export const findById = (data) => {
  return {
    type: types.FIND_BY_ID,
    payload: data,
  };
};

export const hookFindById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const cityInfo = await request.get(`/city/${id}`);
      dispatch(findById(cityInfo.data.data));
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

export const hookUpdateById = (values) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const cities = await request.put(`/city/${values.id}`, values);
      dispatch(updateById(cities.data.data));
      toast.success(DispLang ? `تم التعديل بنجاح` : `Edited Successfully`);
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطأ من السيرفر` : `Error from server `);
    }
  };
};

// delete Many cities ..
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
      const dltCities = await request.delete("/city/many-cities", {
        data: ids,
      });
      dispatch(deleteMany(dltCities.data.data));
      toast.success(DispLang ? `تم المسح بنجاح` : `Deleted Successfully`);
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطأ من السيرفر` : `Error from server `);
    }
  };
};
