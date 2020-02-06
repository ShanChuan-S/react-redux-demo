import { CHANGE_INPUT, ADD_DATA, COMPLETE_CHANGE_ITEM, DELETE_ITEM, SHOW_EDIT, ITEM_CHANGE } from './action-types';

export const changeInput = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addData = () => ({
    type: ADD_DATA
})

export const completeChangeItem = (index) => ({
    type: COMPLETE_CHANGE_ITEM,
    index
})

export const deleteItem = (index) => ({
    type: DELETE_ITEM,
    index
})

export const showEdit = (index) => ({
    type: SHOW_EDIT,
    index
})

export const itemChange = (index, value) => ({
    type: ITEM_CHANGE,
    index,
    value
})