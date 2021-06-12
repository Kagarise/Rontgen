import React from "react";
import {Layout} from 'antd';
import IndexHeader from "./components/IndexHeader";
import IndexContent from "./components/IndexContent";
import IndexFooter from "./components/IndexFooter";
import ParticlesBg from 'particles-bg'
import './style.css'

const {Header, Content, Footer} = Layout

class Index extends React.Component {
    render() {
        return (
            <Layout className="index-layout scrollbar">
                <Header className="index-header frosted-glass">
                    <IndexHeader/>
                </Header>
                <Content className="index-content scrollbar">
                    <IndexContent/>
                </Content>
                <Footer className="index-footer frosted-glass">
                    <IndexFooter/>
                </Footer>
                <ParticlesBg type="polygon" num={3} bg={true}/>
            </Layout>
        )
    }
}

export default Index;