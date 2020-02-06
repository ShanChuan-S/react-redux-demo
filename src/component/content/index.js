import { connect } from 'react-redux';

import { completeChangeItem, deleteItem, showEdit, itemChange } from '../../store/action-creators'

import './index.scss';

import TodoContent from './todo-content-ui';

const stateToProps = (state) => {
    // state的值是redux中的值，这个方法的作用就是使用connect将其内容映射到props中
    return {
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        // 删除一条数据
        deleteData(index) {
            let action = deleteItem(index);
            dispatch(action);
        },
        // 一条数据显示为编辑状态
        showEditInput(index) {
            let action = showEdit(index);
            dispatch(action);
        },
        // 一条数据的输入框修改
        itemInputChange(index, value) {
            let action = itemChange(index, value);
            dispatch(action);
        },
        // 修改完成
        completeChange(index) {
            let action = completeChangeItem(index);
            dispatch(action);
        }
    }
}
 
export default connect(stateToProps, dispatchToProps)(TodoContent);