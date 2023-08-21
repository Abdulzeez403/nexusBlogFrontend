import { ErrorMessage, useField } from "formik";
import React from "react";
import Select from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";
import CreateableSelect from "react-select/creatable";
interface IProps extends StateManagerProps {
  label?: string;
  name: string;
  isMulti?: boolean;
  isCreatable?: boolean;
  props?: {
    [x: string]: StateManagerProps;
  };
}

export const ApSelectInput: React.FC<IProps> = (props) => {
  const { label, options, isMulti, name, isCreatable } = props;
  const [field, meta, { setValue }] = useField(name);
  return (
    <div className="mb-5">
      <label className="label block mb-2" htmlFor="email">
        {label}
      </label>

      {isCreatable ? (
        <CreateableSelect {...props} name={name} onChange={(newVal) => setValue(newVal)} />
      ) : (
        <Select
          {...field}
          {...props}
          isMulti={isMulti}
          options={options}
          name={name}
          onChange={(val: any) => setValue(val)}
        />
      )}

      <ErrorMessage className="danger" name={name} component="div" />
    </div>
  );
};
