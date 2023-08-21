import { ErrorMessage, useField } from "formik";
import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ApText } from "../typography/text";
interface IProps {
  label: string;
  name: string;
  disabled?: boolean;
  className?: string;
  errorClassName?: string;
}

export const ApPhoneInput: React.FC<IProps> = (props) => {
  const { label, disabled, name, className, errorClassName } = props;
  const [field, meta, { setValue }] = useField(name);

  return (
    <div className="form-control">
      <ApText>{label}</ApText>

      <PhoneInput
        className={`w-full p-0 border-none ${className}`}
        placeholder="Phone Number"
        addInternationalOption={false}
        countries={["NG", "MY"]}
        defaultCountry={"MY"}
        style={{
          // background: "rgb(246, 240, 252)",
          paddingBlock: ".4rem",
        }}
        {...field}
        onChange={(val: string) => {
          setValue(val);
        }}
      />
      <ErrorMessage
        className={`${errorClassName} error-message text-red-500`}
        name={name}
        component="div"
      />
    </div>
  );
};
