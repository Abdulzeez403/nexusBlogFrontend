import Image from "next/image";
import BlogImage from "../../../../public/Images/shot.jpg";
import ProfileImage from "../../../../public/Images/avatar.png";
import { GiOpenBook } from "react-icons/gi";
import { IBlog } from "../models";
import BounceLoader from "react-spinners/BounceLoader";
import RiseLoader from "react-spinners/RiseLoader";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { useBlogContext } from "@/module/context";
import { useUserContext } from "@/module/UserContext";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface IProps {
  blog: IBlog[];
  isLoading: boolean;
  itemLoading: any;
  handleItemLoad: (index: number) => void;
}

export const BlogsTemplate: React.FC<IProps> = ({
  blog,
  isLoading,
  handleItemLoad,
  itemLoading,
}) => {

  const { likes, likeAndUnlike } = useBlogContext();
  const { user, CurrentUser } = useUserContext();
  const router = useRouter()

  useEffect(() => {
    CurrentUser();
  }, [])
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="grid grid-flow-cols gap-3 lg:grid lg:grid-cols-4   ">
          {blog?.map((data, i) => (
            <div
              key={i}
              className="border-2 px-3 shadow-lg   "
            >
              {itemLoading[i] ? (
                <div className="flex m-0 justify-center items-center h-80 bg-slate-500">
                  <BounceLoader color="white" size={150} speedMultiplier={2} />
                </div>
              ) : (
                <div onClick={() => handleItemLoad(i)}>
                  <div className="w-[100%]">
                    <Image
                      src={BlogImage}
                      alt="BlogsImage"
                    // width={data?.image ? 400 : 0}
                    // height={data?.image ? 400 : 0}
                    />
                  </div>
                  <Link href={`blog/${data?._id}`}>
                    <h5 className="font-bold text-[1.3rem]">{data?.title}</h5>
                  </Link>

                  <div className="flex justify-between items-center ">
                    <div className="flex items-center gap-x-3">
                      <div className="">
                        <Image
                          src={ProfileImage}
                          alt="BlogsImage"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div className="block">
                        <h4>
                          {data?.author || (
                            <h4 className="font-bold">Unknown Author</h4>
                          )}
                        </h4>
                        {/* <h4>{moment(data?.createdAt).format("LLL")}</h4> */}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <AiFillLike size={25}
                        onClick={() => {
                          toast.success("Coming soon")
                          // if (user?.id) {
                          //   likeAndUnlike(data?._id, user?.id)

                          // } else {
                          //   router.push("/signUp")
                          // }
                        }}
                      />
                      <div className="text-md">0</div>
                    </div>


                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>


  );
};
