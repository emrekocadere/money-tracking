import React from 'react';
import CustomNavigation from './NavigationBar';
import { Table } from 'antd';
import { Layout, Flex, Col, Row } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { Switch } from 'antd';



const onChange = (checked) => {
    console.log(`switch to ${checked}`);
};
const { Header, Footer, Sider, Content } = Layout;


const Settings = () => {
    const items = [
        {
            key: '1',
            label: "USD"
        },
        {
            key: '2',
            label: "EUR"
        },
        {
            key: '3',
            label: "YTL"
        },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <CustomNavigation />


            <div style={{ width: "85vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ background: "rgba(39, 134, 100, 1)", width: "50vw", height: "50vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <Dropdown
                  
                            menu={{
                                items,
                            }}
                            placement="bottomLeft"
                        >
                            <Button >bottomLeft</Button>
                        </Dropdown>

                        <Switch defaultChecked onChange={onChange} style={{marginBlock:"1.5vh"}}/>
                        <Button>Change Password</Button>
                        <Button style={{marginBlock:"1.5vh"}}>Delete Account</Button>
                    </div>


                </div>

            </div>




        </div>
    );

};

export default Settings;