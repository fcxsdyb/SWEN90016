import React, { useState, useEffect } from 'react';
import { Layout, ConfigProvider } from 'antd';
import ProTable from '@ant-design/pro-table';
import en_US from 'antd/lib/locale/en_US';
import DIYMenu from '../components/DIYMenu';

const { Sider, Content } = Layout;

const RecipientDocPage = () => {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/recipients/documents')
            .then(response => response.json())
            .then(data => setDataSource(data));
    }, []);

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Recipient ID', dataIndex: 'recipientId', key: 'recipientId' },
        { title: 'Nationality', dataIndex: 'nationality', key: 'nationality' },
        { title: 'Document Number', dataIndex: 'documentNumber', key: 'documentNumber' },
        { title: 'Document Expiry Date', dataIndex: 'documentExpiryDate', key: 'documentExpiryDate' },
        { title: 'Document Image', dataIndex: 'documentImage', key: 'documentImage' }
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

export default RecipientDocPage;
