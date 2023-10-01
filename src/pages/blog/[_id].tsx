import { BlogDetail } from "@/module/blog/page";
import { IBlog } from "@/module/home/models";
import axios from "axios";
interface IProps {
  data: IBlog;
}

const BlogDetailPage:React.FC<IProps>= ({data}) => {
  return (
    <div>
      <BlogDetail Blogdata={data} />
    </div>
  );
};
export default BlogDetailPage;


export const getServerSideProps = async ({
  query,
  req,
}: {
  query: any;
  req: any;
}) => {
  const { _id } = query;


  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_ROUTE}/blog/${_id}`);
  const data = res.data.BlogId;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
};
