import ApButton from "@/components/button";
import { IComment } from "@/module/blog/modal";
import React from "react";
import { MdDeleteSweep } from "react-icons/md";
interface IProps {
  comment?: IComment;

}

const CommentList: React.FC<IProps> = ({ comment}) => {
 

  return (
    <tr className="border-b">
    {/* <td className="whitespace-nowrap px-6 py-4 font-medium">1</td> */}
    <td className="whitespace-nowrap px-6 ">{comment?.name}</td>
    {/* <td className="whitespace-nowrap px-6 py-4">{comment?.email}
    </td> */}
    <td className="whitespace-nowrap px-6 ">{comment?.body}</td>

    <td className="whitespace-nowrap px-2">
    <MdDeleteSweep size={20} color="red"/>
    </td>
  </tr>
  );
};
export default CommentList;
