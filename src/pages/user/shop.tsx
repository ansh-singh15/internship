import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Traditional Silk Saree',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c',
    category: 'sarees'
  },
  {
    id: '2',
    name: 'Girls Party Dress',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1621786030484-4c855eed6974',
    category: 'girls'
  },
  {
    id: '3',
    name: 'Boys Formal Suit',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4',
    category: 'boys'
  }
  // Add more products as needed
];

/**
 * Renders a shop component with product filtering and sorting functionality.
 * @returns {JSX.Element} A React component that displays a filterable and sortable product grid.
 */
const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (priceRange === 'under2000' && product.price >= 2000) return false;
    if (priceRange === '2000-5000' && (product.price < 2000 || product.price > 5000)) return false;
    if (priceRange === 'above5000' && product.price <= 5000) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="all">All Categories</option>
            <option value="sarees">Sarees</option>
            <option value="girls">Girls Wear</option>
            <option value="boys">Boys Wear</option>
          </select>

          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="all">All Prices</option>
            <option value="under2000">Under ₹2000</option>
            <option value="2000-5000">₹2000 - ₹5000</option>
            <option value="above5000">Above ₹5000</option>
          </select>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-md px-3 py-2"
        >
          <option value="newest">Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-purple-600 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Quick View
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="text-purple-600 font-medium">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;