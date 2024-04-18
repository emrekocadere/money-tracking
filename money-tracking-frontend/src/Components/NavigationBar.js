import React from 'react';
import { Menu } from 'antd';
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
    getItem(<Link to="/income">Incomes</Link>, "girdiler"),
    getItem(<Link to="/expenses">Expenses</Link>, "çıktılar"),
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
        <Menu
            onClick={onClick}
            style={{
                width: 250,
                height:500
            }}
            SelectedKeys={['çıktılar']}
            mode="inline"
            items={items}
        />
    );
};
export default NavigationBar;