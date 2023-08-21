import { ErrorMessage, Field, useField } from "formik";
import React, { useEffect } from "react";

interface IProps {
  label?: string;
  type?: string;
  name: string;
  className?: string;
  placeHolder?: string;
  // onChange?:(value:string)=>void;
  props?: {
    [x: string]: any;
  };
  containerClass?: string;
}

export const ApTextInput: React.FC<IProps> = ({
  label,
  type,
  name,
  className,
  placeHolder,
  containerClass,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <div
      style={{ marginBottom: 10, display: "flex", flexDirection: "column" }}
      className={containerClass}
    >
      <label className="label mb-2 font-[500] text-sm text-gray-700" htmlFor="email">
        {label}
      </label>

      {type == "textarea" ? (
        <textarea
          className={`form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        ${className}`}
          {...field}
          {...props}
          name={name}
          rows={4}
          placeholder={placeHolder}
        ></textarea>
      ) : (
        <Field
          type={type}
          {...field}
          {...props}
          name={name}
          className={`form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        
          ${className}`}
          placeholder={placeHolder}
        />
      )}
      {meta.touched && meta.error && (
        <div className="text-red-500">{meta.error}</div>
      )}
      {/* <ErrorMessage className="text-red-500" name={name} component="div" /> */}
    </div>
  );
};
