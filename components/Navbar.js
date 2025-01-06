'use client'
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#183D3D] fixed top-0 left-0 w-full z-10 pt-2">
            <div className="container mx-auto max-w-[1024px] flex justify-between items-center px-4">
                {/* Logo */}
                {/* <img
                    src="/img/icon.png"
                    alt="Logo"
                    className="h-16"
                /> */}
                <h1 className="text-2xl text-white py-5">
                    MyPerpus
                </h1>

                {/* Link Navigation */}
                <div className="flex gap-6">
                    <a href="#" className="text-white hover:text-gray-300">Home</a>
                    <a href="#" className="text-white hover:text-gray-300">Ranking</a>
                    <a href="#" className="text-white hover:text-gray-300">Favorite</a>
                    <a href="#" className="text-white hover:text-gray-300">About</a>
                </div>

                {/* Search Bar & Login */}
                <div className="flex items-center gap-4">
                    <form className="flex items-center" action="#" method="GET">
                        <input
                            type="text"
                            placeholder="Cari komik..."
                            name="search"
                            className="py-2 px-4 w-full max-w-[200px] border border-gray-300 rounded-l-md focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="py-2 px-4 bg-[#5C8374] text-white rounded-r-md hover:bg-[#93B1A6]"
                        >
                            Search
                        </button>
                    </form>
                    <a
                        href="./pages/login.html"
                        className="py-2 px-4 bg-[#040D12] text-white rounded-full hover:bg-[#040D90]"
                    >
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
}
