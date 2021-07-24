import React from "react"
import Header from "./components/Header";
import Layout from "./components/Layout";
import AboutMe from "./components/pages/AboutMe";
import Resume from "./components/pages/Resume";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export default function MyApp() {

    return (
        <Router>
            <Header />
            <Layout>
                <Switch>
                    <Route exact path="/" component={AboutMe}></Route>
                    <Route exact path="/about-me" component={AboutMe}></Route>
                    <Route exact path="/resume" component={Resume}></Route>
                </Switch>
            </Layout>
        </Router>

    )
}