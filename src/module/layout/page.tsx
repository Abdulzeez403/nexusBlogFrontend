import React from "react";
import { Footer } from "./main/footer";
import { Nav } from "./main/nav";
import { useBlogContext } from "../context";
interface IProps {
  children: React.ReactNode;
}
export const MainLayout: React.FC<IProps> = ({ children }) => {

  const { FilterCategory, category } = useBlogContext();

  return (
    <div className=" w-[100%] mx-auto sm:w-[80%] sm:mx-auto md:w-[80%] md:mx-auto lg:w-[80%] ">
      <Nav category={category} FilterCategory={FilterCategory} />
      {children}
      <Footer />
    </div>
  );
};
