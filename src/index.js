import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';


const WithRouter = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>


);

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
