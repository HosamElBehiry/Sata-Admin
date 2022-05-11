import React from "react";
import { useLocation } from "react-router-dom";
import Images from "../Add/Images";
import ImagesUpd from "../Update/ImagesUpd";
import ProductInfo from "./ProductInfo";
export const ProductContext = React.createContext();

function FormikChildren({ current, formik, user }) {
  const location = useLocation();
  return (
    <ProductContext.Provider value={current}>
      {location.pathname.startsWith("/products/update/") ? (
        <ImagesUpd {...{ formik, user }} />
      ) : (
        <Images {...{ formik, user }} />
      )}
      <ProductInfo {...{ formik }} />
    </ProductContext.Provider>
  );
}

export default FormikChildren;
