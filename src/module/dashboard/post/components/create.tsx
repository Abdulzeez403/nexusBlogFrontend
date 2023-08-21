import { ApButton } from "@/components/button";
import { ApTextInput } from "@/components/input";
import { ApTextEditor } from "@/components/input/TextEditor";
import { useBlogContext } from "@/module/context";
import { useUserContext } from "@/module/UserContext";
import axios from "axios";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import React, { useEffect, useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { toast } from "react-toastify";
import { MyData } from "../modal";

interface IProps {
  data?: MyData;
}

export const CreatePost: React.FC<IProps> = ({ data }) => {
  const { user, CurrentUser } = useUserContext();
  const { CreateBlog } = useBlogContext();

 

  const handleSubmit = (values: MyData) => {
    const payload = { ...values };
    const userId = user?.id as any;
    CreateBlog(payload, userId);
    console.log(payload, userId, "payload");
    CurrentUser();
  };

  return (
    <Formik
      initialValues={{ title: "", body: "", image: "", category: "" }}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <ApTextInput
            type="text"
            label="Enter Title"
            name="title"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />
          <ApTextInput
            type="text"
            label="Category"
            name="category"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />
          <ApTextInput
            type="text"
            label="Image-url"
            name="image"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />

          <ApTextEditor label="Enter Article" name="body" />

          <button
            type="submit"
            // disabled={isSubmitting}
            className="text-white bg-blue-500 rounded-md p-2 px-10 text-lg font-bold"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

// values: MyData,
// { setSubmitting }: FormikHelpers<MyData>
// ) => {
// try {
//   await axios
//     .post("http://localhost:5000/api/blog/" + user?.id, values)
//     .then(() => {
//       toast.success("Post Successfully");
//     });
// } catch (error) {
//   console.error(error);
// }

// setSubmitting(false);
