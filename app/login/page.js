'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'

export default function Page() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Mengecek status login
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
            router.push("/"); // Arahkan ke halaman utama jika sudah login
        }
    }, [router]);

    const handleLogin = (e) => {
        e.preventDefault(); // Mencegah reload halaman
        // Simulasi login boongan
        if (email === "user@gmail.com" && password === "12345678") {
            localStorage.setItem("isLoggedIn", "true"); // Simpan status login
            router.push("/"); // Arahkan ke halaman utama
        } else {
            alert("Email atau password salah!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/img/loginbg.jpg')" }}>
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Login MyPerpus</h1>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Masukkan email Anda"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Masukkan password Anda"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-gray-600 text-center mt-4">
                    Belum punya akun?{" "}
                    <a href='/register' className="text-blue-500 hover:underline">Daftar di sini</a>
                </p>
            </div>
        </div>
    )
}
