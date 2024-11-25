import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = ({ onCartClick, onNavigate, currentPage }) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#" onClick={() => onNavigate('home')}>
          ShopStore
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button
                className={`nav-link btn ${currentPage === 'home' ? 'active text-primary' : ''}`}
                onClick={() => onNavigate('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn ${currentPage === 'about' ? 'active text-primary' : ''}`}
                onClick={() => onNavigate('about')}
              >
                About
              </button>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button
              onClick={onCartClick}
              className="btn btn-outline-light position-relative"
            >
              <FaShoppingCart size={24} />
              {totalQuantity > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalQuantity}
                  <span className="visually-hidden">items in cart</span>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
