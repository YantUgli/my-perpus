'use client'
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        router.push("/login");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-10 pt-2 transition-all duration-300 ${isScrolled ? 'bg-[#183D3D]' : 'bg-transparent'}`}>
            <div className="container mx-auto max-w-[1024px] flex justify-between items-center px-4">
                <h1 className="text-2xl text-white py-5">
                    MyPerpus
                </h1>

                {/* Hamburger Menu */}
                <button
                    className="text-white md:hidden"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? "✖" : "☰"}
                </button>

                {/* Link Navigation */}
                <div className={`flex-col md:flex md:flex-row md:gap-6 ${isMenuOpen ? 'flex' : 'hidden'} md:items-center md:static absolute top-14 left-0 w-full md:w-auto bg-[#183D3D] md:bg-transparent md:z-auto z-20`}>
                    <Link
                        href="/"
                        className={`block text-white py-2 md:py-0 hover:text-gray-300 ${currentPath == '/' ? 'text-yellow-500' : ''}`}
                    >
                        Home
                    </Link>
                    <a
                        href="/profile"
                        className={`block text-white py-2 md:py-0 hover:text-gray-300 ${currentPath == '/profile' ? 'text-yellow-500' : ''}`}
                    >
                        Profile
                    </a>
                </div>

                {/* Search Bar & Log Out */}
                <div className="hidden md:flex items-center gap-4">
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
                    <button
                        onClick={handleLogout}
                        className="py-2 px-4 bg-[#040D12] text-white rounded-full hover:bg-[#040D90]"
                    >
                        Log Out
                    </button>
                </div>

                {/* Mobile Search Bar & Log Out */}
                {isMenuOpen && (
                    <div className="flex flex-col items-start gap-4 mt-4 md:hidden">
                        <form className="flex items-center w-full px-4" action="#" method="GET">
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
                        <button
                            onClick={handleLogout}
                            className="py-2 px-4 bg-[#040D12] text-white rounded-full hover:bg-[#040D90] w-full"
                        >
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
