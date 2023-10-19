import AppChart from "@/components/charts/areaChart";
import useFetch from "@/components/hooks/fetch";
import { IComment } from "@/module/blog/modal";
import React from "react";
import { DashboardNav } from "../../layout/dashboard";
import CommentList from "./components/comment";
import FirstLayout from "./components/firstLayout";

export const DashboardHome = () => {
  const { apiData } = useFetch({ url: `${ process.env.NEXT_PUBLIC_API_ROUTE }api/comment/`});

  return (
    <DashboardNav>
      <FirstLayout />
      <div className="flex justify-between my-4">

      {/* <div className=""> */}
        <AppChart />
      {/* </div> */}

      <div className="flex justify-end   ">
        <table className="w-60 text-left text-sm bg-skin-alt border ">
          <thead className="border-b font-medium bg-black text-white">
            <tr>
              {/* <th scope="col" className="px-6 py-4">
              #
            </th> */}
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              {/* <th scope="col" className="px-6 py-4">
              Email
            </th> */}
              <th scope="col" className="px-6 py-4">
                Comment
              </th>
              <th scope="col" className="px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {apiData?.map((data: IComment, index: number) => (
              <CommentList comment={data} key={index} />
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
      

    </DashboardNav>
  );
};
