import React from "react";
import { FastField } from "formik";

export const CustomInput = ({ title, name, type, errors, touched }) => {
  console.log("errors", errors);
  return (
    <div>
      <span> {title} - </span>
      <FastField name={name} type={type} />
      {errors && errors.phone && touched.phone ? (
        <div>{errors.phone} </div>
      ) : null}
    </div>
  );
};
