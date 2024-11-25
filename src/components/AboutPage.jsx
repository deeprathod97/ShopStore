import React from 'react'
import { FaShieldAlt, FaTruck, FaCreditCard, FaHeadset } from 'react-icons/fa'

const AboutPage = () => {
  const features = [
    {
      icon: <FaShieldAlt size={24} />,
      title: 'Secure Shopping',
      description: 'Your security is our top priority. We use industry-leading encryption to protect your data.'
    },
    {
      icon: <FaTruck size={24} />,
      title: 'Fast Delivery',
      description: 'Get your products delivered quickly and efficiently to your doorstep.'
    },
    {
      icon: <FaCreditCard size={24} />,
      title: 'Easy Payments',
      description: 'Multiple payment options available for your convenience.'
    },
    {
      icon: <FaHeadset size={24} />,
      title: '24/7 Support',
      description: 'Our customer service team is always here to help you.'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About ShopStore</h1>
        <p className="text-gray-600 text-lg">
          Your one-stop destination for quality products at great prices.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Story</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded in 2024, ShopStore has grown from a small online retailer to a trusted marketplace serving customers worldwide. Our mission is to provide an exceptional shopping experience with carefully curated products and outstanding customer service.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe in making quality products accessible to everyone while maintaining the highest standards of service and reliability.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage