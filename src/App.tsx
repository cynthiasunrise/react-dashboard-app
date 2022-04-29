import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Expenses from './pages/Expenses/Expenses';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        {/* <Routes> */}
        <Route path="/expenses">
          <Expenses />
        </Route>
        {/* </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
