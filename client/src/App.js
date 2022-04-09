import { React } from 'react'
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Auth from './pages/Auth/Auth';
import SignUp from './pages/Auth/SignUp';
import Edit from './pages/Edit/Edit';



function App() {

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
