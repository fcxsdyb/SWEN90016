import React from 'react';
import { Layout, Menu } from 'antd';
import ProTable from '@ant-design/pro-table';
import { useNavigate } from 'react-router-dom';
const { Sider, Content } = Layout;

const InformationPage = () => {
    const navigate = useNavigate(); // <-- updated line

    const dataSource = [
        { key: '1', name: 'John Doe', age: 32, address: 'New York No. 1 Lake Park' }
    ];

    const columns = [
        // columns for the table
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Address', dataIndex: 'address', key: 'address' }
    ];

    const navigateTo = (key) => {
        navigate(`/${key}`);
    }

    return (
        <Layout>
            <Sider width={200}>
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={() => navigateTo('option1')}>Option 1</Menu.Item>
                    <Menu.Item key="2" onClick={() => navigateTo('option2')}>Option 2</Menu.Item>
                    <Menu.Item key="3" onClick={() => navigateTo('option3')}>Option 3</Menu.Item>
                    <Menu.Item key="4" onClick={() => navigateTo('option4')}>Option 4</Menu.Item>
                    <Menu.Item key="5" onClick={() => navigateTo('option5')}>Option 5</Menu.Item>
                    <Menu.Item key="6" onClick={() => navigateTo('option6')}>Option 6</Menu.Item>
                    <Menu.Item key="7" onClick={() => navigateTo('option7')}>Option 7</Menu.Item>
                    <Menu.Item key="8" onClick={() => navigateTo('option8')}>Option 8</Menu.Item>
                </Menu>
            </Sider>

            <Layout>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <ProTable dataSource={dataSource} columns={columns} rowKey="key" />
                </Content>
            </Layout>
        </Layout>
    );
}

export default InformationPage;
