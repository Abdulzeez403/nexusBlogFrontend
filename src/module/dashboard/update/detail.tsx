import ApModal from "@/components/modal/modal";
import React, { useEffect, useState } from "react";
import { MyData } from "../post/modal";
import { PostList } from "./components/postList";
import { UpdateForm } from "./components/update";

interface IProps {
  blog: MyData;
}

export const UpdateDetail: React.FC<IProps> = ({ blog }) => {
  const [modal, setModal] = useState<{ open: boolean }>({ open: false });
  return (
    <>
      <PostList
        data={blog as any}
        onOpen={() => {
          setModal({ open: true });
        }}
      />

      <ApModal
        width={1000}
        open={modal?.open}
        onDismiss={() => {
          setModal({ open: false });
        }}
      >
        <UpdateForm FormData={blog as any}
         onDismiss={() => {
          setModal({ open: false });
        }}
         />
      </ApModal>
    </>
  );
};
