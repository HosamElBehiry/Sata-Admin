import React, { useMemo } from "react";
import objectPath from "object-path";
import { useHtmlClassService } from "../../layout";
import { useSelector } from "react-redux";
import Admin from "./Admin/Admin";
import VendorDashBoard from "./Vendor/VendorDashBoard";

export function Dashboard() {
  const uiService = useHtmlClassService();
  const { user } = useSelector((state) => state.auth);
  const layoutProps = useMemo(() => {
    return {
      demo: objectPath.get(uiService.config, "demo"),
    };
  }, [uiService]);
  return (
    <>
      {layoutProps.demo === "demo1" && user.roles[0] === 1 ? (
        <Admin />
      ) : (
        <VendorDashBoard />
      )}
    </>
  );
}
