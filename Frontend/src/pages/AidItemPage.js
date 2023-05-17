import React, { useState, useEffect } from 'react';
import { Layout, ConfigProvider } from 'antd';
import ProTable from '@ant-design/pro-table';
import en_US from 'antd/lib/locale/en_US';
import DIYMenu from '../components/DIYMenu';

const { Sider, Content } = Layout;

const AidItemPage = () => {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/aid/item')
            .then(response => response.json())
            .then(data => setDataSource(data));
    }, []);

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Category ID', dataIndex: 'categoryId', key: 'categoryId' },
        { title: 'Kit ID', dataIndex: 'kitId', key: 'kitId' },
        { title: 'Expiry Date', dataIndex: 'expiryDate', key: 'expiryDate' },
        { title: 'Main Ingredients', dataIndex: 'mainIngredients', key: 'mainIngredients' },
        { title: 'Allergen Information', dataIndex: 'allergenInfo', key: 'allergenInfo' },
        { title: 'Size', dataIndex: 'size', key: 'size' },
        { title: 'Brand', dataIndex: 'brand', key: 'brand' },
        { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' }
    ];

    return (
        <ConfigProvider locale={en_US}>
            <Layout>
                <Sider width={200} style={{ height: "100vh", overflow: "auto" }}>
                    <DIYMenu />
                </Sider>

                <Layout>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <ProTable dataSource={dataSource} columns={columns} rowKey="id" search={{ labelWidth: 150 }} />
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
}

export default AidItemPage;
