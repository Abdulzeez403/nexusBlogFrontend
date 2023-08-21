import axios from "axios";
import { FormikHelpers } from "formik";
import React, { use } from "react";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { MyData, IComment } from "./blog/modal";
import { IBlog } from "./home/models";

interface IblogValue {
  loading: boolean;
  itemLoading: boolean;
  blogs: IBlog[];
  userBlog: MyData[];
  comments: IComment[];
  category: string;
  page: number;
  limit: number;
  handleItemLoad: (index: number) => void;
  fetchBlogs: () => void;
  FetchUserBlog: (userId: string) => void;
  CreateBlog: (values: MyData, userId: string) => void;
  UpdateBlog: (values: MyData, id: string) => Promise<void>;
  deleteBlog: (id: string) => void;
  paginationMore: (index: any) => void;
  paginationReduce: (index: any) => void;
  FilterCategory: (category: any) => void;
  FetchComments: (BlogId: string) => void;
  CreateComments: (values: IComment, BlogId: string) => void;
}

const BlogContext = createContext<IblogValue>({
  loading: false,
  itemLoading: false,
  blogs: [] || null,
  userBlog: [] || null,
  comments: [] || null,
  category: "",
  page: 1,
  limit: 10,
  fetchBlogs() {
    return null;
  },
  FetchUserBlog(userId) {},
  CreateBlog(values, userId) {
    return null;
  },
  UpdateBlog(values, id) {
    return null as any;
  },
  deleteBlog(id) {},
  handleItemLoad(index) {},
  paginationMore(index) {},
  paginationReduce(index) {},
  FilterCategory(category) {},
  FetchComments(BlogId) {
    return null;
  },
  CreateComments(BlogId) {},
});

export const useBlogContext = () => {
  let context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error("app dispatch must be used within app global provider");
  }
  return context;
};

interface IProps {
  children: React.ReactNode;
}

export const BlogContextProvider: React.FC<IProps> = ({ children }) => {
  const [blogs, setblogs] = useState<IBlog[]>([]);
  const [userBlog, setUserBlog] = useState<MyData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [itemLoading, setItemLoading] = useState<boolean[] | any>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const [category, setCategory] = useState<string>("");
  const [comments, setComments] = useState<IComment[]>([]);

  const handleItemLoad = (index: number): void => {
    const newLoadingArray = [...itemLoading]; // create a copy of the itemLoading array
    newLoadingArray[index] = true; // set the loading state for the item at the given index to false
    setItemLoading(newLoadingArray); // update the state with the new loading state array
  };

  const fetchBlogs = () => {
    try {
      axios
        .get(
          `http://localhost:5000/api/blog?page=${page}&limit=${limit}&category=${category}`
        )
        .then((data) => {
          setblogs(data?.data);
          setLoading(false);
          setItemLoading(new Array<boolean>(data?.data.length).fill(false));
        });
    } catch (error) {
      console.log(error);
    }
  };

  const FetchUserBlog = (userId: string) => {
    try {
      axios.get(`http://localhost:5000/api/user/${userId}`).then((data) => {
        setUserBlog(data?.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const CreateBlog = async (values: MyData, id: any) => {
    try {
      await axios
        .post(`http://localhost:5000/api/blog/${id}`, values)
        .then((data) => {
          setblogs(data?.data);
          toast.success("Post Successfully");
        });
    } catch (error) {
      console.error(error);
    }
  };

  const FetchComments = (BlogId: string) => {
    try {
      axios.get(`http://localhost:5000/api/comment/${BlogId}`).then((data) => {
        const datas = data?.data;
        if (datas) {
          setComments(datas);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const CreateComments = (values: IComment, BlogId: string) => {
    try {
      axios
        .post(`http://localhost:5000/api/blog/${BlogId}`, values)
        .then((data) => {
          const datas = data?.data;
          if (datas) {
            setComments(
              Array.isArray(comments) ? [...comments, datas] : [datas]
            );
          }

          toast.success("Post Successfully");
        });
    } catch (error) {
      console.error(error);
    }
  };

  const UpdateBlog = async (values: MyData, id: string) => {
    try {
      const res = axios
        .put(`http://localhost:5000/api/blog/${id}`, values)
        .then(() => {
          toast.success("Update Successfully");
        });
      const data = res;
      if (data) {
        blogs?.filter((q, i) => (q?._id === id ? data : q));
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBlog = (id: string) => {
    try {
      const res = axios
        .delete(`http://localhost:5000/api/blog/${id}`)
        .then(() => {
          toast.success("Deleted Successfully");
          setUserBlog(userBlog?.filter((c, i) => c._id !== id));
        });
    } catch (error) {
      toast.error("Deleted Failed!");
    }
  };

  const paginationMore = (index: any) => {
    setPage(page + index);
  };

  const paginationReduce = (index: any) => {
    setPage(Math.max(1, page - index));
  };

  const FilterCategory = (category: any) => {
    setCategory(category);
  };

  return (
    <BlogContext.Provider
      value={{
        loading,
        blogs,
        userBlog,
        comments,
        category,
        fetchBlogs,
        FetchUserBlog,
        FetchComments,
        CreateComments,
        FilterCategory,
        CreateBlog,
        UpdateBlog,
        deleteBlog,
        handleItemLoad,
        itemLoading,
        page,
        limit,
        paginationMore,
        paginationReduce,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
