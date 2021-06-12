import React from "react";
import logo from '../../../../assets/logo.gif'
import './style.css'

class IndexHeader extends React.Component {
    render() {
        return (
            <>
                <a className="site-info" href="/">
                    <img className="site-logo" src={logo} alt="logo"/>
                    <span className="site-title">Rontgen</span>
                    <span>测试版v0.2.1</span>
                </a>
            </>
        )
    }
}

export default IndexHeader;