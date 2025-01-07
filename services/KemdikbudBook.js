import axios from 'axios';

// Service untuk mengambil data buku dari API
const KemdikbudBook = async () => {
    try {
        // URL API buku
        // const url = 'https://api.buku.cloudapp.web.id/api/catalogue/getPenggerakTextBooks?limit=10&type_pdf&order_by=updated_at';
        const url = 'https://gutendex.com/books';

        // Mengirimkan request ke API
        const { data } = await axios.get(url);

        // Mengolah data yang diterima dari API
        // const books = data.data.result.map((item) => ({
        //     title: item.title,
        //     author: item.author,
        //     description: item.description,
        //     pdfLink: item.pdf_link,
        //     thumbnail: item.thumbnail,
        //     updatedAt: item.updated_at,
        // }));

        console.log(data); // Debugging untuk melihat hasil
        // const dataBook = data.result
        // return books;
        return data
    } catch (error) {
        console.error('Error fetching books:', error);
        throw new Error('Failed to fetch books');
    }
};

export default KemdikbudBook;
