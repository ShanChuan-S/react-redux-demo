import { CHANGE_INPUT, ADD_DATA, COMPLETE_CHANGE_ITEM, DELETE_ITEM, SHOW_EDIT, ITEM_CHANGE } from './action-types';

const default_state = {
    inputValue: '123',
    list: [
        {value: '123'},
        {value: '456'},
        {value: '789'}
    ]
}

export default (state = default_state, action) => {
    let new_state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        // 修改最大的输入框
        case CHANGE_INPUT:
            new_state.inputValue = action.value;
            return new_state;
        // 添加数据
        case ADD_DATA:
            if(!state.inputValue) return state;
            new_state.list.push({"value": state.inputValue});
            new_state.inputValue = '';
            return new_state;
        // 一条数据编辑完成
        case COMPLETE_CHANGE_ITEM:
            new_state.list[action.index].isEdit = false;
            new_state.list[action.index].value = state.list[action.index].tempValue || state.list[action.index].value;
            return new_state;
        // 一条数据删除
        case DELETE_ITEM:
            new_state.list.splice(action.index, 1);
            return new_state;
        // 一条数据显示为可编辑状态
        case SHOW_EDIT:
            new_state.list[action.index].isEdit = true;
            new_state.list[action.index].tempValue = state.list[action.index].value;
            return new_state;
        // 一条数据的编辑
        case ITEM_CHANGE:
            new_state.list[action.index].tempValue = action.value;
            return new_state;
        default:
            return state;
    }
}