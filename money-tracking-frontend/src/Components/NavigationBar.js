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
    getItem("/Dashboard", "genel"),
    getItem("income", "girdiler"),
    getItem("expenses", "çıktılar"),
    getItem("Last Month", "1ay"),
    getItem("Profile", "profil"),
    getItem("Settings", "ayarlar"),
    getItem( "Exit","çıkış"),
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