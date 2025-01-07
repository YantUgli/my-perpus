import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DetailLibrary() {
    return (
        <div className="bg-white min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: "url('/img/loginbg.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-4xl font-bold text-white">Library Detail</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto max-w-6xl px-4 pb-8">
                {/* Detail Information */}
                <div className="bg-white p-6 -mt-16 rounded-lg  relative">
                    <h2 className="text-2xl font-bold mb-4">Perpustakaan Kota Cibinong</h2>
                    <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus ultricies urna, non luctus nisi vulputate at. Integer tincidunt purus ut urna condimentum, nec gravida libero sollicitudin.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Alamat:</h3>
                            <p className="text-gray-600">Jl. Raya Cibinong No.123, Bogor, Jawa Barat</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Jam Operasional:</h3>
                            <p className="text-gray-600">Senin - Jumat: 08.00 - 17.00</p>
                            <p className="text-gray-600">Sabtu - Minggu: 09.00 - 15.00</p>
                        </div>
                    </div>
                </div>

                {/* Book Collection */}
                {/* <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Koleksi Buku</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Book Title"
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">Book Title</h3>
                            <p className="text-gray-600">Penulis: John Doe</p>
                        </div>
                        
                    </div>
                </div> */}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
