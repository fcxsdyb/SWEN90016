import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Typography, Form, Input, Button, Checkbox } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const LoginPage = () => {
    const navigate = useNavigate(); // <-- updated line

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        if (values.username === 'admin' && values.password === 'admin') {
            navigate('/information');
        }
    };

    return (
        <Layout>
            <Header style={{ marginTop: '10px', backgroundColor: '#1DA57A', textAlign: 'center' }}>
            </Header>

            <Content style={{ paddingTop: '125px', paddingBottom: '150px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Title level={2} style={{ paddingBottom: '80px', textAlign: 'center' }}>VR1Family Charity Aid System</Title>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    style={{ width: '300px' }}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '50%' }}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Content>

            <Footer style={{ backgroundColor: '#1DA57A', textAlign: 'center', color: '#fff' }}>
                SWEN90016 Assignment 2 ©2023 Created by Tutorial 1 Group 4
            </Footer>
        </Layout>
    );
}

export default LoginPage;
