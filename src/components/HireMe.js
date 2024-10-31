import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
    return (
        <div className="fixed right-4 bottom-4 flex items-center justify-center overflow-hidden">
            <div className="w-52 h-auto flex items-center justify-center relative">
                <CircularText className={"fill-dark animate-spin-slow"} />
                <Link
                    href="mailto:rafaynadeem77@gmail.com"
                    className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light w-24 h-24 rounded-full font-semibold text-lg shadow-md border-2 border-dark border-solid hover:bg-light hover:text-dark"
                >
                    Hire me
                </Link>
            </div>
        </div>
    );
};

export default HireMe;
