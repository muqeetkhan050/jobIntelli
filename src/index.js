import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Applied from './components/Applied';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Interview from './components/Interview';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FinalStatus from './components/FinalStatus';
import NotFound from './components/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>    
    <Route path='/' element={<App />}/>
    <Route path='/Applied' element={<Applied/>}/>
    <Route path='/Interview' element={<Interview/>}/>
    <Route path='/FinalStatus' element={<FinalStatus/>}/>
    <Route path='*' element={<NotFound />} />


    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
