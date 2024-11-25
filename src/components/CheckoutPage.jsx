import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from 'react-modal'

const CheckoutPage = ({ onBack }) => {
  const { items } = useSelector((state) => state.cart)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })
  const [showModal, setShowModal] = useState(false)

  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleModalClose = () => {
    setShowModal(false)
    // Additional logic to clear cart or redirect
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={onBack}
        className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
      >
        ← Back to Cart
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="mt-1 w-full p-2 border rounded-lg"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="mt-1 w-full p-2 border rounded-lg"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full p-2 border rounded-lg"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                required
                className="mt-1 w-full p-2 border rounded-lg"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            {/* City and ZIP */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  className="mt-1 w-full p-2 border rounded-lg"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  required
                  className="mt-1 w-full p-2 border rounded-lg"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Payment Details */}
            <h2 className="text-2xl font-bold mt-8 mb-6">Payment Details</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                required
                className="mt-1 w-full p-2 border rounded-lg"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
              />
            </div>

            {/* Expiry Date & CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  required
                  className="mt-1 w-full p-2 border rounded-lg"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  required
                  className="mt-1 w-full p-2 border rounded-lg"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors mt-8"
            >
              Place Order (${totalPrice})
            </button>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showModal}
        onRequestClose={handleModalClose}
        contentLabel="Order Confirmation"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg p-6 max-w-lg w-full">
          <h2 className="text-xl font-bold">Order Confirmation</h2>
          <p className="mt-4">Your order has been placed successfully!</p>
          <button
            onClick={handleModalClose}
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default CheckoutPage
