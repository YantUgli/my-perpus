import React from 'react'

export default function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center text-white text-center">
            <img src="/img/buku.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover object-top  brightness-75" />
            <div className="relative max-w-lg px-4">
                <h1 className="text-4xl mb-4">Selamat Datang di MyPerpus!</h1>
                <p className="text-2xl mb-6">Baca Buku Mudah, di mana saja!</p>
            </div>
        </section>
    )
}
