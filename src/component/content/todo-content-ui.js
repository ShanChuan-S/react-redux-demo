import React from 'react';
import { List, Input, Button } from 'antd';

const TodoContent = (props) => {
    return (
        <div className="content-list-container">
            <List
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item>
                        <div className="list-input-container">
                            {
                                item.isEdit ?
                                <Input 
                                    value={item.tempValue}
                                    onChange={(e) => props.itemInputChange(index, e.target.value)}
                                    onPressEnter={() => props.completeChange(index)}
                                />
                                :
                                item.value
                            }
                        </div>
                        {
                            item.isEdit ?
                            <Button
                                type="primary"
                                className="change-item-btn"
                                onClick={() => props.completeChange(index)}
                            >
                                完成
                            </Button>
                            :
                            <Button
                                type="primary"
                                className="change-item-btn"
                                onClick={() => props.showEditInput(index)}
                            >
                                编辑
                            </Button>
                        }
                        
                        <Button
                            type="danger"
                            onClick={() => props.deleteData(index)}
                        >
                            删除
                        </Button>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default TodoContent;