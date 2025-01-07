'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Fungsi untuk memeriksa posisi scroll
        const handleScroll = () => {
            if (window.scrollY > 50) { // Jika scroll lebih dari 50px, navbar diberi background
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Menambahkan event listener untuk scroll
        window.addEventListener("scroll", handleScroll);

        // Menghapus event listener saat komponen unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-10 pt-2 transition-all duration-300 ${isScrolled ? 'bg-[#183D3D]' : 'bg-transparent'}`}>
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
                    {/* <a href="#" className="text-white hover:text-gray-300">Ranking</a> */}
                    <a href="#" className="text-white hover:text-gray-300">Favorite</a>
                    <a href="#" className="text-white hover:text-gray-300">About</a>
                </div>

                {/* Search Bar & Login */}
                <div className="flex items-center gap-4">
                    <form className="flex items-center" action="#" method="GET">
                        <input
                            type="text"
                            placeholder="Cari Buku..."
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
