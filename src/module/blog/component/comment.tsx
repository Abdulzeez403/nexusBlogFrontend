import React, { useState } from "react";

import Button, { ApButton } from "@/components/button";
import { ApTextInput } from "@/components/input";
import { ApTextEditor } from "@/components/input/TextEditor";
import axios from "axios";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { IComment, MyData } from "../modal";
import { IBlog } from "@/module/home/models";
import { useBlogContext } from "@/module/context";

interface IProps {
  commentData?: IComment;
  Blogdatas: IBlog;
}

const validationSchema = Yup.object().shape({
  body: Yup.string().required("Body is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const CommentForm: React.FC<IProps> = ({ commentData, Blogdatas }) => {
  const { CreateComments } = useBlogContext();
  const handleSubmit = (values: IComment) => {
    const payload = { ...values };
    const id = Blogdatas?._id as any;
    CreateComments(payload, id);
  };

  return (
    <Formik
      initialValues={{
        body: "",
        email: "",
        name: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="py-9 ">
          <ApTextInput
            type="text"
            label="Name"
            name="name"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />
          <ApTextInput
            type="text"
            label="Email"
            name="email"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />
          <ApTextInput
            type="textarea"
            label="Message"
            name="body"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />

          <Button
            type="submit"
            title="Post"
            color="secondary"
            btnSize="sm"
            rounded="rounded-md"
            className="text-white bg-blue-500 rounded-md p-2 px-10 text-lg font-bold"
          />
        </Form>
      )}
    </Formik>
  );
};

// values: IComment,
// { setSubmitting }: FormikHelpers<IComment>
// ) => {
// await axios
//   .post(`http://localhost:5000/api/comment/${Blogdatas?._id}`, values)
//   .then(() => {
//     toast.success("commented Successfully");
//   });
// setSubmitting(false);
// // setUpdateData(values)
