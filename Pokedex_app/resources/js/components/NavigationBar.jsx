import React from "react";
import { Link } from "@inertiajs/inertia-react";

const NavigationBar = () => {
    return (
        <nav className="bg-gray-800 p-4 fixed w-full top-0">
            <ul className="flex">
                <li className="mr-4">
                    <Link href="/pokedex" className="text-white">
                        Pokedex
                    </Link>
                </li>
                <li className="mr-4">
                    <Link href="/" className="text-white">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="text-white">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default NavigationBar;
