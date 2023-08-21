import React, { useEffect, useState } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
  date: {
    date: Date;
    // endDate: Date;
  };
  name?: string;
  dateFormat?: string;
  onChange: (date: { date: Date }) => void;
}

export const ApDatePicker: React.FC<IProps> = ({ date, onChange, name, dateFormat }: IProps) => {
  const [dt, setDt] = useState(date);

  useEffect(() => {
    onChange(dt);
  }, [dt]);
  return (
    <DatePicker
    name={name}
    className="form-control datetimepicker form-control block  w-full
                     h-12
                     px-3
                     py-1.5
                     text-base
                     font-normal
                     text-gray-700
                     bg-white bg-clip-padding
                     border border-solid border-gray-300
                     rounded-lg
                     transition
                     ease-in-out
                     m-0
                     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      selected={dt.date}
      onChange={(date: any) => setDt({ ...dt, date: date })}
      selectsStart
      // startDate={dt.startDate}
      // maxDate={new Date(Date.now())}
      dateFormat={dateFormat}
    />
  );
};
