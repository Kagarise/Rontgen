import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';

import rontgen from "./reducers";
import {createStore} from "redux";
import {Provider} from 'react-redux';

import router from "./routers/router";

const store = createStore(rontgen)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            {router}
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);