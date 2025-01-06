'use client'
import scrapeAnimeList from '@/app/services/scrapeAnimeList';
import { useEffect, useState } from 'react';

export default function ComicList({ komikList }) {
    // const komikList = await scrapeAnimeList()
    const [comics, setComics] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = komikList;// Panggil service
                setComics(data); // Simpan data ke state
            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        };

        fetchData(); // Jalankan fungsi fetchData
    }, []);

    console.log('comik', komikList, comics);
    // console.log(JSON.stringify(komikList, null, 2));


    return (
        <div className="container mx-auto p-6 mt-10">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Daftar Komik</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {comics.map((book, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        <img
                            src={book.thumbnail}
                            alt={book.title.title}
                            className="w-full  rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-800">{book.title.title}</h2>
                        <p className="text-gray-600">Penulis: {book.writer}</p>
                        <p className="text-gray-500">Tahun Terbit: {book.published_year}</p>
                        {/* <p className="text-gray-500">Tahun Terbit: {book.thumbnail}</p> */}
                    </div>
                ))}
            </div>
            <img src='https://komikindo.cafe/wp-content/uploads/2021/08/Komik-Adabana-79x112.jpg' />

        </div>
    );
}
