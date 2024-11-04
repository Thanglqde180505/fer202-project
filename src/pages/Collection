import React, { useState } from 'react';
import '../assets/styles/pages/Collection.css';
import FormAddProduct from '../components/Product/FormAddProduct';
import ProductList from '../components/Product/ProductList';
import Title from '../components/Title';

const Collection = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((cat) => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const toggleAddProductForm = () => {
    setShowAddProduct(!showAddProduct);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };
  
  return (
    <div>
      <Title text1={'Our'} text2={'Product'} />
      <div className='container d-flex align-items-start justify-content-around gap-3'>
        {/* Filter by Option */}
        <div className='col-3'>
          <h4>Filter By Category</h4>
          <div className="wrapper-filter">
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                id='category1'
                checked={selectedCategories.includes("men's clothing")}
                onChange={() => handleCategoryChange("men's clothing")}
              />
              <label className='form-check-label' htmlFor='category1'>
                Men's Clothing
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                id='category3'
                checked={selectedCategories.includes("women's clothing")}
                onChange={() => handleCategoryChange("women's clothing")}
              />
              <label className='form-check-label' htmlFor='category3'>
                Women's clothing
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                id='category4'
                checked={selectedCategories.includes('jewelery')}
                onChange={() => handleCategoryChange('jewelery')}
              />
              <label className='form-check-label' htmlFor='category4'>
                Jewelry
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                id='category5'
                checked={selectedCategories.includes('electronics')}
                onChange={() => handleCategoryChange('electronics')}
              />
              <label className='form-check-label' htmlFor='category5'>
                Electronics
              </label>
            </div>
          </div>
          <button className='add-btn mt-3' onClick={toggleAddProductForm}>
            {showAddProduct ? 'Cancel' : 'Add Product'}
          </button>
        </div>

        {/* Product List */}
        <div className='col-9'>
          {showAddProduct && (
            <FormAddProduct onClose={toggleAddProductForm} addNewProduct={handleAddProduct} />
          )}
          <ProductList products={products} setProducts={setProducts} selectedCategories={selectedCategories} />
        </div>
      </div>
    </div>
  );
};

export default Collection;
