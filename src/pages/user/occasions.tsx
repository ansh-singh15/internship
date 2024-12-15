import React from 'react';
import { Link } from 'react-router-dom';

const occasions = [
  {
    title: 'Wedding Collection',
    description: 'Stunning sarees and outfits for the wedding season',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
    link: '/shop?occasion=wedding'
  },
  {
    title: 'Festival Wear',
    description: 'Celebrate festivals in style with our traditional collection',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2',
    link: '/shop?occasion=festival'
  },
  {
    title: 'Party Wear',
    description: 'Stand out at parties with our trendy collection',
    image: 'https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2',
    link: '/shop?occasion=party'
  },
  {
    title: 'Casual Wear',
    description: 'Comfortable and stylish everyday wear',
    image: 'https://images.unsplash.com/photo-1619086303291-0ef7699e4b31',
    link: '/shop?occasion=casual'
  }
];

/**
 * Renders the Occasions component, which displays a shop-by-occasion section with occasion cards,
 * featured products, and styling tips.
 * @returns {JSX.Element} A React component containing a grid of occasion cards, a featured
 * products section, and a styling tips section.
 */
const Occasions = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Occasion</h1>
        <p className="text-lg text-gray-600">
          Find the perfect outfit for every special moment in your life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {occasions.map((occasion, index) => (
          <Link
            key={index}
            to={occasion.link}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-96">
              <img
                src={occasion.image}
                alt={occasion.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{occasion.title}</h3>
                  <p className="text-gray-200">{occasion.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Add featured products here */}
        </div>
      </div>

      {/* Styling Tips Section */}
      <div className="mt-16 bg-purple-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Styling Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Wedding Guest</h3>
            <p className="text-gray-600">
              Choose rich fabrics and elegant designs. Opt for traditional colors like red,
              maroon, or gold for a classic look.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Festival Ready</h3>
            <p className="text-gray-600">
              Go for bright colors and intricate embroidery. Mix and match traditional
              pieces with modern accessories.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Party Perfect</h3>
            <p className="text-gray-600">
              Experiment with contemporary styles and bold patterns. Add statement
              jewelry to complete your look.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Occasions;