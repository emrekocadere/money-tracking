import React from 'react';
import { Flex, Layout } from 'antd';
import { Space, Typography } from 'antd';
import {
    GithubOutlined,
    LinkedinFilled
} from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const { Text, Link } = Typography;

const CustomFooter = () => {

    return (
        <Footer>
            <div>Developed By Salih Emre Kocadere</div>
            <Link href="https://google.com" target="_blank" style={{ fontSize: "3vh", marginRight: "1.5vw" }}><GithubOutlined /></Link>
            <Link href="https://google.com" target="_blank" style={{ fontSize: "3vh" }}><LinkedinFilled /></Link>
        </Footer>

    );
};
export default CustomFooter;