import { ApHTMLContent } from "@/components/input/TextEditor";
import { IBlog } from "@/module/home/models";
import { useState } from "react";
interface IProps {
  Blogdatas: IBlog;
}


export const SingleBlog: React.FC<IProps> = ({ Blogdatas }) => {

  return (
    <div className=" " >
      <div>
        <h1 className='font-bold py-4 text-center text-[1.2rem]'>{Blogdatas?.title}</h1>
        <ApHTMLContent content={`<div>${Blogdatas?.body}</div>`} />
        {/* <div>{Blogdatas?.description}</div> */}
        <div>{Blogdatas?.author}</div>
      </div>
      <div>

      </div>
    </div>
  )
};
