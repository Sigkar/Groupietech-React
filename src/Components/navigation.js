import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from '../Pages/home.js';

export const Navigation = () => (
    <Router>
        <Route path="/" exact component={Home}  />
    </Router>
)