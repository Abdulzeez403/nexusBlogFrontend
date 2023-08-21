import { ErrorMessage, useField } from "formik";
import React from "react";
import ReactCodeInput from "react-code-input";
import { ApText } from "../typography";

interface IProps {
  label: string;
  name: string;
  disabled?: boolean;
  className?: string;
  errorClassName?: string;
}

export const ApCodeInput: React.FC<IProps> = (props) => {
  const { label, disabled, name, className, errorClassName } = props;
  const [field, meta, { setValue }] = useField(name);
  return (
    <div>
      <ApText className="">{label}</ApText>
      <ReactCodeInput
        fields={6}
        value={field.value}
        type="password"
        name={"name"}
        onChange={(val) => setValue(val)}
        inputMode="numeric"
        className={` !flex gap-4 justify-around py-2 ${className}`}
        inputStyle={{
          width: "42px",
          height: "42px",
          fontSize: "2rem",
          borderRadius: "6px",
          border: "2px solid 	#e6e6e6",
          color: "black",
          textAlign: "center",
        }}
      />
      <ErrorMessage
        className={`${errorClassName}  error-message text-red-500`}
        name={name}
        component="div"
      />
    </div>
  );
};
