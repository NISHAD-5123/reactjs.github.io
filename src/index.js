import React from 'react';
import ReactDom from 'react-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App'
import {BrowserRouter} from 'react-router-dom';
ReactDom.render(
<>
<BrowserRouter>
<App />
</BrowserRouter>
</>
,document.getElementById('root'));