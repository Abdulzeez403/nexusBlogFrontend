import React, { useEffect, useState } from "react";
import { RiAdminLine, RiFacebookFill } from "react-icons/ri";
import {
  AiOutlineTwitter,
  AiOutlineGooglePlus,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BiMenu, BiSearchAlt, BiUserCircle } from "react-icons/bi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import { useUserContext } from "@/module/UserContext";
import { useBlogContext } from "@/module/context";
import router, { useRouter } from "next/router";

export const Nav = () => {
  const { user, CurrentUser, LogOutUser } = useUserContext();

  useEffect(() => {
    CurrentUser();
  }, []);

  const { FilterCategory, category } = useBlogContext();

  const [toggle, setToggle] = useState(false);
  const [usertoggle, setUserToggle] = useState(false);
  return (
    <div>
      <div className="flex justify-between py-3  items-center border-b-2 sm:justify-between md:justify-between ">
        <div className=" hidden gap-4 sm:hidden md:hidden lg:flex ">
          <RiFacebookFill size={20} />
          <AiOutlineTwitter size={20} />
          <AiOutlineGooglePlus size={20} />
          <AiOutlineInstagram size={20} />
        </div>
        <div>
          <h2 className="font-bold text-[1.5rem]">Webblog!</h2>
        </div>
        <div className="flex gap-4">
          <div className="flex sm:flex md:flex lg:hidden">
            {!toggle ? (
              <BiMenu
                size={25}
                onClick={() => {
                  setToggle(true);
                }}
              />
            ) : (
              <AiOutlineCloseCircle
                size={25}
                onClick={() => setToggle(false)}
              />
            )}
          </div>
          {user ? (
            <div className="hidden relative sm:hidden md:hidden lg:flex">
              <li
                onClick={() => {
                  setUserToggle(!usertoggle);
                }}
                className="flex gap-x-3"
              >
                <h4>{user?.username}</h4>

                <BiUserCircle size={25} />
              </li>

              <div className="absolute z-40  w-[8rem]  top-9 left-[-3rem] rounded-sm">
                {usertoggle === true ? (
                  <div className="block  bg-white border-[1px]">
                    <li className="px-4 py-1 border-b-[1px]">
                      <Link
                        href="/dashboard/home"
                        className="flex items-center gap-x-1"
                      >
                        <RiAdminLine size={18} />
                        Admin
                      </Link>
                    </li>
                    <li className="px-4 py-1 ">
                      <Link
                        href="/dashboard/update"
                        className="flex items-center gap-x-1"
                      >
                        <RiAdminLine size={18} />
                        Sign-Out
                      </Link>
                    </li>
                  </div>
                ) : null}
              </div>
            </div>
          ) : (
            <li className="px-4 py-1 border-b-[1px]">
              <Link href="/signIn" className="flex items-center gap-x-1">
                Login
              </Link>
            </li>
          )}

          <div>
            {user ? (
              <div>
                <button
                  onClick={() => {
                    LogOutUser();
                  }}
                >
                  LogOut
                </button>
              </div>
            ) : (
              <div>
                <button>
                  <Link href="/signUp">SignUp</Link>
                </button>
              </div>
            )}
          </div>

          {/* <BiSearchAlt size={25} /> */}
        </div>
      </div>
      <div className="px-3 ">
        <ul
          className={
            toggle
              ? "block justify-center text-center gap-4 border-y-2 py-4 sm:block sm:justify-center md:block lg:flex"
              : "hidden justify-center text-center gap-4 border-y-2 py-4   sm:block sm:justify-center md:hidden lg:flex"
          }
        >
          <li
            className="flex gap-1 items-center"
            onClick={() => FilterCategory("")}
          >
            <Link href={`?category=${category}`} className="font-bold">
              All
            </Link>
            <MdOutlineArrowDropDown size={25} />
          </li>
          <li
            className="flex gap-1 items-center"
            onClick={() => FilterCategory("lifestyle")}
          >
            <Link href={`?category=${category}`} className="font-bold">
              LIFESTYLE
            </Link>
            <MdOutlineArrowDropDown size={25} />
          </li>
          <li
            className="flex gap-1 items-center"
            onClick={() => FilterCategory("fashion")}
          >
            <Link href={`?category=${category}`} className="font-bold">
              FASHION
            </Link>
            <MdOutlineArrowDropDown size={25} />
          </li>
          <li
            className="flex gap-1 items-center"
            onClick={() => FilterCategory("tech")}
          >
            <Link href={`?category=${category}`} className="font-bold">
              TECHNOLOGY
            </Link>
            <MdOutlineArrowDropDown size={25} />
          </li>
          <li
            className="flex gap-1 items-center"
            onClick={() => FilterCategory("travel")}
          >
            <Link href={`?category=${category}`} className="font-bold">
              TRAVEL
            </Link>
            <MdOutlineArrowDropDown size={25} />
          </li>
        </ul>
      </div>
    </div>
  );
};
