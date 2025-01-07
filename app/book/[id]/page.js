'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const router = useRouter();

  // Dummy data buku (bisa diubah dengan data dinamis dari API)
  const book = {
    id: 1,
    title: "Belajar Pemrograman dengan React",
    author: "John Doe",
    year: 2023,
    image: "/img/buku.jpg",
    description:
      "Buku ini memberikan panduan lengkap untuk mempelajari React, salah satu library JavaScript paling populer untuk membangun aplikasi web modern.",
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />


      {/* Hero Section */}
      <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: "url('/img/loginbg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white">Library Detail</h1>
        </div>
      </div>

      {/* Konten Detail Buku */}
      <div className="container mx-auto p-6 relative bg-white rounded-lg -mt-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Gambar Buku */}
          <div className="w-full lg:w-1/3">
            <img
              src={book.image}
              alt={book.title}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Detail Buku */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-3xl font-bold text-gray-800">{book.title}</h1>
            <p className="text-gray-600 mt-2">Penulis: {book.author}</p>
            <p className="text-gray-500">Tahun Terbit: {book.year}</p>
            <p className="mt-4 text-gray-700">{book.description}</p>

            {/* Tombol Kembali */}
            <button
              onClick={() => router.push('/books')}
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Kembali ke Daftar Buku
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}