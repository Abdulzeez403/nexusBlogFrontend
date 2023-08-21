import { DashboardNav } from "@/module/layout/dashboard";
import React from "react";
import { CreatePost } from "./components/create";

export const PostComponent = () => {
  return (
    <DashboardNav>
      <CreatePost />
    </DashboardNav>
  );
};
