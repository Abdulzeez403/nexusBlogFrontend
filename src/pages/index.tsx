import { HomePage } from "@/module/home/page";

function Home({ data }: any) {
  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(6);
  // const [category, setCategry] = useState("tech");

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default Home;

// export const getServerSideProps = async ({
//   query,
//   req,
// }: {
//   query: any;
//   req: any;
// }) => {
//   const {category} = query;

//   const res = await axios.get(`http://localhost:5000/api/blog/${category}`);
//   const data = res.data.BlogId;

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// };
