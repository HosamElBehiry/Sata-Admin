import React from "react";
import Account from "./Account";
import Image from "./Image";
import Password from "./Password";
export const UserContext = React.createContext();
function FormikChildren({ current, formik, user }) {
  return (
    <UserContext.Provider value={current}>
      <Image {...{ formik, user }} />
      <Account />
      <Password />
    </UserContext.Provider>
  );
}

export default FormikChildren;
