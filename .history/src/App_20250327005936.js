// App.js
import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificate/Certificates";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact"; // Import Contact component
import Resume from "./components/Resume/ResumeNew";
import ProjectDetail from "./components/Projects/ProjectDetail";
import Preloader from "../src/components/Pre";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    // Updated projects array with tools
    const projects = [

    ];

    return ( <
        Router >
        <
        Preloader load = { load }
        /> <
        div className = "App"
        id = { load ? "no-scroll" : "scroll" } >
        <
        Navbar / >
        <
        ScrollToTop / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/project"
        element = { < Projects / > }
        /> <
        Route path = "/project/:projectId"
        element = { < ProjectDetail projects = { projects }
            />} /
            >
            <
            Route path = "/about"
            element = { < About / > }
            /> <
            Route path = "/resume"
            element = { < Resume / > }
            /> <
            Route path = "/certificates"
            element = { < Certificates / > }
            /> <
            Route path = "/contact"
            element = { < Contact / > }
            />{" "} { /* Add Contact Route */ } <
            Route path = "*"
            element = { < Navigate to = "/" / > }
            /> <
            /Routes> <
            Footer / >
            <
            /div> <
            /Router>
        );
    }

    export default App;