import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, LinkOutlined, SettingOutlined, MailOutlined } from '@ant-design/icons';
import SubMenu from 'antd/es/menu/SubMenu';

const DIYMenu = () => {    
    const navigate = useNavigate();
    const navigateTo = (key) => {
        navigate(`/${key}`);
    }

    return (
        <Menu mode="inline" defaultSelectedKeys={['1']} theme='dark'>
            <SubMenu key="sub1" title="Recipient" icon={<AppstoreOutlined />}>
                <Menu.Item key="1" onClick={() => navigateTo('recipient/information')}>Information</Menu.Item>
                <Menu.Item key="2" onClick={() => navigateTo('recipient/requisitions')}>Requisition</Menu.Item>
                <Menu.Item key="3" onClick={() => navigateTo('recipient/documents')}>Document</Menu.Item>
                <Menu.Item key="4" onClick={() => navigateTo('recipient/children')}>Chidlren</Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" title="Donor" icon={<LinkOutlined />}>
                <Menu.Item key="5" onClick={() => navigateTo('donor/information')}>Information</Menu.Item>
                <Menu.Item key="6" onClick={() => navigateTo('donor/donations')}>Donation</Menu.Item>
                <Menu.Item key="7" onClick={() => navigateTo('donor/documents')}>Document</Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" title="Aid" icon={<SettingOutlined />}>
                <Menu.Item key="8" onClick={() => navigateTo('aid/category')}>Category</Menu.Item>
                <Menu.Item key="9" onClick={() => navigateTo('aid/kits')}>Kit</Menu.Item>
                <Menu.Item key="10" onClick={() => navigateTo('aid/items')}>Item</Menu.Item>
            </SubMenu>

            <Menu.Item key="11" icon={<MailOutlined />} onClick={() => navigateTo('aboutus')}>About Us</Menu.Item>
        </Menu>
    );
}

export default DIYMenu;
