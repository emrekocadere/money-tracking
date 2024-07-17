import React from 'react';
import CustomNavigation from './NavigationBar';
import AddingTransactionModal from './AddingTransactionModal';
import { Button } from 'antd';
import LineChart from "./LineChart";
import { Table } from 'antd';
import { Layout, Flex, Col, Row } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const columns = [
    {
        title: 'expenses',
        dataIndex: 'name',
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
                value: 'Submenu',
                children: [
                    {
                        text: 'Green',
                        value: 'Green',
                    },
                    {
                        text: 'Black',
                        value: 'Black',
                    },
                ],
            },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Amount',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'descriptions',
        dataIndex: 'address',
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
const Transaction = () => {


    return (
        <div style={{ display: 'flex' }}>

            <CustomNavigation />
            <Content>
                <Row>


                    <Col span={12}>
                        <LineChart></LineChart>
                        <Button type="text" danger>
                            Graph
                        </Button>
                        <Button type="text" danger>
                            Ratios
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Table columns={columns} dataSource={data} onChange={onChange} style={{ boxSizing: "content-box" }} />
                        <Button type="text" danger>
                            Expand
                        </Button>
                    </Col>
                </Row>

            </Content>

        </div>
    );

};

export default Transaction;