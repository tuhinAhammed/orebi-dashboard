import React from 'react';
import { ProductOutlined, MailOutlined , UsergroupAddOutlined } from '@ant-design/icons';
import { Menu , Col, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };  
}

const items = [
    getItem('Users', 'sub1', <UsergroupAddOutlined />, [
      getItem('Merchant', '/login', ),
      getItem('User', '2', ),
    ]),
    getItem('product', 'sub2', <ProductOutlined />, [
      getItem('Add Product', '/addproduct', ),
      getItem('All Product', '/allproduct', ),
    ]),
    getItem('Category', 'sub3', <MailOutlined />, [
      getItem('Add Category', '5', ),
      getItem('All Category', '6', ),
    ]),
    getItem('Sub Category', 'sub4', <MailOutlined />, [
      getItem('Add Sub Category', '7', ),
      getItem('All Sub Category', '8', ),
    ]),
  ];
  
const Home = () => {
    const navigate = useNavigate()
    const onClick = (e) => {
        navigate(e.key);
      };
  return (
    <Row>
    <Col span={6}>
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['']}
      defaultOpenKeys={['']}
      mode="inline"
      items={items}
    />
    </Col>
    <Col span={18}>
      <Outlet></Outlet>
    </Col>
  </Row>

  )
}

export default Home