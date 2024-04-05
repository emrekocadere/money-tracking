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
            children: "emrekocadere34",
            span:3
        },

        {

            label: 'Telephone',
            children: "05523119091",
            span:3
        },
        {

            label: 'Email',
            children: "emrekocere@gmail.com",
           
        },
    ];

    return (
        <div style={{width:"15vw",background:"red"}}>
            <Descriptions colon="false" items={items} />
        </div>




    );
}
export default Profile;