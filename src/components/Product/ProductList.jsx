import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/Product/ProductList.css';
import FormUpdate from './FormUpdateProduct';

const ProductList = ({ products, setProducts, selectedCategories }) => {
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [sortOrder, setSortOrder] = useState('');
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const fetchProductApi = async () => {
        const url = `https://fakestoreapi.com/products`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductApi();
    }, []);

    const handleUpdate = (product) => {
        setSelectedProduct(product);
        setShowUpdateForm(true);
    };
    
    const handleSaveUpdate = (updatedProduct) => {
        const updatedProducts = products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
        );
        setProducts(updatedProducts);
        setShowUpdateForm(false);
    };
    
    const handleDelete = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
    };
    
    


    if (isLoading) return <h1>Wait a minute...</h1>;
    if (isError) return <h1>Error when loading the data...</h1>;

    const filteredProducts = selectedCategories.length > 0
        ? products.filter(product => selectedCategories.includes(product.category))
        : products;

    const sortProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === 'asc') return a.price - b.price;
        if (sortOrder === 'desc') return b.price - a.price;
        return 0;
    });

    const handleChangeSort = (e) => {
        setSortOrder(e.target.value);
    };
    

    return (
        <div className='container'>
            <div className="form-floating mb-5">
                <select className="form-select" onChange={handleChangeSort}>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
                <label>Sort by Price</label>
            </div>
            <div className='row'>
                {sortProducts.length > 0 ? sortProducts.map((item) => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <div className='card w-75 h-100 shadow-sm'>
                            <Link to={`/details-product/${item.id}`}>
                                <img src={item.image} className="card-img-top rounded-top" alt={item.title} style={{ maxHeight: '200px', objectFit: 'cover' }} />
                            </Link>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text text-muted">Price: ${item.price}</p>
                            </div>
                            <div className="wrapper-btn d-flex align-items-center justify-content-center gap-5 mb-3">
                                <button className='btn btn-warning' onClick={() => handleUpdate(item)}>
                                    Update
                                </button>
                                <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )) : <h1>No products available</h1>}
            </div>

            {showUpdateForm && (
                <FormUpdate
                    product={selectedProduct}
                    onSave={handleSaveUpdate}
                    onCancel={() => setShowUpdateForm(false)}
                />
            )}
        </div>
    );
};

export default ProductList;
