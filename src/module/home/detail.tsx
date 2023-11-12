import ShotImage from "../../../public/Images/shot.jpg";
import TechImage from "../../../public/Images/weather.jpg";
import TravelImage from "../../../public/Images/traveling.jpg";
import Image from "next/image";
import { BlogsTemplate } from "./components/blogs";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useEffect } from "react";
import { useBlogContext } from "../context";

export const DetailPage = () => {
  const {
    fetchBlogs,
    blogs,
    loading,
    itemLoading,
    handleItemLoad,
    paginationMore,
    paginationReduce,
    page,
    limit,
    category,
  } = useBlogContext();


  useEffect(() => {
    fetchBlogs();
  }, [page, limit, category]);

  return (
    <div>
      <div className="flex gap-2">
        <div className="w-[100%] sm:w-[80%] md:w-[90] lg:w-[70%] bg-red-300 relative ">
          <Image
            src={ShotImage}
            alt="ShotImage"
            width={1000}
            height={600}
            priority
          />

          <div className="absolute bottom-5 left-8">
            <h5 className="font-semibold text-red-400 text-sm">TECHNOLOGGY</h5>
            <h3 className="font-bold text-white text-[1.7rem]">
              The regime of modern technology begins
            </h3>

            <h4 className="font-bold text-[12px] text-white">
              ABDULAZEEZ SODIQ - <span>20, APRIL 2023</span>
            </h4>
          </div>
        </div>
        <div className="hidden sm:hidden md:hidden lg:grid lg:grid-flow-row lg:gap-y-1">
          <div className="relative">
            <Image
              src={TechImage}
              alt="RuningImage"
              width={440}
              height={300}
              priority
            />

            <div className="absolute bottom-5 left-8">
              <h5 className="font-semibold text-red-400 text-sm">WEATHER</h5>
              <h3 className="font-bold text-white text-[1.3rem]">
                The Beauty of the Earth is multifaced!
              </h3>

              <h4 className="font-bold text-[12px] text-white">
                ABDULAZEEZ SODIQ - <span>20, APRIL 2023</span>
              </h4>
            </div>
          </div>
          <div className="relative">
            <Image
              src={TravelImage}
              alt="SportImage"
              width={440}
              height={300}
            />
            <div className="absolute bottom-5 left-8">
              <h5 className="font-semibold text-red-400 text-sm">TRAVEL</h5>
              <h3 className="font-bold text-white text-[1.3rem]">
                The World is beyound what we see...
              </h3>

              <h4 className="font-bold text-[12px] text-white">
                ABDULAZEEZ SODIQ - <span>20, APRIL 2023</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-2 my-2">
        <div className="">
          <BlogsTemplate
            blog={blogs}
            isLoading={loading}
            itemLoading={itemLoading}
            handleItemLoad={handleItemLoad}
          />
        </div>

        {/* <div className="hidden w-[40%]  mx-auto  h-[27rem] sm:hidden md:hidden lg:flex">
          <h4 className="text-[1rem] text-red-500 border-1 text-center">
            <div className="h-[20px]">
              <Image
                src={ads}
                alt="ads/image"
                width={500}
                height={500}
              // sizes="100vw"
              // object-fit="contain"
              />
            </div>
          </h4>
        </div> */}
      </div>
      <div className="flex justify-between gap-x-20 my-4 ">
        <div className="flex gap-x-3 px-6 py-3 bg-black items-center">
          <button
            className=" text-white"
            onClick={() => {
              paginationMore(1);
            }}
          >
            Next
          </button>
          <AiOutlineRight color=" white" size={20} />
        </div>

        <div className="flex gap-x-3 px-6 bg-black items-center">
          <AiOutlineLeft color=" white" size={20} />

          <button
            className=" text-white"
            onClick={() => {
              paginationReduce(1);
            }}
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};
