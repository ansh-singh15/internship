import React from 'react';
import Hero from '../../components/user/hero/Hero';
import { Link } from 'react-router-dom';
import { TrendingUp, Star, Truck } from 'lucide-react';

const categories = [
  {
    title: "Women's Sarees",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/shop/sarees"
  },
  {
    title: "Girls' Wear",
    image: "https://images.unsplash.com/photo-1621786030484-4c855eed6974?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/shop/girls"
  },
  {
    title: "Boys' Wear",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/shop/boys"
  }
];

const features = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Latest Trends",
    description: "Stay updated with the newest fashion trends"
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Quality Assured",
    description: "Premium quality fabrics and materials"
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Fast Delivery",
    description: "Quick and reliable shipping across India"
  }
];

/**
 * Renders the homepage of the e-commerce website
 * @returns {JSX.Element} The rendered homepage component
 */
const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={index} to={category.link} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;