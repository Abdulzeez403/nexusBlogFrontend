import { useBlogContext } from "@/module/context";
import { DashboardNav } from "@/module/layout/dashboard";
import { useUserContext } from "@/module/UserContext";
import { useEffect } from "react";
import { UpdateDetail } from "./detail";

export const UpdateScreen = () => {
  const { user, CurrentUser } = useUserContext();
  const { FetchUserBlog, userBlog } = useBlogContext();

  useEffect(() => {
    CurrentUser();
    FetchUserBlog(user?.id);
    console.log(user);
  }, []);

  return (
    <DashboardNav>
      <table className="min-w-full text-left text-sm bg-skin-alt border">
        <thead className="border-b font-medium bg-slate-300">
          <tr>
            {/* <th scope="col" className="px-6 py-4">
              #
            </th> */}
            <th scope="col" className="px-6 py-4">
              Title
            </th>
            <th scope="col" className="px-6 py-4">
              Body
            </th>
            <th scope="col" className="px-6 py-4">
              Id
            </th>
            <th scope="col" className="px-6 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {userBlog?.map((data: any, i: number) => (
            <UpdateDetail blog={data} key={i} />
          ))}
        </tbody>
      </table>
    </DashboardNav>
  );
};
