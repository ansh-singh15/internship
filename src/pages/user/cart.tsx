import React from 'react';
import { Link } from 'react-router-dom';
import CartItems from '../../components/user/cart/CartItems';
import RecentlyViewed from '../../components/user/cart/RecentlyViewed';
import { useCart } from '../../context/CartContext';

/**
 * Renders the shopping cart component
 * @returns {JSX.Element} The rendered cart UI
 *
 * This function renders the shopping cart page. It displays either an empty cart message
 * or the cart contents based on the number of items in the cart. The component uses the
 * useCart hook to access the cart state (total price and item count).
 *
 * If the cart is empty:
 * - Displays a message indicating the cart is empty
 * - Shows a "Continue Shopping" button that links to the shop page
 *
 * If the cart has items:
 * - Shows the total number of items in the cart
 * - Renders the CartItems component (not implemented in this snippet)
 * - Displays an order summary including:
 *   - Subtotal
 *   - Shipping cost (free)
 *   - Tax (calculated as 18% GST)
 *   - Total price
 * - Provides a "Proceed to Checkout" button
 * - Renders a RecentlyViewed component (not implemented in this snippet)
 *
 * The component uses Tailwind CSS classes for styling and responsive design.
 */
const Cart = () => {
  const { total, itemCount } = useCart();
  const tax = total * 0.18; // 18% GST

  if (itemCount === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link
          to="/shop"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart ({itemCount} items)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <CartItems />
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax (18% GST)</span>
                <span className="font-medium">₹{tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">₹{(total + tax).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-purple-600 text-white py-3 rounded-md mt-6 hover:bg-purple-700 transition-colors inline-block text-center"
            >
              Proceed to Checkout
            </Link>
          </div>

          <RecentlyViewed />
        </div>
      </div>
    </div>
  );
};

export default Cart;