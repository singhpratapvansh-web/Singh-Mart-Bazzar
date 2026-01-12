
import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Shop', id: 'shop' },
    { name: 'Marketing Hub', id: 'marketing' },
    { name: 'About Us', id: 'about' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl brand-font font-bold text-orange-800"
            >
              SINGH MART BAZZAAR
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`${
                  currentPage === item.id ? 'text-orange-800 font-semibold' : 'text-gray-600'
                } hover:text-orange-800 transition-colors uppercase text-sm tracking-wider`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-orange-800">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-500 hover:text-orange-800">
              <User size={20} />
            </button>
            <button 
              onClick={onCartClick}
              className="p-2 text-gray-500 hover:text-orange-800 relative"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-orange-800 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 text-gray-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-800"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
