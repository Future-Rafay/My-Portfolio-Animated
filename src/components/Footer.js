import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark">
            <Layout className="py-8 flex items-center justify-between font-medium">
                <span>{new Date().getFullYear()} <span className="text-lg">&copy;</span> All Rights Reserved.</span>
                <div className="flex items-center">Build With<span className="text-2xl px-1 text-primary">&#9825;</span>by&nbsp;<Link href='/' target="_blank" className="underline underline-offset-4">Future-Rafay</Link></div>
                <Link href='/' target="_blank" className="underline underline-offset-4">Say Hello</Link>
            </Layout>
        </footer>
    );
};

export default Footer;
