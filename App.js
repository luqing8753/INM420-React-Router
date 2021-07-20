import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './css/App.css';

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/Projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */
                }
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>

                    <Route path="/Projects">
                        <Projects/>
                    </Route>

                    <Route path="/Contact">
                        <Contact/>
                    </Route>

                    <Route path="/">
                        <Home/>
                    </Route>

                </Switch>
            </div>
        </Router>

    );
}
