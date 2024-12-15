import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Truck, Shield, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

/**
 * Renders a product details page for an e-commerce website
 * @returns {JSX.Element} A React component displaying detailed information about a product
 */
const ProductDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: '1',
    name: 'Traditional Silk Saree',
    price: 5999,
    description: 'Beautiful traditional silk saree with intricate designs and premium quality fabric.',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c'
    ],
    sizes: ['Free Size'],
    colors: ['Red', 'Blue', 'Green'],
    rating: 4.5,
    reviews: 128
  };

  const addToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    toast.success('Added to cart successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} view ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.floor(product.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-2xl font-bold text-purple-600">₹{product.price}</p>

          <p className="text-gray-600">{product.description}</p>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border rounded-md py-2 text-sm font-medium ${
                    selectedSize === size
                      ? 'border-purple-600 text-purple-600'
                      : 'border-gray-300 text-gray-900'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
            <div className="flex items-center space-x-3 mt-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="border rounded-md p-2"
              >
                -
              </button>
              <span className="text-gray-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="border rounded-md p-2"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
          >
            Add to Cart
          </button>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 border-t pt-6">
            <div className="text-center">
              <Truck className="h-6 w-6 mx-auto text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Free Shipping</p>
            </div>
            <div className="text-center">
              <Shield className="h-6 w-6 mx-auto text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Secure Payment</p>
            </div>
            <div className="text-center">
              <ArrowRight className="h-6 w-6 mx-auto text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;