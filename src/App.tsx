import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { SushiItem } from './types';
import { sushiData } from './utils/data';
import { useCart } from './context/CartContext';

import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import SushiCard from './components/SushiCard';
import SushiDetail from './components/SushiDetail';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [filteredItems, setFilteredItems] = useState<SushiItem[]>(sushiData);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<SushiItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  
  // Filter items based on category and search query
  useEffect(() => {
    let items = sushiData;
    
    if (activeCategory) {
      items = items.filter(item => item.category === activeCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredItems(items);
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleItemClick = (item: SushiItem) => {
    setSelectedItem(item);
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header 
          onCartClick={() => setIsCartOpen(true)} 
          onSearchChange={handleSearchChange}
        />
        
        <main className="flex-1">
          <Hero />
          
          <section id="menu" className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-2">Наше меню</h2>
              <p className="text-gray-600 text-center mb-8">
                Изысканные японские блюда, приготовленные нашими мастерами
              </p>
              
              <CategoryFilter 
                activeCategory={activeCategory} 
                onCategoryChange={handleCategoryChange}
              />
              
              {filteredItems.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600 mb-4">
                    {searchQuery 
                      ? `По запросу «${searchQuery}» ничего не найдено` 
                      : 'В данной категории нет товаров'}
                  </p>
                  <button
                    className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300"
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory(null);
                    }}
                  >
                    Показать все товары
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems.map(item => (
                    <SushiCardWithCart 
                      key={item.id} 
                      item={item} 
                      onItemClick={handleItemClick}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
          
          {/* Promotional Banner */}
          <section className="py-12 bg-gradient-to-r from-red-700 to-red-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Подпишитесь на нашу рассылку
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Получайте информацию о новинках меню, акциях и специальных предложениях
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none"
                />
                <button className="px-6 py-3 bg-white text-red-700 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">
                  Подписаться
                </button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        
        {/* Modal Components */}
        {selectedItem && (
          <SushiDetail 
            item={selectedItem} 
            onClose={handleCloseDetail}
          />
        )}
        
        <Cart 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
        />
      </div>
    </CartProvider>
  );
}

// Helper component to inject cart functionality
const SushiCardWithCart: React.FC<{
  item: SushiItem;
  onItemClick: (item: SushiItem) => void;
}> = ({ item, onItemClick }) => {
  const { addToCart } = useCart();
  
  return (
    <SushiCard 
      item={item} 
      onAddToCart={addToCart} 
      onItemClick={onItemClick}
    />
  );
};

export default App;