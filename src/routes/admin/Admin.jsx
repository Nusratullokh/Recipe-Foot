import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Input } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Sider, Content, Footer } = Layout;
const { Search } = Input;

function Home() {
  
  const [collapsed, setCollapsed] = useState(false);

  const onSearch = () => {

  }

  return (
    <>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <NavLink className={"sidebar__link"} to="/admin/product">Products</NavLink>,
            },
            {
              key: '2',
              icon: <UsergroupAddOutlined />,
              label: <NavLink className={"sidebar__link"} to="/admin/promoted">Promoted</NavLink>,
            },
            {
              key: '3',
              icon: <VideoCameraOutlined />,
              label: <NavLink className={"sidebar__link"} to="/admin/users">Users</NavLink>,
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{display: "flex", alignItems: "center", gap: "20px", paddingLeft: "0"}}>
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: "#fff"
            }}
          />
        <Search
            placeholder="Search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
          <Menu 
             theme="dark"
             mode="horizontal"
             defaultSelectedKeys={['1']}
             items={[
               {
                 key: '1',
                 label: 'nav 1',
               },
               {
                 key: '2',
                 label: 'nav 2',
               }
             ]}
          />
        </Header>
        <Content style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: "lightgrey"
          }}>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
    </>
  )
}

export default Home
