import React from 'react';
import CustomNavigation from './NavigationBar';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
import { Table } from 'antd';
import { Layout, Flex } from 'antd';
import PieChart from "./PieChart";
import AddingTransactionModal from './AddingTransactionModal';
import Title from 'antd/es/typography/Title';
const formatter = (value) => <CountUp end={value} separator="," />;
const { Header, Footer, Sider, Content } = Layout;
const columns = [
  {
    title: 'expenses',
    dataIndex: 'name',



  },
  {
    title: 'Amount',
    dataIndex: 'age',

  },
  {
    title: 'descriptions',
    dataIndex: 'address',

  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  }
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const Dashboard = () => {


  return (
    <div style={{ display: 'flex' }}>

      <CustomNavigation />
      <Content>
        <div style={{}}>
           <Row >
            <Col span={12}> 
            <PieChart/>
            </Col>
 
       
          <Col span={3}  style={{marginTop:"7vh"}}>
            <Statistic title="Total Expense this month" value={112893} formatter={formatter} s />
          </Col>
          
          <Col span={3} style={{marginTop:"7vh"}}>
            <Statistic title="Total Income this month" value={112893} precision={2} formatter={formatter} />
          </Col>
          <Col span={3}  style={{marginTop:"7vh"}}>
            <Statistic title="Total Income this month" value={112893} precision={2} formatter={formatter} />
          </Col>
        

          </Row>
        </div>
        <Title level={5}>last transactions</Title>
        <Table columns={columns} dataSource={data} pagination={false} size="medium" />
      </Content>

    </div>
  );

};

export default Dashboard;