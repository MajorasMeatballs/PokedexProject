import React from "react";
import Layout from "../components/Layout";
import NavigationBar from "../components/NavigationBar";

const About = () => {
    return (
        <Layout>
            <NavigationBar />
            <div>
                <h1>About Page</h1>
                <p>
                    This is the about page simply to show I can make a
                    navigation bar
                </p>
            </div>
        </Layout>
    );
};

export default About;
