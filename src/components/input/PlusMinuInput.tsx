import { ErrorMessage, useField } from "formik";
import React, { useEffect } from "react";
import { ApButton } from "../button";
import { ApTextInput } from "./TextInput";

interface IProps {
  label?: string;
  name: string;
  inputClassName?: string;
  btnClassName?: string;
  onChange?: (value: number) => void;
}

export const ApPlusMinusInput: React.FC<IProps> = (props) => {
  const { label, name, btnClassName, inputClassName, onChange } = props;
  const buttonClassName = ` border rounded-none outline-none text-black font-extrabold px-5 border-sky-500 ${btnClassName}`;
  const [field, meta, { setValue }] = useField(name);

  useEffect(() => {
    if (onChange) onChange(+field.value);
  }, [field.value]);
  return (
    <div className="mb-5">
      <label className="label block mb-2" htmlFor="email">
        {label}
      </label>

      <div className="flex ">
        <button
          className={buttonClassName}
          type="button"
          onClick={() => {
            if (field.value && field.value > 1) {
              setValue(--field.value);
            }
          }}
        >
          -
        </button>
        <ApTextInput
          className={`w-16 h-7 rounded-sm p-0 relative  bg-white font-extrabold ${inputClassName}`}
          name="quantity"
          type="button"
        />
        <button
          className={buttonClassName}
          type="button"
          title="+"
          onClick={() => {
            if (field.value) {
              setValue(++field.value);
            }
          }}
        >
          +
        </button>
      </div>

      <ErrorMessage className="danger" name={name} component="div" />
    </div>
  );
};
