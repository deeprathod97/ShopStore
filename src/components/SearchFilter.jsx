import React from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'

const SearchFilter = ({ search, setSearch, category, setCategory, categories }) => {
  const handleClearSearch = () => setSearch('')

  return (
    <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
      {/* Search Input */}
      <div className="relative md:w-96">
        <label htmlFor="search" className="sr-only">
          Search Products
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        {search && (
          <button
            onClick={handleClearSearch}
            className="absolute right-3 top-3 text-gray-500 hover:text-red-600"
            aria-label="Clear search"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Category Dropdown */}
      <div className="relative">
        <label htmlFor="category" className="sr-only">
          Filter by Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-48 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SearchFilter
