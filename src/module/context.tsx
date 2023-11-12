import axios, { AxiosRequestConfig } from 'axios';
import React from "react";
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
  likes: any,
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
  likeAndUnlike: (values: any, userId: string) => void;
}

const BlogContext = createContext<IblogValue>({
  loading: false,
  likes: [],
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
  FetchUserBlog(userId) { },
  CreateBlog(values, userId) {
    return null;
  },
  UpdateBlog(values, id) {
    return null as any;
  },
  deleteBlog(id) { },
  handleItemLoad(index) { },
  paginationMore(index) { },
  paginationReduce(index) { },
  FilterCategory(category) { },
  FetchComments(BlogId) {
    return null;
  },
  CreateComments(BlogId) { },
  likeAndUnlike(values, userId) { }
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
  const [limit, setLimit] = useState<number>(8);
  const [category, setCategory] = useState<string>("");
  const [comments, setComments] = useState<IComment[]>([]);
  const [likes, setLikes] = useState<[]>()

  const handleItemLoad = (index: number): void => {
    const newLoadingArray = [...itemLoading];
    setItemLoading(newLoadingArray);
  };



  const fetchBlogs = () => {
    try {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_ROUTE}/blog?page=${page}&limit=${limit}&category=${category}`
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
      axios.get(`${process.env.NEXT_PUBLIC_API_ROUTE}/user/${userId}`).then((data) => {
        setUserBlog(data?.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const CreateBlog = async (values: MyData, id: any) => {
    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_ROUTE}/blog/${id}`, values)
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
      axios.get(`${process.env.NEXT_PUBLIC_API_ROUTE}/comment/${BlogId}`).then((data) => {
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
        .post(`${process.env.NEXT_PUBLIC_API_ROUTE}/blog/${BlogId}`, values)
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
        .put(`${process.env.NEXT_PUBLIC_API_ROUTE}/blog/${id}`, values)
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
        .delete(`${process.env.NEXT_PUBLIC_API_ROUTE}/blog/${id}`)
        .then(() => {
          toast.success("Deleted Successfully");
          setUserBlog(userBlog?.filter((c, i) => c._id !== id));
        });
    } catch (error) {
      toast.error("Deleted Failed!");
    }
  };

  const likeAndUnlike = (values: any, userId: string) => {
    try {
      const authToken = localStorage.getItem("jwt")
      const headers: AxiosRequestConfig['headers'] = {
        Authorization: `Bearer ${authToken}`,
      };

      const res = axios
        .put(`${process.env.NEXT_PUBLIC_API_ROUTE}/blog/likes/${userId}`, values, {
          headers,

        })
        .then(() => {
          toast.success("liked!");
        });
      const data = res;
      setLikes(data as any)
      return res;
    } catch (error) {
      console.log(error);
    }

  }

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
        likes,
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
        likeAndUnlike
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
