'use client'

import KemdikbudBook from '@/services/KemdikbudBook';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Contoh data buku
// const books = [
//     { id: 1, title: "Buku A", author: "Penulis A", year: 2020, image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { id: 2, title: "Buku B", author: "Penulis B", year: 2021, image: "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { id: 3, title: "Buku C", author: "Penulis C", year: 2022, image: "https://source.unsplash.com/200x300/?book" },
//     { id: 4, title: "Buku D", author: "Penulis D", year: 2023, image: "https://source.unsplash.com/200x300/?book" },
// ];

export default function BookList() {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true);
    const router = useRouter();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await KemdikbudBook();// Panggil service
                setBooks(data.results); // Simpan data ke state
            } catch (error) {
                console.error('Failed to fetch books:', error);
            } finally {
                setLoading(false); // Loading selesai
            }
        };

        fetchData(); // Jalankan fungsi fetchData
    }, []); // Kosongkan array dependency untuk menjalankan sekali saja saat komponen mount

    if (loading) {
        return (
            <div className="text-center p-6">
                <p className="text-gray-500">Loading buku...</p>
            </div>
        );
    }

    console.log(books)

    return (
        <div className="container mx-auto p-6 mt-10">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Daftar Buku</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {books.map((book) => (
                    <div key={book.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition hover:-translate-y-3 hover:bg-blue-100"
                        onClick={() => router.push(`/book/${book.id}`)}
                    >
                        <img
                            src={book.formats["image/jpeg"]}
                            alt={book.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
                        <p className="text-gray-600">Penulis: {book.authors[0].name}</p>
                        <p className="text-gray-500">Download: {book.download_count}</p>
                    </div>
                ))}
            </div>
            {/* {books?.map((book) => (
                <div className="mt-8" key={book.id}>
                    <h2 className="text-2xl font-bold mb-4">Koleksi Buku</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <img
                                src={book.formats["image/jpeg"]}
                                alt="Book Title"
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">Book Title</h3>
                            <p className="text-gray-600">Penulis: John Doe</p>
                        </div>

                    </div>
                </div>
            ))} */}
        </div>
    );
}
