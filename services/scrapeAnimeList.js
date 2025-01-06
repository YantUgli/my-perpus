import axios from 'axios';
// import cheerio from 'cheerio';
// import cheerio from 'cheerio';
import { load } from 'cheerio';
import { isProduction } from '@/utils/environment';


// Service untuk scraping data anime dari Samehadaku
const scrapeAnimeList = async () => {
    if (!isProduction()) {
        // Skip scraping jika tidak dalam mode produksi (misalnya, saat build)
        return [];
    }
    try {
        // const url = 'https://samehadaku.ws/';
        const url = 'https://komikindo.cafe/';
        const { data: html } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
            },
        });

        // console.log(html.slice(0, 1000));

        const $ = load(html);

        const komikList = [];
        $('.animepost').each((index, element) => {
            const title = $(element)
                .find('.animepostxx-top a[title]')
                .attr(''); // Judul komik
            const link = $(element)
                .find('.animepostxx-top a[title]')
                .attr('href'); // Link ke halaman komik
            const thumbnail = $(element)
                .find('.animepostxx-top img')
                .attr('src'); // Gambar thumbnail
            const rating = $(element)
                .find('.info-skroep .fas.fa-star')
                .parent()
                .text()
                .trim(); // Rating
            const type = $(element)
                .find('.info-skroep .typeflag')
                .text()
                .trim(); // Jenis (Manga, Manhwa, dll)
            const views = $(element)
                .find('.info-skroep .fa-eye')
                .parent()
                .text()
                .trim(); // Jumlah views
            const color = $(element)
                .find('.info-skroep .fa-palette')
                .parent()
                .text()
                .trim(); // Informasi warna (Hitam Putih, dll)
            const status = $(element)
                .find('.status-skroep')
                .text()
                .trim(); // Status (Ongoing, Completed, dll)

            // Mengambil link chapter terbaru
            const latestChapters = [];
            $(element)
                .find('.list-ch-skroep .lsch a')
                .each((_, chapter) => {
                    const chapterTitle = $(chapter).text().trim();
                    const chapterLink = $(chapter).attr('href');
                    latestChapters.push({
                        chapter_title: chapterTitle,
                        chapter_link: chapterLink,
                    });
                });

            if (title && link && thumbnail) {
                // Menambahkan data ke list
                komikList.push({
                    title,
                    link,
                    thumbnail,
                    rating,
                    type,
                    views,
                    color,
                    status,
                    latest_chapters: latestChapters,
                });
            }

        });
        console.log(komikList); // Debugging untuk melihat hasil

        return komikList;
    } catch (error) {
        console.error('Error scraping data:', error);
        throw new Error('Failed to scrape data');
    }
};

export default scrapeAnimeList;
