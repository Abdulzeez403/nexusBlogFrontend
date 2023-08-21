import React, { useState } from "react";
import { Button, ConfigProvider, Modal } from "antd";
interface IProps {
  open: boolean;
  title?: string;
  onDismiss?: () => void;
  width?: string | number;
  children: React.ReactNode;
}

const ApModal: React.FC<IProps> = ({
  open,
  title,
  onDismiss,
  width,
  children,
}) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "",
          },
        }}
      >
        <Modal
          width={width}
          title={title}
          open={open}
          onCancel={onDismiss}
          footer={null}
        >
          {children}
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default ApModal;
