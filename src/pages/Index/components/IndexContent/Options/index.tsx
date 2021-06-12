import React from "react";
import {connect} from "react-redux";
import {InputNumber, Select, Input} from "antd";
import {changeOptionNumber, changeOptionPassword, changeOptionSelect} from "../../../actions";
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import './style.css'

const {Option} = Select

class PreOptions extends React.Component<any, any> {
    private options = [
        {
            name: 'times',
            value: 'times'
        }, {
            name: 'minute(s)',
            value: 'minute'
        }, {
            name: 'hour(s)',
            value: 'hour'
        }, {
            name: 'day(s)',
            value: 'day'
        }, {
            name: 'forever',
            value: 'forever'
        }
    ]

    // private inputNumberDisabled = () => {
    //     if (this.props.optionSelect === '' || this.props.optionSelect === 'forever')
    //         return true
    //     for (const item of this.Options)
    //         if (item.value === this.props.optionSelect)
    //             return false;
    //     return true;
    // }

    // private show = () => {
    //     console.log(this.props)
    // }

    render() {
        return (
            <div className="index-options">
                <InputNumber className="option-number"
                             min={1}
                             defaultValue={this.props.optionNumber}
                             disabled={this.props.optionSelect === '' || this.props.optionSelect === 'forever'}
                             value={this.props.optionNumber}
                             onChange={this.props.changeOptionNumber}/>
                <Select className="option-select"
                        placeholder="保存期限"
                        style={{width: 100}}
                        onChange={this.props.changeOptionSelect}>
                    {this.options.map(item =>
                        <Option key={item.value} value={item.value}>{item.name}</Option>
                    )}
                </Select>
                <Input.Password className="option-password"
                                value={this.props.optionPassword} onChange={this.props.changeOptionPassword}
                                placeholder="密码(可选)"
                                iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        optionNumber: state.edit.optionNumber,
        optionSelect: state.edit.optionSelect,
        optionPassword: state.edit.optionPassword
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeOptionNumber: (optionNumber: any) => {
            dispatch(changeOptionNumber(optionNumber))
        },
        changeOptionSelect: (optionSelect: any) => {
            dispatch(changeOptionSelect(optionSelect))
        },
        changeOptionPassword: (event: any) => {
            dispatch(changeOptionPassword(event.target.value))
        }
    }
}

const Options = connect(mapStateToProps, mapDispatchToProps)(PreOptions);

export default Options;