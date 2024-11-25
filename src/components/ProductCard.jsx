import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const { title, price, image, rating } = product

  // Access the cart from Redux state
  const cartItems = useSelector((state) => state.cart.items)
  const cartItem = cartItems.find((item) => item.id === product.id)

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="product-card">
      <img
        src={image}
        alt={title}
        className="product-image"
      />
      <h2 className="product-title">{title}</h2>
      <div className="product-rating">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < Math.round(rating.rate) ? 'star-filled' : 'star-empty'}
          />
        ))}
        <span className="rating-count">({rating.count})</span>
      </div>
      <div className="product-footer">
        <span className="product-price">${price}</span>
        <button
          onClick={handleAddToCart}
          disabled={!!cartItem}
          title={cartItem ? `Already added. Quantity: ${cartItem.quantity}` : 'Add this item to your cart'}
          className={`add-to-cart-button ${cartItem ? 'added' : ''}`}
        >
          {cartItem ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
