import useFetch from "@/components/hooks/fetch";
import { IBlog } from "../home/models";
import { MainLayout } from "../layout/page";
import { CommentForm } from "./component/comment";
import { CommentList } from "./component/commentList";
import { SingleBlog } from "./component/singleBlog";
import { MyData } from "./modal";
import { useBlogContext } from "../context";
import { useEffect } from "react";
interface IProps {
  Blogdata: IBlog;
  commentData?: MyData;
}

export const BlogDetail: React.FC<IProps> = ({ Blogdata }) => {
  // const {apiData} = useFetch({url: `http://localhost:5000/api/comment/${Blogdata?._id}`})
  const { FetchComments, comments } = useBlogContext();
  useEffect(() => {
    FetchComments(Blogdata?._id as any);
    console.log(Blogdata?._id, "Blogdata")
  },[]);
  return (
    <MainLayout>
      <div className="w-[95%] mx-auto text-justify sm:w-[90%] sm:mx-auto sm:text-justify lg:w-[80%] lg:mx-auto lg:text-justify">
        <SingleBlog Blogdatas={Blogdata} />
        <CommentForm Blogdatas={Blogdata} />
        <CommentList BlogComments={comments} />
      </div>
    </MainLayout>
  );
};
