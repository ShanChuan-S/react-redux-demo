import React from 'react';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';

import { changeInput, addData } from '../../store/action-creators';

import './index.scss'

const TodoInput = (props) => {
    const { input_value, inputChange, addData } = props;
    return (
        <div className="input-container">
            <Input
                className="data-input"
                placeholder="ceshi"
                value={input_value}
                allowClear
                onChange={inputChange}
                onPressEnter={addData}
            />
            <Button
                className="add-btn"
                type="primary"
                onClick={addData}
            >
                添加
            </Button>
        </div>
    );
}

const stateToProps = (state) => {
    return {
        input_value: state.inputValue
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = changeInput(e.target.value);
            dispatch(action);
        },
        addData() {
            let action = addData();
            dispatch(action);
        }
    }
}
 
export default connect(stateToProps, dispatchToProps)(TodoInput);