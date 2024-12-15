import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, MapPin } from 'lucide-react';

interface ShippingDetails {
  fullName: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

/**
 * Checkout component for handling the checkout process in an e-commerce application.
 * Manages a two-step process: shipping details input and payment processing.
 * Uses React hooks for state management and navigation.
 * @returns {JSX.Element} A JSX element representing the checkout interface with
 *                        shipping form or payment form based on the current step.
 */
const Checkout = () => {
  const [step, setStep] = useState(1);
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    fullName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });
  
  const navigate = useNavigate();

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePayment = async () => {
    // Implement payment processing logic here
    try {
      // Process payment
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          <div className={`flex items-center ${step >= 1 ? 'text-purple-600' : 'text-gray-400'}`}>
            <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold">
              1
            </span>
            <span className="ml-2">Shipping</span>
          </div>
          <div className="w-16 h-0.5 bg-gray-200"></div>
          <div className={`flex items-center ${step >= 2 ? 'text-purple-600' : 'text-gray-400'}`}>
            <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold">
              2
            </span>
            <span className="ml-2">Payment</span>
          </div>
        </div>
      </div>

      {step === 1 ? (
        /* Shipping Details Form */
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Shipping Details</h2>
          <form onSubmit={handleShippingSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={shippingDetails.fullName}
                onChange={(e) => setShippingDetails({...shippingDetails, fullName: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                required
                value={shippingDetails.address}
                onChange={(e) => setShippingDetails({...shippingDetails, address: e.target.value})}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  required
                  value={shippingDetails.city}
                  onChange={(e) => setShippingDetails({...shippingDetails, city: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  required
                  value={shippingDetails.state}
                  onChange={(e) => setShippingDetails({...shippingDetails, state: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                  PIN Code
                </label>
                <input
                  type="text"
                  id="pincode"
                  required
                  value={shippingDetails.pincode}
                  onChange={(e) => setShippingDetails({...shippingDetails, pincode: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={shippingDetails.phone}
                  onChange={(e) => setShippingDetails({...shippingDetails, phone: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Continue to Payment
            </button>
          </form>
        </div>
      ) : (
        /* Payment Form */
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
                <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  placeholder="MM/YY"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="123"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;