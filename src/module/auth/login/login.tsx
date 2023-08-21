import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from 'yup';
import { useRouter } from "next/router";

// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email address').required('Required'),
//   password: Yup.string().required('Required'),
// });

const LoginPage = () => {
  const router = useRouter();

  const handleSubmit = async ({ values }: any) => {
    try {
      const response = await fetch(
        ` http://localhost:5000/api/user/Login?`
      );
      const data = await response.json();
      localStorage.setItem("accessToken", data.user.id);
      // localStorage.setItem("user", data.user.id);
      router.push("/dashboard/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      //   validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
