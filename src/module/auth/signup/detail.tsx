import { ApTextInput } from "@/components/input";
import axios from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdFollowTheSigns } from "react-icons/md";
import { toast } from "react-toastify";
import { IAuth } from "../model";

export const SignUpDetail = () => {
  const router = useRouter();

  const handleSubmit = async (
    values: IAuth,
    { setSubmitting }: FormikHelpers<IAuth>
  ) => {
    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_ROUTE}/user/Register`, values)
        .then(() => {
          toast.success("Registered Successfully");
        })
        .then(() => {
          router.push("/signIn");
        });
    } catch (error) {
      console.error(error);
    }

    setSubmitting(false);
  };

  return (
    <Formik
      className=""
      initialValues={{ username: "", email: "", password: "" }}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <div className="flex justify-center items-center m-0 h-[100vh]">
          <Form className="w-[20%] border  shadow-lg py-10 px-4">
            <div className=" flex justify-center m-0 items-center py-3 ">
              <div className="flex gap-x-3 items-center">
                <h4 className=" font-semibold">Sign Up</h4>

                <MdFollowTheSigns size={25} />
              </div>
            </div>
            <ApTextInput
              type="text"
              label="Username"
              name="username"
              className=" p-2 rounded-md outline-0 border hover:bg-white "
            />
            <ApTextInput
              type="text"
              label="Email"
              name="email"
              className=" p-2 rounded-md outline-0 border hover:bg-white"
            />
            <ApTextInput
              type="text"
              label="Password"
              name="password"
              className=" p-2 rounded-md outline-0 border hover:bg-white"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-400 text-white font-semibold px-10 py-2 rounded-sm "
            >
              Submit
            </button>

            <div className="text-center py-4">
              If you already have an account
              <Link href="/signIn" className="text-yellow-300 px-2">
                SignIn
              </Link>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
