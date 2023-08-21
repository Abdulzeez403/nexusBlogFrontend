import React, { useEffect, useState } from "react";
import moment from "moment";
// import { AP_DATE_FORMAT } from "../../constants";
interface IProps {
  value: number | string;
  fromNow?: boolean;
  toNow?: boolean;
  className?: string | undefined;
}

export const ApDate: React.FC<IProps> = ({
  value,
  className,
  fromNow,
  toNow,
}) => {
  const [date, setDate] = useState<any>();

  useEffect(() => {
    // setDate(moment(value).format(AP_DATE_FORMAT));

    if (fromNow) {
      setDate(moment(value).fromNow());
    }

    if (toNow) {
      setDate(moment(value).toNow());
    }
  }, [value]);

  return <div className={className}>{date}</div>;
};
