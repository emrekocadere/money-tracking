import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useEffect, useState } from 'react';
import { Avatar, Space } from 'antd';
import { Layout, Flex } from 'antd';
import { Descriptions } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


const Profile = () => {
    const [profile, setProfile] = useState({});//nedir bu
   

    let items = [

        {

            label: 'Username',
            children: profile.Username,
        },

        {

            label: 'Telephone',
            children: profile.PhoneNumber,
        },
        {

            label: 'Email',
            children: profile.email,
        },
    ];

    return (
        

            <div >
                <Content>
                    <Avatar size={128} icon={<UserOutlined />} style={{ marginBottom: "50px" }} />
                    <Descriptions items={items} />

                </Content>
            </div>
    


    );
}
export default Profile;