import React from 'react';
import { Layout, Menu } from 'antd';
import ProTable from '@ant-design/pro-table';
const { Sider, Content } = Layout;

const InformationPage = () => {
    const dataSource = [
        { key: '1', name: 'John Doe', age: 32, address: 'New York No. 1 Lake Park' }
    ];

    const columns = [
        // columns for the table
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Address', dataIndex: 'address', key: 'address' }
    ];

    return (
        <Layout>
            <Sider width={200}>
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    {/* add more menu items as needed */}
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
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
