import React, { useState, useEffect } from 'react';
import { Layout, ConfigProvider, Button, Input, Form, Modal } from 'antd';
import ProTable from '@ant-design/pro-table';
import en_US from 'antd/lib/locale/en_US';
import DIYMenu from '../components/DIYMenu';

const { Sider, Content } = Layout;

const AidKitPage = () => {
    const [dataSource, setDataSource] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/aid/kit')
            .then(response => response.json())
            .then(data => setDataSource(data));
    }, []);

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Kit Name', dataIndex: 'name', key: 'name' },
        { title: 'Kit Items', dataIndex: 'item', key: 'item' }
    ];

    const onFinish = (values) => {
        fetch('http://localhost:8080/aid/kit', {
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
                            title="Add Kit"
                            open={visible}
                            onCancel={() => setVisible(false)}
                            footer={null}
                        >
                            <Form onFinish={onFinish}>
                                <Form.Item name="name" label="Kit Name">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="item" label="Kit Items">
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

export default AidKitPage;
