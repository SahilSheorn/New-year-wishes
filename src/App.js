import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FriendList from './components/FriendList';
import Home from './components/Home';

import Greeting from './Section/Greeting';



function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/git' element={<Greeting />} />
                </Routes>
            </Router>

        </>
    );
}

export default App;