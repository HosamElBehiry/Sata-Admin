import React from "react";
import Account from "./Account";
import Image from "./Image";
import Password from "./Password";
export const UserContext = React.createContext();
function FormikChildren({ current, formik, companies }) {
  return (
    <UserContext.Provider value={current}>
      <Image {...{ formik }} />
      <Account {...{ companies }} />
      <Password />
    </UserContext.Provider>
  );
}

export default FormikChildren;
