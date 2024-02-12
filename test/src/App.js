import React from 'react';
import LoginForm from './Components/LoginForm/LoginForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignupForm from './Components/SignupForm/SignupForm';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />}></Route> 
        {/*<Route path='/' element={<SignupForm />}></Route>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
