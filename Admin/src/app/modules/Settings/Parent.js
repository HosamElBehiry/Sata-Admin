import React from "react";
import Section1 from "./Stack/Section1";
import Section2 from "./Stack/Section2";
import Section3 from "./Stack/Section3";
import Section4 from "./Stack/Section4";
import Section5 from "./Stack/Section5";
import { Formik, Form } from "formik";
import { initialValues, validationSchema, oldData } from "./FormikKeys";
import { BeatLoader } from "react-spinners";
import SaveChanges from "../shared/SaveChanges";
import { useFetchSettings, useUpdateSettings } from "./GetSettings";

export const FormikContext = React.createContext();
function Parent() {
  const { data, isLoading, isError, error } = useFetchSettings(
    `6227701961feffea6ce9c840`
  );
  const { mutateAsync } = useUpdateSettings();
  // this id is constant and will not change
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    return (
      <div className="card-body">
        <Formik
          initialValues={oldData(data?.data.data) || initialValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={(values) => mutateAsync(values)}
        >
          {(formik) => (
            <Form className="form" id="kt_form">
              <div className="tab-content">
                <FormikContext.Provider value={formik}>
                  <Section1 />
                  <Section2 />
                  <Section3 />
                  <Section4 />
                  <Section5 />
                </FormikContext.Provider>
              </div>
              <SaveChanges {...{ formik }} />
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Parent;
