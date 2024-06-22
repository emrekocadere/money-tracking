import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Button, ConfigProvider, Space } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem(<Link to="/Dashboard">Dashboard</Link>, "genel"),
    getItem(<Link to="/Profile">last 1 month</Link>, "1ay"),
    getItem(<Link to="/Profile">Profil</Link>, "profil"),
    getItem(<Link to="/Profile">Settings</Link>, "ayarlar"),
    getItem(<Link to="/Profile">Exit</Link>, "çıkış"),
];
const NavigationBar = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemHoverBg:"#278664",
                        itemHoverColor:"white",
                        itemSelectedColor:"white",
                        itemSelectedBg:"#278664"
                    },
                },
            }}
        >
            <Menu
                onClick={onClick}
                style={{
                    width: 250,
                    height: "100vh"
                }}
                SelectedKeys={['çıktılar']}
                mode="vertical"
                items={items}
            />
        </ConfigProvider>

    );
};
export default NavigationBar;