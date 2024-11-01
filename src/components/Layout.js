import React from "react";

const Layout = ({ children, className }) => {
    return <div className={`w-full h-full p-32 inline-block z-0 bg-light ${className}`}>{children}</div>;
};

export default Layout;
