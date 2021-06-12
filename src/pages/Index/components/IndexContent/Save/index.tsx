import React from "react";
import {connect} from "react-redux";
import {Popover, Button, Image, message} from 'antd';
import {
    SaveOutlined,
} from '@ant-design/icons';
import './style.css'

import rontgen from '../../../../../api/rontgen'
import qr from '../../../../../api/qr'

class Share extends React.Component<any, any> {
    render() {
        return (
            <div className="save-share">
                <Image className="share-img"
                       src={this.props.qr}/>
                <a className="share-a"
                   target="_blank" rel="noopener noreferrer" href={this.props.url}>{this.props.url}</a>
            </div>
        );
    }
}

class PreSave extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            optionNumber: 1,
            optionSelect: '',
            optionPassword: '',
            editText: '',
            visible: false,
            url: '',
            qr: '',
        }
    }

    btnClick = (e: any) => {
        /**
         * 直接关闭
         */
        if (this.state.visible) {
            this.setState({
                visible: !this.state.visible
            })
            return;
        }
        if (!this.props.optionSelect) {
            message.info('请选择保存期限');
            return;
        }
        if (!this.props.editText) {
            message.info('请输入文本');
            return;
        }
        /**
         * 无新数据，不请求api
         */
        if (this.props.optionNumber === this.state.optionNumber &&
            this.props.optionSelect === this.state.optionSelect &&
            this.props.optionPassword === this.state.optionPassword &&
            this.props.editText === this.state.editText) {
            this.setState({
                visible: !this.state.visible
            })
        }
        /**
         * 获取url和qr
         */
        else {
            rontgen.get_code({
                'tex': this.props.editText,
                'num': this.props.optionNumber,
                'typ': this.props.optionSelect,
                'pwd': this.props.optionPassword
            }).then((rontgen_res) => {
                if (rontgen_res.status === 200 && rontgen_res.data.code === 200) {
                    const url = `${window.location.href}show/${rontgen_res.data.data.url}`
                    qr.get_qr({
                        'tex': url
                    }).then((qr_res) => {
                        if (qr_res.status === 200 && qr_res.data.code === 200) {
                            const qr = qr_res.data.data.url;
                            this.setState({
                                optionNumber: this.props.optionNumber,
                                optionSelect: this.props.optionSelect,
                                optionPassword: this.props.optionPassword,
                                editText: this.props.editText,
                                url: url,
                                qr: qr,
                                visible: !this.state.visible
                            })
                        } else {
                            message.error('qr请求错误')
                        }
                    })
                } else {
                    message.error('url请求错误');
                }
            })
        }
    }

    render() {
        return (
            <div className="index-save">
                <Popover content={<Share url={this.state.url} qr={this.state.qr}/>}
                         trigger="click"
                         visible={this.state.visible}>
                    <Button className="save-btn"
                            shape="round"
                            icon={<SaveOutlined/>}
                            size="large"
                            onClick={this.btnClick}/>
                </Popover>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        optionNumber: state.edit.optionNumber,
        optionSelect: state.edit.optionSelect,
        optionPassword: state.edit.optionPassword,
        editText: state.edit.editText
    }
}
const Save = connect(mapStateToProps)(PreSave);

export default Save;