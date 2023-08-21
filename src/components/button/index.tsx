import React, { useEffect, useState } from "react";
import {
 LoadingOutlined
} from "@ant-design/icons";

interface IProps {
  disabled?: boolean
  title?: string;
  loadingText?: string;
  style?: {};
  loading?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  rounded?: "rounded" | "rounded-lg" | "rounded-xl" | "rounded-full" | "rounded-md"
  btnSize?: "sm" | "lg"
  color?: "primary" | "secondary" | "white"
  outline?: boolean
  type? : "button" | "submit" | "reset"
  className?: string;
}

export const ApButton: React.FC<IProps> = ({
  title,
  loadingText,
  onClick,
  loading,
  children,
  style,
  rounded, btnSize, color, outline, type,
  className, disabled
}) => {
  const [isLoading, setLoading] = useState(loading);
  let colorScheme = ''
  if(outline)
  {
      switch (color) {
          case 'primary':
              colorScheme = 'bg-transparent border text-skin-primary border-skin-primary'
              break;
          case 'secondary':
              colorScheme = 'bg-transparent border text-skin-secondary border-skin-secondary'
              break;
          case 'white':
              colorScheme = 'bg-transparent border text-white border-white'
              break;
      }
  }

  else
  {
      switch (color) {
          case 'primary':
              colorScheme = 'bg-skin-primary text-white border border-skin-primary'
              break;
          case 'secondary':
              colorScheme = 'bg-skin-secondary text-skin-primary border border-skin-secondary'
              break;
          case 'white':
              colorScheme = 'bg-white text-skin-primary border border-white'
              break;
      }
  }

  const defaultClassName = `${ rounded ? rounded : '' } ${ btnSize === 'sm' ? 'py-2.5 px-6 text-sm' : 'py-3.5 px-8' }
  ${ colorScheme } flex gap-2 items-center justify-center disabled:cursor-not allowed`

  useEffect(() => {
    // console.log(loading, "loading..");
    setLoading(loading);
  }, [loading]);


  return (
    <button
      type={type}
      className={className ? className : defaultClassName}
      onClick={onClick}
      style={style}
      disabled={disabled ? disabled : loading}
    >
      {isLoading ? (
        <div className="flex gap-4 items-center">
          <LoadingOutlined
              style={{ fontSize: 25, color: "#fff" }}
              spin
          />
          {loadingText ? loadingText : "Loading..."}
        </div>
      ) : (
        title
      )}
      {children}
    </button>
  );
};

export default ApButton