"use client";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isBelanjaOpen, setIsBelanjaOpen] = useState(false);
  const [isBundle1Open, setIsBundle1Open] = useState(false);
  const [isBundle2Open, setIsBundle2Open] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleBelanja = () => {
    setIsBelanjaOpen(!isBelanjaOpen);
    setIsBundle1Open(false);
    setIsBundle2Open(false);
  };

  const toggleBundle1 = () => {
    setIsBundle1Open(!isBundle1Open);
    setIsBelanjaOpen(false);
    setIsBundle2Open(false);
  };

  const toggleBundle2 = () => {
    setIsBundle2Open(!isBundle2Open);
    setIsBelanjaOpen(false);
    setIsBundle1Open(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#2f4f6f] text-white shadow sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Left Icons */}
      <div className="flex items-center gap-4 text-[#4bc1c9] text-2xl absolute left-6">
        <button aria-label="Search" className="focus:outline-none">
          <FaSearch />
        </button>
      </div>


        {/* Logo */}
        <div className="flex-grow flex justify-center">
          <h1 className="font-extrabold text-3xl md:text-4xl leading-none select-none" style={{ fontWeight: 900 }}>
            mino.
          </h1>
        </div>  

        {/* Right Icons */}
       <div className="flex items-center gap-4 text-[#4bc1c9] text-2xl absolute right-6">
  <button aria-label="Cart" className="relative focus:outline-none">
    <FaShoppingCart />
    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-pink-500 border-2 border-[#2f4f6f]"></span>
  </button>
  <button aria-label="User" className="focus:outline-none">
    <FaUser />
  </button>
  <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none">
    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
  </button>
</div>
</div>

      {/* Navigation */}
      <nav className={`max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center border-b border-[#3f5f7f] ${isMobileMenuOpen ? 'block' : 'hidden md:flex'}`}>
        <a className="text-xs md:text-sm font-bold text-white px-5 py-3 flex items-center border-b-4 border-transparent hover:border-[#2f4f6f]" href="#">
          BERANDA
        </a>
        <div className="relative group">
          <button
            className="text-xs md:text-sm font-bold text-[#4bc1c9] bg-white px-5 py-3 flex items-center border-b-4 border-white"
            onClick={toggleBelanja}
          >
            BELANJA
            {isBelanjaOpen ? (
              <FaChevronUp className="ml-1 w-3 h-3 text-[#4bc1c9]" />
            ) : (
              <FaChevronDown className="ml-1 w-3 h-3 text-[#4bc1c9]" />
            )}
          </button>
          {isBelanjaOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-[800px] bg-white shadow-xl border-t-4 border-[#4bc1c9] z-10">
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Left Column - Brand Categories */}
                  <div>
                    <h3 className="text-lg font-bold text-[#2f4f6f] mb-4">Semua Merek</h3>
                    <ul className="space-y-3">
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">X-Voyager</li>
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Balancia</li>
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Cadilac</li>
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Playoon</li>
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Machia</li>
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Everest</li>
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Marathon</li>
                    </ul>
                  </div>

                  {/* Middle Column - Product Categories */}
                  <div>
                    <h3 className="text-lg font-bold text-[#2f4f6f] mb-4">Vintage Forrester</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Vintage Strobero</li>
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Vintage Shoe 1.0</li>
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">El Dorado</li>
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Unhinted</li>
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Cursed Again</li>
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Nurture</li>
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Secret Sky 2021</li>
                    </ul>
                  </div>

                  {/* Right Column - Featured Product */}
                  <div className="flex justify-center items-center">
                    <div className="bg-gray-50 rounded-lg p-6 w-full h-48 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-gray-400 text-2xl">👟</span>
                        </div>
                        <p className="text-sm text-gray-500">Featured Product</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative group">
          <button
            className="text-xs md:text-sm font-bold text-white px-5 py-3 flex items-center border-b-4 border-transparent hover:border-[#2f4f6f]"
            onClick={toggleBundle1}
          >
            BUNDEL 1
            {isBundle1Open ? (
              <FaChevronUp className="ml-1 w-3 h-3 text-white" />
            ) : (
              <FaChevronDown className="ml-1 w-3 h-3 text-white" />
            )}
          </button>
          {isBundle1Open && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-[600px] bg-white shadow-xl border-t-4 border-[#4bc1c9] z-10">
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-lg font-bold text-[#2f4f6f] mb-4">Bundle Packages</h3>
                    <ul className="space-y-3">
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Starter Bundle</li>
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Premium Bundle</li>
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Deluxe Bundle</li>
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Ultimate Bundle</li>
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Family Bundle</li>
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-lg font-bold text-[#2f4f6f] mb-4">Special Offers</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Best Value Pack</li>
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Student Discount</li>
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Limited Edition</li>
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Seasonal Bundle</li>
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Corporate Package</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative group">
          <button
            className="text-xs md:text-sm font-bold text-white px-5 py-3 flex items-center border-b-4 border-transparent hover:border-[#2f4f6f]"
            onClick={toggleBundle2}
          >
            BUNDEL 2
            {isBundle2Open ? (
              <FaChevronUp className="ml-1 w-3 h-3 text-white" />
            ) : (
              <FaChevronDown className="ml-1 w-3 h-3 text-white" />
            )}
          </button>
          {isBundle2Open && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-[600px] bg-white shadow-xl border-t-4 border-[#4bc1c9] z-10">
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-lg font-bold text-[#2f4f6f] mb-4">Advanced Bundles</h3>
                    <ul className="space-y-3">
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Pro Bundle</li>
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Elite Bundle</li>
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Master Bundle</li>
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Champion Bundle</li>
                      <li className="text-[#2f4f6f] hover:text-[#4bc1c9] cursor-pointer transition-colors">Exclusive Bundle</li>
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-lg font-bold text-[#2f4f6f] mb-4">Premium Services</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">VIP Access</li>
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Priority Support</li>
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Custom Solutions</li>
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Enterprise Package</li>
                      <li className="hover:text-[#4bc1c9] cursor-pointer transition-colors">Lifetime Access</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <a className="text-xs md:text-sm font-bold text-white px-5 py-3 flex items-center border-b-4 border-transparent hover:border-[#2f4f6f]" href="#">
          PROMO
        </a>
        <a className="text-xs md:text-sm font-bold text-white px-5 py-3 flex items-center border-b-4 border-transparent hover:border-[#2f4f6f]" href="#">
          BLOG
        </a>
      </nav>
    </header>
  );
}