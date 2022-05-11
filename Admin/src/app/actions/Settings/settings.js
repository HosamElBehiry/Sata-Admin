import { UPDATE_SETTING, GET_SETTING } from "./types";
import axios from "axios";
import { toast } from "react-toastify";
import DispLang from "../../../utils/HEADERS";

export const updateSettings = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/settings/620106ef88fd77ca609becce`,
      formData,
      { headers: { "x-auth-token": localStorage.getItem("authToken") } }
    );
    dispatch({
      type: UPDATE_SETTING,
      payload: res.data,
    });
    toast.success(
      DispLang ? "تم التعديل بنجاح" : "Settings Updated Successfully !",
      { autoClose: 2000 }
    );
    // setTimeout(()=>{history.go(0)},1000)
  } catch (error) {
    toast.error(DispLang ? "خطأ من السيرفر" : "Error from server !!");
  }
};
export const getSetting = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/settings/620106ef88fd77ca609becce`
    );
    dispatch({
      type: GET_SETTING,
      payload: res.data,
    });
  } catch (error) {
    toast.error(DispLang ? "خطأ من السيرفر" : "Error from server !!");
  }
};
