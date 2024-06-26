import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useEffect, useState } from 'react';
import { Avatar, Space } from 'antd';
import { Layout, Flex } from 'antd';
import { Descriptions } from 'antd';
import NavigationBar from './NavigationBar';

const { Header, Footer, Sider, Content } = Layout;


const Profile = () => {
    const [profile, setProfile] = useState({});//nedir bu


    let items = [

        {

            label: 'Username',
            children: "emrekocadere34",
            span: 3
        },

        {

            label: 'Telephone',
            children: "05523119091",
            span: 3
        },
        {

            label: 'Email',
            children: "emrekocere@gmail.com",

        },
    ];

    return (
        <div style={{display:"flex"}}>
            
            <NavigationBar></NavigationBar>
            <div style={{ display: "flex", width: "40vw", justifyContent: "space-around",marginLeft:"8vw",marginTop:"10vh" }}>
                <Avatar size={128} icon={<UserOutlined />} />
                <Descriptions colon="false" items={items} style={{ width: "20vw" }} />
            </div>
        </div>





    );
}
export default Profile;