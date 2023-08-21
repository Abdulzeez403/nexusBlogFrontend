import AppPagination from "@/components/pagenation/pagination";
import React from "react";
import { MainLayout } from "../layout/page";
import { DetailPage } from "./detail";
import { IBlog } from "./models";

interface IProps {}

export const HomePage: React.FC<IProps> = ({}) => {
  return (
    <MainLayout>
      <DetailPage />
    </MainLayout>
  );
};
