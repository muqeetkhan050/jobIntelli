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
import { JobProvider } from './context/JobContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <JobProvider>
  
  
    <Routes>    
    <Route path='/' element={<App />}/>
    <Route path='/Applied' element={<Applied/>}/>
    <Route path='/Interview' element={<Interview/>}/>
    <Route path='/FinalStatus' element={<FinalStatus/>}/>
    <Route path='*' element={<NotFound />} />


    </Routes>
      </JobProvider>
  </Router>
);

reportWebVitals();
