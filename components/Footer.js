'use client';

export default function Footer() {
    return (
        <footer className="bg-[#183D3D] text-white py-10">
            <div className="container mx-auto max-w-[1024px] px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo dan Deskripsi */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">MyPerpus</h2>
                        <p className="text-gray-300">
                            Platform untuk membaca dan mencari buku favoritmu dengan mudah. Akses di mana saja, kapan saja.
                        </p>
                    </div>

                    {/* Navigasi */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Navigasi</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition">
                                    Favorite
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Kontak</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="material-icons">location_on</span>
                                <span>Jl. Contoh No. 123, Jakarta</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons">email</span>
                                <a
                                    href="mailto:support@myperpus.com"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    support@myperpus.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons">phone</span>
                                <a
                                    href="tel:+628123456789"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    +62 812 3456 789
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-gray-600 pt-4 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} MyPerpus. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
