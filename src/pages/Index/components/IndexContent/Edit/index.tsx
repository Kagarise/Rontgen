import React from "react";
import {connect} from "react-redux";
import {Input} from 'antd'
import {changeEditText} from "../../../actions";
import './style.css'

const {TextArea} = Input

class PreEdit extends React.Component<any, any> {
    render() {
        return (
            <TextArea className="index-edit scrollbar"
                      placeholder="请输入文本"
                      value={this.props.editText}
                      onChange={this.props.changeEditText}/>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        editText: state.edit.editText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeEditText: (event: any) => {
            dispatch(changeEditText(event.target.value))
        }
    }
}

const Edit = connect(mapStateToProps, mapDispatchToProps)(PreEdit)

export default Edit;