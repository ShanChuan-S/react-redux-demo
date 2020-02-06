import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import TodoInput from './component/input';
import TodoContent from './component/content';

import 'antd/dist/antd.css';

class App extends Component {
    render() { 
        return (
            // <div>
                <Provider store={store}>
                    <TodoInput />
                    <TodoContent />
                </Provider>
            // </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)