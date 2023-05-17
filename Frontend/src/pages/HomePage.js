import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import en_US from 'antd/lib/locale/en_US';
import DIYMenu from '../components/DIYMenu';

const { Sider, Content } = Layout;

const HomePage = () => {
    return (
        <ConfigProvider locale={en_US}>
            <Layout>
                <Sider width={200} style={{ height: "100vh", overflow: "auto" }}>
                    <DIYMenu />
                </Sider>

                <Layout>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
}

export default HomePage;
