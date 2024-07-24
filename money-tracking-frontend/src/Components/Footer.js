import React from 'react';
import { Flex, Layout } from 'antd';
import { Space, Typography } from 'antd';
import {
    GithubOutlined,
    LinkedinFilled,
    MediumOutlined
} from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const { Text, Link } = Typography;

const CustomFooter = () => {

    return (
        <Footer>
            <div>Developed By Salih Emre Kocadere</div>
            <Link href="https://github.com/emrekocadere?tab=overview&from=2024-07-01&to=2024-07-24" target="_blank" style={{ fontSize: "3vh", marginRight: "1.5vw" }}><GithubOutlined /></Link>
            <Link href="https://google.com" target="_blank" style={{ fontSize: "3vh", marginRight: "1.5vw" }}><LinkedinFilled /></Link>
            <Link href="https://medium.com/@salihemrekocadere" target="_blank" style={{ fontSize: "3vh" }}><MediumOutlined /></Link>
        </Footer>

    );
};
export default CustomFooter;