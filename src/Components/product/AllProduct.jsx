import React from 'react'
import { Space, Table, Tag , Button } from 'antd';

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const columns = [
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Store',
    dataIndex: 'storeName',
    key: 'storeName',
    render: (_, record) => (
        <p> {record.store.storeName}</p> 
      ),
  },
  {
    title: 'image',
    dataIndex: 'image',
    key: 'image',
    render: (_, record) => (
        <img style={{width : "60px" }} src="https://media.istockphoto.com/id/1438373380/photo/beautiful-and-tasty-vegan-burger-on-a-plate.jpg?s=1024x1024&w=is&k=20&c=sj2Q4Tu0Icy0pOoSmgYyJQpU-2No9Yupsvall8ElY_s=" alt="" />
      ),
  },

  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type="primary" >Edit</Button>
        <Button type="primary" danger>Delete</Button>
      </Space>
    ),
  },
];
const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
const AllProduct = () => {
    const [productData , setProductData] = useState([])
    useEffect(() => {
        async function allProducts(){
            const data = await axios.get("http://localhost:4000/auth/v1/product/getproduct")
            setProductData(data.data);
            
        }
        allProducts()
        console.log(productData);

    },[])
  return (
    <div>
        <Table columns={columns} dataSource={productData} />
    </div>
  )
}

export default AllProduct