import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from './components/left-navbar';
import Category from './pages/category';
import Camera from './pages/camera';
import Photos from './pages/photos';
import Setting from './pages/setting'
import './App.css';


function App() {
    return (
        <div className="container">
            <Router>
            <div className="row">
                <div className="sidebar col-4 ">
                    <Navbar/>
                </div>
                <div className="col-8 right-bar">
                        <Route path="/" exact component={Category} />
                        <Route path="/camera/" component={Camera} />
                        <Route path="/photos/" component={Photos} />
                        <Route path="/setting/" component={Setting} />

                </div>
            </div>
            </Router>
        </div>
    );
}

export default App;
