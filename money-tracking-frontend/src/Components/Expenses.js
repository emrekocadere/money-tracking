import React from 'react';
import CustomNavigation from './Navigation';
import AddExpense from './AddExpense';
import { Table } from 'antd';
import { Layout, Flex } from 'antd';


const { Header, Footer, Sider, Content } = Layout;


const columns = [
  {
    title: 'expenses',
    dataIndex: 'newBalance',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu'
      },
    ],

    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    sorter: (a, b) => a.age - b.age
  },
  {
    title: 'descriptions',
    dataIndex: 'description',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];



const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};


const Expenses = () => {


  

  return (

    <div style={{ display: 'flex' }}>

      <CustomNavigation></CustomNavigation>
      <Content>
        <Table columns={columns} dataSource={data} onChange={onChange} style={{ boxSizing: "content-box" }} />
        <AddExpense onAddExpense={handleRefreshExpenses}/>
      </Content>

    </div>

  );
}


export default Expenses;


