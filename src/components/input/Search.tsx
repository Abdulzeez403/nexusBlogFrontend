import React, { useEffect, useState } from "react";
interface IProps {
  placeholder?: string;
  className?: string;
  debounce?: number;
  onSearchChange: (value: string) => void;
}

export const ApSearchInput: React.FC<IProps> = (props: IProps) => {
  const { placeholder, debounce, className, onSearchChange } = props;
  const [val, setval] = useState<string>();
  useEffect(() => {
    let timeout = setTimeout(() => {
      if (val !== null) onSearchChange(val?.toLowerCase());
    }, 1200);
    return () => {
      clearTimeout(timeout);
    };
  }, [val]);

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={className ? className : "search-input"}
      onChange={(e: any) => setval(e.target.value)}
    />
  );
};
