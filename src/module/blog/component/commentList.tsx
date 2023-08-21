import type { MenuProps } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { IComment } from "../modal";
import moment from "moment";

interface IProps {
  BlogComments: IComment[];
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Update
      </a>
    ),
  },
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Delete
      </a>
    ),
  },
];

export const CommentList: React.FC<IProps> = ({ BlogComments }) => {
  return (
    <div>
      {BlogComments?.map((m, i) => (
        <div key={i}>
          <div className=" flex justify-between gap-x-4 items-center my-4 bg-white shadow-lg py-3 px-2">
            <div className="flex gap-x-4">
              <div className="rounded-full w-[3rem] h-[3rem] bg-blue-300">
                <h4 className="font-bold flex m-0 justify-center items-center h-[96%]">
                  {m?.name?.charAt(0) || <h4>U</h4>}
                </h4>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="font-bold py-1">
                    {m?.name || <h4>Unknown</h4>}
                  </h4>

                  {moment(m?.createdAt).startOf("day").fromNow()}
                </div>
                {m?.body}
              </div>
            </div>

            <div>
              <Dropdown
                trigger={["click"]}
                menu={{ items }}
                placement="bottom"
                arrow={{ pointAtCenter: true }}
              >
                <MoreOutlined className="text-[25px] mt-2 -mr-2" />
              </Dropdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
