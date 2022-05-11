import * as types from "./countryTypes";
import DispLang from "../../../../utils/HEADERS";
import request from "../../../../utils/api-utils";
import { toast } from "react-toastify";

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
      const countries = await request.get("/country");
      dispatch(fetchAll(countries.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
    }
  };
};

const makeForm = (values) => {
  const formData = new FormData();
  formData.append("name_en", values.name_en);
  formData.append("name_ar", values.name_ar);
  formData.append("image", values.image);
  return formData;
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
      const newCountry = await request.post("/country", makeForm(values));
      dispatch(addNew(newCountry.data.data));
      toast.success(
        DispLang ? `تم اضافه بلد جديده بنجاح` : `Country Added Successfully`
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
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
      const countryInfo = await request.get(`/country/${id}`);
      dispatch(findById(countryInfo.data.data));
    } catch (error) {
      FetchError(error.message);
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
      const countryInfo = await request.put(
        `/country/${values.id}`,
        makeForm(values)
      );
      dispatch(updateById(countryInfo.data.data));
      toast.success(
        DispLang ? `تم التعديل بنجاح` : `Country Edited Successfully`
      );
    } catch (error) {
      FetchError(error.message);
      toast.error(DispLang ? `خطا من السيرفر` : `Error from server !`);
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
      const dltCountries = await request.delete("/country/many-country", {
        data: ids,
      });
      dispatch(deleteMany(dltCountries.data.data));
      toast.success(DispLang ? `تم المسح بنجاح` : `Deleted Successfully`);
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(DispLang ? `خطأ من السيرفر` : `Error from server `);
    }
  };
};
