import React from "react";
import NavigationBar from "./NavigationBar";

const Layout = ({ children }) => {
    return (
        <div>
            <NavigationBar />
            <div style={{ marginTop: "2rem" }}>{children}</div>
        </div>
    );
};

export default Layout;
