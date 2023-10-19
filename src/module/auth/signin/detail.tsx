import { ApTextInput } from "@/components/input";
import axios from "axios";
import { FormikHelpers, Formik, Form, FormikProps } from "formik";
import { signIn, getCsrfToken } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdFollowTheSigns } from "react-icons/md";
import { toast } from "react-toastify";
import { IAuthSignIn } from "../model";

export const SignInDetail = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (user: IAuthSignIn) => {
    setLoading(true);
    console.log(JSON.stringify(user));
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/user/Login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      setLoading(false);
      const data = await res.json();
      localStorage.setItem("currentUser", JSON.stringify(data));
      router.push("/");
      toast.success("Login Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Formik
        initialValues={{ email: "", password: "" }}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<any>) => (
          <div className="flex justify-center items-center m-0 h-[100vh]">
            <Form className=" w-[20%] border  shadow-lg py-10 px-4">
              <div className=" flex justify-center m-0 items-center py-3 ">
                <div className="flex gap-x-3 items-center">
                  <h4 className=" font-semibold">Sign In</h4>

                  <MdFollowTheSigns size={25} />
                </div>
              </div>
              <ApTextInput
                type="text"
                label="Email"
                name="email"
                className=" p-2 rounded-md outline-0 border hover:bg-white"
              />
              <ApTextInput
                type="text"
                label="password"
                name="password"
                className=" p-2 rounded-md outline-0 border hover:bg-white"
              />

              <button
                type="submit"
                className="bg-blue-400 text-white font-semibold px-10 py-2 rounded-sm "
              >
                {loading ?
                  <h3>Loading...</h3> :
                  <h3>LogIn</h3>}
              </button>

              <div className="text-center py-4">
                If you dont have an account
                <Link href="/signUp" className="text-yellow-300 px-2">
                  SignUp
                </Link>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
