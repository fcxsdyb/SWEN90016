import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import { List, Typography } from 'antd';
import en_US from 'antd/lib/locale/en_US';
import DIYMenu from '../components/DIYMenu';

const { Text, Title, Paragraph } = Typography;
const { Sider, Content } = Layout;

const AboutUsPage = () => {
    const charities = [
        { name: "Red Cross", twitter: "https://twitter.com/RedCross" },
        { name: "UNICEF", twitter: "https://twitter.com/UNICEF" },
        { name: "Doctors Without Borders", twitter: "https://twitter.com/MSF_USA" },
        { name: "World Wildlife Fund", twitter: "https://twitter.com/WWF" },
        { name: "Oxfam International", twitter: "https://twitter.com/Oxfam" },
        { name: "Save The Children", twitter: "https://twitter.com/save_children" },
        { name: "The Salvation Army", twitter: "https://twitter.com/SalvationArmyUS" }
    ];

    return (
        <ConfigProvider locale={en_US}>
            <Layout>
                <Sider width={200} style={{ height: "100vh", overflow: "auto" }}>
                    <DIYMenu />
                </Sider>

                <Layout>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Title>About Us</Title>
                        <Paragraph>
                            VR1Family Charity Aid Services started in 2019 as a small non-profit organization in Mallacoota, Australia. Initially, it was a group of five volunteers who aimed to provide immediate humanitarian assistance to improve the lives of those facing economic, social, and health challenges due to natural calamities. Their first project was to help those affected by the Australian Bushfires of 2019 – 2020. Their efforts were recognized locally and internationally, and soon, they started receiving interest and support from individuals, corporations, and governments. Today, VR1Family has expanded globally, having a presence in over 100 countries, served by a team of 15,000 volunteers. They provide various types of aid, including standard survival kits, wool, baby food, soap, textiles, toys, plow and farm tools, medical supplies, and resettlement kits for refugees.
                        </Paragraph>

                        <List
                            itemLayout="horizontal"
                            dataSource={charities}
                            renderItem={charity => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<a href={charity.twitter} target="_blank" rel="noopener noreferrer">{charity.name}</a>}
                                        description={<Text>Follow {charity.name} on Twitter for updates on their charity work.</Text>}
                                    />
                                </List.Item>
                            )}
                        />
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default AboutUsPage;
