// app/page.js
'use client'
import BookList from '@/components/BookList';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
// import ComicList from '@/components/ComicList';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
// import scrapeAnimeList from '../services/scrapeAnimeList';

export default function Home() {
  // Mengambil data anime di server-side dengan async function
  // const animeList = await scrapeAnimeList();
  // console.log(animeList);
  // const serializedKomikList = JSON.parse(JSON.stringify(animeList));
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulasikan cek login (misalnya dari localStorage)
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn !== "true") {
      router.push("/login"); // Arahkan ke halaman login jika belum login
    } else {
      setIsLoggedIn(true); // Set state login
    }
  }, []);

  if (!isLoggedIn) {
    return null; // Jangan render apapun saat cek login
  }

  return (
    <div className='font-Poppins bg-slate-100'>
      <Navbar />
      <Hero />
      <BookList />
      <Footer />
      {/* <ComicList komikList={serializedKomikList} /> */}
    </div>
  );
}
