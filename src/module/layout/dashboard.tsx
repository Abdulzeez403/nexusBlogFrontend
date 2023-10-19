import React, { useEffect, useState } from "react";
import { Menu, Layout, theme } from "antd";
import Link from "next/link";

import {
  EditOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,

} from "@ant-design/icons";
import { IBlog } from "../home/models";
import { MdOutlineMapsHomeWork, MdPostAdd } from "react-icons/md";

const { Header, Sider, Content } = Layout;

interface IProps {
  children: React.ReactNode;
}
export const DashboardNav: React.FC<IProps> = ({ children }) => {
  const [blogData, setBlogData] = useState<IBlog>({} as any);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/blog`)
      .then((res) => res.json())
      .then((data) => {
        setBlogData(data);
      });
  }, []);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="text-white font-extrabold text-center py-5 text-[1.2rem]">
            WB
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: (
                  <Link href="/dashboard/home">
                    <MdOutlineMapsHomeWork size={30} />
                  </Link>
                ),
                label: "Home",
              },
              {
                key: "2",
                icon: (
                  <Link href="/dashboard/post">
                    <MdPostAdd size={30} />
                  </Link>
                ),
                label: "New Post",
              },
              {
                key: "3",
                icon: (
                  <Link href='/dashboard/update/update'>
                    <EditOutlined style={{ fontSize: '25px' }} />
                  </Link>
                ),
                label: "Update Post",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ paddingLeft: 12, background: colorBgContainer }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger text-[1.7rem]",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "86vh",
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
