import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  onSearchChange: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, onSearchChange }) => {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-red-600' : 'text-white'}`}>
              SUSHI<span className="text-red-600">КАТ</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600`}>
              Меню
            </a>
            <a href="#" className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600`}>
              Акции
            </a>
            <a href="#" className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600`}>
              Доставка
            </a>
            <a href="#" className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600`}>
              Контакты
            </a>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className={`relative hidden sm:block transition-all duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              <input
                type="text"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={handleSearchChange}
                className={`pl-10 pr-4 py-2 rounded-full focus:outline-none transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-800 focus:ring-2 focus:ring-red-500' 
                    : 'bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:bg-white/30'
                }`}
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5" />
            </div>
            
            <button 
              onClick={onCartClick}
              className={`relative p-2 rounded-full transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu} 
              className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute left-7 top-24 w-5 h-5 text-gray-500" />
            </div>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-800 hover:text-red-600 py-2">
                Меню
              </a>
              <a href="#" className="text-gray-800 hover:text-red-600 py-2">
                Акции
              </a>
              <a href="#" className="text-gray-800 hover:text-red-600 py-2">
                Доставка
              </a>
              <a href="#" className="text-gray-800 hover:text-red-600 py-2">
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;