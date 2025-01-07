'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const router = useRouter();

  // Dummy data buku (bisa diubah dengan data dinamis dari API)
  const book = {
    id: 1,
    title: "Dandadan",
    author: "John Doe",
    year: 2023,
    image: "/img/dandadan.jpg",
    description:
      "Momo Ayase adalah seorang gadis SMA yang percaya pada hantu tetapi tidak percaya pada alien, sedangkan temannya Ken Takakura percaya pada alien tetapi tidak percaya pada hantu. Dalam sebuah taruhan untuk menentukan siapa yang benar, keduanya memutuskan untuk secara terpisah mengunjungi lokasi yang berhubungan dengan okultisme dan supranatural. Ayase mengunjungi lokasi pertama, dan Takakura mengunjungi lokasi kedua. Ayase diculik oleh sekelompok alien yang secara tidak sengaja membuka chakra-nya, sehingga mengaktifkan kemampuan psikis yang terpendam. Sementara itu, Takakura dirasuki oleh roh yang mengambil alih tubuhnya. Dengan menggunakan kemampuan Ayase dan Takakura yang dirasuki, mereka mengalahkan para alien bersama-sama.",
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
            <p className="mt-4 text-gray-700">Sinopsis {book.description}</p>

            {/* Tombol Kembali */}
            <div className="flex gap-16">
              <button
                onClick={() => router.push('/')}
                className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                Kembali ke Daftar Buku
              </button>
              <button
                onClick={() => router.push('/')}
                className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
              >
                Baca Buku Sekarang!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}