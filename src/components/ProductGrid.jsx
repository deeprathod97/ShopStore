import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchCategories } from '../store/productSlice'
import ProductCard from './ProductCard'
import SearchFilter from './SearchFilter'

const ProductGrid = () => {
  const dispatch = useDispatch()
  const { items, categories, status, error } = useSelector(state => state.products)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
      dispatch(fetchCategories())
    }
  }, [status, dispatch])

  // Memoized filtering for better performance
  const filteredProducts = useMemo(() => {
    return items.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === '' || product.category === category
      return matchesSearch && matchesCategory
    })
  }, [items, search, category])

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  if (status === 'loading') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-gray-200 rounded-lg h-48 animate-pulse"></div>
        ))}
      </div>
    )
  }

  if (status === 'failed') {
    return <div className="text-center py-10 text-red-600">{error}</div>
  }

  return (
    <div>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      {categories.length === 0 && (
        <div className="text-center py-10 text-gray-600">No categories available</div>
      )}

      {filteredProducts.length === 0 ? (
        <div className="text-center py-10 text-gray-600">
          No products found matching your criteria
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {filteredProducts.length > itemsPerPage && (
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductGrid
