import React from "react";
import { MainLayout } from "../layout/page";
import { DetailPage } from "./detail";

interface IProps { }

export const HomePage: React.FC<IProps> = ({ }) => {
  return (
    <MainLayout>
      <DetailPage />
    </MainLayout>
  );
};
