import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';
import { FaTrash } from 'react-icons/fa';

const CartPage = ({ onCheckout }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-5">
        <h2 className="display-6 text-muted">Your cart is empty</h2>
        <p className="text-secondary">Add some products to your cart to see them here!</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="display-5 mb-4">Shopping Cart</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          {items.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center border-bottom py-3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid rounded"
                style={{ width: '100px', height: '100px', objectFit: 'contain' }}
              />
              <div className="flex-grow-1 ms-3">
                <h5 className="fw-bold mb-1">{item.title}</h5>
                <p className="mb-1 text-muted">Quantity: {item.quantity}</p>
                <p className="mb-0 text-primary fw-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="btn btn-link text-danger p-0"
                title="Remove"
              >
                <FaTrash size={20} />
              </button>
            </div>
          ))}
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fw-semibold fs-5">Total:</span>
            <span className="fs-4 text-primary fw-bold">${totalPrice}</span>
          </div>
          <button
            onClick={onCheckout}
            className="btn btn-primary w-100 py-2"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
