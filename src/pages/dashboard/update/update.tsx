import { MyData } from "@/module/dashboard/post/modal";
import { UpdateScreen } from "@/module/dashboard/update/page";
import React from "react";
// interface IProps{
//   data: MyData;
// }

const UpdatePage = () => {
  return (
    <div>
      <UpdateScreen />
    </div>
  );
};
export default UpdatePage;

// // This also gets called at build time
// export async function getServerSideProps({ params }:any) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(`http://localhost:5000/api/blog/${params?._id}`)
//   const data = await res.json()

//   // Pass post data to the page via props
//   return { props: { data } }
// }
