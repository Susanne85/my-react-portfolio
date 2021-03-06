import React from "react"
import Header from "./components/Header";
import Layout from "./components/Layout";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Footer from "./components/pages/Footer";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
export default function MyApp() {

    return (
        <Router>
            <Header />
            <Layout>
                <Switch>
                    <Route exact path="/" component={AboutMe}></Route>
                    <Route exact path="/about-me" component={AboutMe}></Route>
                    <Route exact path="/portfolio" component={Portfolio}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/resume" component={Resume}></Route>
                    <Redirect to="/"/>
                </Switch>
            </Layout>
            <Footer />
        </Router>
    )
}