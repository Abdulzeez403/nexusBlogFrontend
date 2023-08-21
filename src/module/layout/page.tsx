import React from "react";
import { Footer } from "./main/footer";
import { Nav } from "./main/nav";
interface IProps {
  children: React.ReactNode;
  category?: string
}
export const MainLayout: React.FC<IProps> = ({ children, category }) => {
  return (
    <div className=" w-[100%] mx-auto sm:w-[80%] sm:mx-auto md:w-[80%] md:mx-auto lg:w-[80%] ">
      <Nav category={category} />
      {children}
      <Footer />
    </div>
  );
};
