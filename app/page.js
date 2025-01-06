// app/page.js
import BookList from '@/components/BookList';
import ComicList from '@/components/ComicList';
import Navbar from '@/components/Navbar';
import scrapeAnimeList from '../services/scrapeAnimeList';

export default async function Home() {
  // Mengambil data anime di server-side dengan async function
  const animeList = await scrapeAnimeList();
  console.log(animeList);
  const serializedKomikList = JSON.parse(JSON.stringify(animeList));


  return (
    <div className='font-Poppins'>
      <Navbar />
      <BookList />
      <ComicList komikList={serializedKomikList} />
    </div>
  );
}
