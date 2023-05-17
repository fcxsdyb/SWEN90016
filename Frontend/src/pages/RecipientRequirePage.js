import React, { useState, useEffect } from 'react';
import { Layout, ConfigProvider, Button, Input, Form, Modal } from 'antd';
import ProTable from '@ant-design/pro-table';
import en_US from 'antd/lib/locale/en_US';
import DIYMenu from '../components/DIYMenu';

const { Sider, Content } = Layout;

const RecipientRequirePage = () => {
    const [dataSource, setDataSource] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/recipients/requisitions')
            .then(response => response.json())
            .then(data => setDataSource(data));
    }, []);

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Recipient ID', dataIndex: 'recipientId', key: 'recipientId' },
        { title: 'Item ID', dataIndex: 'itemId', key: 'itemId' },
        { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
        { title: 'Notes', dataIndex: 'notes', key: 'notes' },
    ];

    const onFinish = (values) => {
        fetch('http://localhost:8080/recipients/requisitions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(response => response.json())
        .then(data => {
            setDataSource([...dataSource, data]);
            setVisible(false);
        });
    };

    return (
        <ConfigProvider locale={en_US}>
            <Layout>
                <Sider width={200} style={{ height: "100vh", overflow: "auto" }}>
                    <DIYMenu />
                </Sider>

                <Layout>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Modal
                            title="Add Recipient Requisitions"
                            open={visible}
                            onCancel={() => setVisible(false)}
                            footer={null}
                        >
                            <Form onFinish={onFinish}>
                                <Form.Item name="recipientId" label="Recipient ID">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="itemId" label="Item ID">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="quantity" label="Quantity">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="notes" label="Notes">
                                    <Input />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">OK</Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                        <ProTable 
                            dataSource={dataSource} 
                            columns={columns} 
                            rowKey="id" 
                            search={{ labelWidth: 150 }}
                            toolBarRender={() => [
                                <Button type="primary" onClick={() => setVisible(true)}>Add</Button>
                            ]}
                        />
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
}

export default RecipientRequirePage;
