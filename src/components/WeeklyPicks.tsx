'use client';

import Head from 'next/head';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const products = [
  {
    title: 'Playoon - Kelimutu Run Model A',
    category: 'Sepatu Pria, Olahraga',
    price: 'Rp. 325.000,-',
    originalPrice: 'Rp. 387.000,-',
    rating: 3.5,
    image: 'https://storage.googleapis.com/a1aa/image/aacedbe0-03a3-4add-b5ef-b66b783a2f06.jpg',
  },
  {
    title: 'Le Modiste - Sepatu Kasual Wanita',
    category: 'Sepatu Wanita, Kasual',
    price: 'Rp. 319.000,-',
    rating: 3.5,
    image: 'https://storage.googleapis.com/a1aa/image/d9c6048f-12f9-4fba-2f54-6be91a600cae.jpg',
  },
  {
    title: 'X-Voyager Vintage Forrester',
    category: 'Sepatu Pria, Kasual',
    price: 'Rp. 402.000,-',
    rating: 3,
    image: 'https://storage.googleapis.com/a1aa/image/fbf6fdc2-8bb9-4f22-e3b9-fdb0f6f0f646.jpg',
  },
  {
    title: 'Cadillac Insigma 91',
    category: 'Sandal, Jepit Pria',
    price: 'Rp. 387.000,-',
    rating: 3.5,
    image: 'https://storage.googleapis.com/a1aa/image/e636ea31-15a9-4378-f5ea-4b63404ea0d3.jpg',
  },
];

// Custom Arrows
const PrevArrow = ({ onClick }: any) => (
  <div
    onClick={onClick}
    className="absolute z-10 left-[-20px] top-1/2 transform -translate-y-1/2 bg-white text-black shadow rounded-full p-2 cursor-pointer hover:bg-gray-100"
  >
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }: any) => (
  <div
    onClick={onClick}
    className="absolute z-10 right-[-20px] top-1/2 transform -translate-y-1/2 bg-white text-black shadow rounded-full p-2 cursor-pointer hover:bg-gray-100"
  >
    <FaArrowRight />
  </div>
);

export default function WeeklyPicks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10 font-['Inter'] relative">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-extrabold text-gray-800">Pilihan Minggu Ini</h2>
        <button
          type="button"
          className="text-sm font-medium text-blue-900 border border-blue-900 rounded-full px-5 py-2 hover:bg-blue-50 transition"
        >
          PRODUK LAINNYA
        </button>
      </div>

      <Slider {...settings}>
        {products.map((p, idx) => (
          <div key={idx} className="p-2">
            <article className="border border-gray-200 p-4 h-full">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-auto object-contain mb-3"
                width={300}
                height={300}
              />
              <p className="text-xs font-semibold uppercase text-gray-500 mb-1">{p.category}</p>
              <h3 className="font-bold text-gray-900 mb-1 leading-tight">{p.title}</h3>
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => {
                  const fullStars = Math.floor(p.rating);
                  const half = p.rating % 1 >= 0.5;
                  if (i < fullStars)
                    return <i key={i} className="fas fa-star text-pink-500 text-sm" />;
                  if (i === fullStars && half)
                    return <i key={i} className="fas fa-star-half-alt text-pink-500 text-sm" />;
                  return <i key={i} className="far fa-star text-pink-500 text-sm" />;
                })}
              </div>
              <div className="flex items-center space-x-2 mb-4">
                {p.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">{p.originalPrice}</span>
                )}
                <span className="font-semibold text-blue-900 text-sm">{p.price}</span>
              </div>
              <button
                type="button"
                className="bg-blue-900 text-white text-xs font-semibold rounded-full px-5 py-2 w-full hover:bg-blue-800 transition"
              >
                ADD TO CART
              </button>
            </article>
          </div>
        ))}
      </Slider>
    </section>
  );
}
