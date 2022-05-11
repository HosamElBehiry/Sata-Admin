import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import brandReducer from "../Reducer/brandsReducer";
import bannerReducer from "../Reducer/bannerReducer";
import categoryReducer from "../Reducer/categoryReducer";
import subcategoryReducer from "../Reducer/subcategoryReducer";
import orderReducer from "../Reducer/orderReducer";
import companyShippingReducer from "../Reducer/companyshippingReducer";
import blogs from "../Reducer/blogsReducer";
import sliderReducer from "../Reducer/sliderReducer";
import contactReducer from "../Reducer/contactReducer";
import countryReducer from "../Reducer/country";
import cityReducer from "../Reducer/cityReducer";
import coupons from "../Reducer/coupons";
import rateReducer from "../Reducer/rateReducer";
import userReducer from "../Reducer/customerReducer";
import vendorReducer from "../Reducer/vendorReducer";
import deliveryReducer from "../Reducer/deliveryReducer";
import workerReducer from "../Reducer/workerReducer";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  users: userReducer,
  vendors: vendorReducer,
  deliveries: deliveryReducer,
  workers: workerReducer,
  country: countryReducer,
  city: cityReducer,
  category: categoryReducer,
  subcategory: subcategoryReducer,
  orders: orderReducer,
  brands: brandReducer,
  companyShipping: companyShippingReducer,
  blogs,
  coupons,
  contact: contactReducer,
  banners: bannerReducer,
  sliders: sliderReducer,
  rates: rateReducer,
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
