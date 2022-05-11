import * as types from "./sliderTypes";
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
      const sliders = await request.get("/mobile-slider");
      dispatch(fetchAll(sliders.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error from server !"
      );
    }
  };
};

export const FetchError = (error) => {
  return {
    type: types.FETCH_REQUEST,
    payload: error,
  };
};

export const fetchById = (data) => {
  return {
    type: types.FIND_BY_ID,
    payload: data,
  };
};

export const hookGetById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const sliderData = await request.get(`/mobile-slider/${id}`);
      dispatch(fetchById(sliderData.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error from server !"
      );
    }
  };
};

const buildForm = (values) => {
  const formData = new FormData();
  formData.append("image", values.image);
  formData.append("title_en", values.title_en);
  formData.append("title_ar", values.title_ar);
  formData.append("isMobile", values.isMobile);
  formData.append("isActive", values.isActive);
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
      const newSlider = await request.post("/mobile-slider", buildForm(values));
      dispatch(addNew(newSlider.data.data));
      toast.success(
        DispLang
          ? "تم اضافه اسليدر جديد بنجاح"
          : "New Slider Added Successfully"
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error from server !"
      );
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
      const updSlid = await request.put(
        `/mobile-slider/${values.id}`,
        buildForm(values)
      );
      dispatch(updateById(updSlid.data.data));
      toast.success(
        DispLang ? "تم التعديل بمجاح" : "Slider Updated Successfully"
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error from server !"
      );
    }
  };
};

const deleteById = (id) => {
  return {
    type: types.DELETE_BY_ID,
    payload: id,
  };
};

export const hookDelById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      await request.delete(`/mobile-slider/${id}`);
      dispatch(deleteById(id));
      toast.success(
        DispLang ? "تم المسح بمجاح" : "Slider Deleted Successfully"
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error from server !"
      );
    }
  };
};

// delete many

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
      const dltSliders = await request.delete(`/mobile-slider/many-sliders`, {
        data: ids,
      });
      dispatch(deleteMany(dltSliders.data.data));
      toast.success(
        DispLang ? "تم المسح بمجاح" : "Slider Deleted Successfully"
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error from server !"
      );
    }
  };
};
