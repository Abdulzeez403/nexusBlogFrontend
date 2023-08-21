import React from "react";
import { Popconfirm } from "antd";

interface IProps {
  children: React.ReactNode;
  onConfirm: () => void;
}

const AppConfirm: React.FC<IProps> = ({ children, onConfirm }) =>{
 const  okButtonStyle = { background: 'skyblue', color: 'white' }

return (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    okText="Yes"
    cancelText="No"
    okType="primary"
    onConfirm={onConfirm}
    okButtonProps={{style:okButtonStyle}}

  >
    {children}
  </Popconfirm>
)};

export default AppConfirm;
