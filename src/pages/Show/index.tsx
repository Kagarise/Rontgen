import React from "react";
import {Input, message, Modal} from "antd";
import {ExclamationCircleOutlined} from '@ant-design/icons';
import rontgen from '../../api/rontgen'

class Show extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            msg: '',
            pwd: '',
            password: '',
        }
        this.inputPassword = this.inputPassword.bind(this)
    }

    inputPassword(msg: string) {
        const _this = this
        let content = (<Input.Password placeholder="请输入密码" style={{width: 200}}
                                       onChange={(e) => {
                                           this.setState({password: e.target.value})
                                       }}/>)
        Modal.info({
            keyboard: false,
            title: '这条信息设有密码',
            icon: <ExclamationCircleOutlined/>,
            content: content,
            onOk() {
                if (_this.state.password === _this.state.pwd) {
                    _this.setState({
                        msg: msg
                    })
                } else {
                    message.error('密码错误')
                    _this.inputPassword(msg)
                }
            },
        });
    }

    componentDidMount() {
        const id = this.props.match.params.id
        console.log('id', id)
        rontgen.get_data({
            'id': id
        }).then((res) => {
            let msg = '';
            let pwd = '';
            if (res.status === 200 && res.data.code === 200) {
                console.log(res.data.data)
                msg = res.data.data.tex
                pwd = res.data.data.pwd
            } else {
                msg = '该条信息已无法访问，或许已达到了访问限制次数，亦或是超出了期限，也可能是网络服务出现了波动。但这些又如何呢，过去的就让它过去吧！'
            }
            if (pwd !== '') {
                this.setState({
                    pwd: pwd
                })
                this.inputPassword(msg)
            } else {
                this.setState({
                    msg: msg
                })
            }
        })
    }

    render() {
        return <div className="scrollbar">{this.state.msg}</div>;
    }
}

export default Show;