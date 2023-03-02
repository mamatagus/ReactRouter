import React from 'react'
import { Layout, Space } from 'antd'
import TopNavigation from '../navigations/TopNavigation'

const {Header, Footer, Sider, Content} = Layout;

const headerStyle = {
    textAlign: 'center',
    color: 'green',
    height: 68,
    paddingInline: 50,    
    lineHeight: '64px',
    backgroundColor: '#14213d',
};

const contentStyle = {
    textAlign: 'start',
    color: '#fff',
    height: 68,
    paddingInline: 20,
    lineHeight: '120px',
    backgroundColor: '#14213d',
};
const footerStyle = {
    textAlign: 'center',
    color: 'green',
    backgroundColor: '#14213d',
};

const AppLayout = ({children}) => (
    <Layout style={{minHeight: '100vh'}}>
        <Header style={headerStyle}><TopNavigation /></Header>
        <Content style={contentStyle}>{children}</Content>
        <Footer style={footerStyle}>Footer</Footer>
    </Layout>
);

export default AppLayout