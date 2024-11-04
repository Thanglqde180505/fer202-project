import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assest';
import '../assets/styles/pages/DetailProduct.css';

const DetailsProduct = () => {
    const { id } = useParams();
    const [product, setProductData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(false);
    const fetchProduct = async () => {
        const url = `https://fakestoreapi.com/products/${id}`;
        await fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProductData(data);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (isLoading) return <h1>Loading....</h1>;
    if (isError) return <h1>Something went wrong</h1>;

    return (
        <div className="wrapper-detail container my-5">
            {product && (
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image} alt={product.title} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p className="price">Price: ${product.price}</p>
                        <div className="start-quantity mt-3 mb-3">
                            <img src={assets.star} alt="this is start quantity" />
                            <img src={assets.star} alt="this is start quantity" />
                            <img src={assets.star} alt="this is start quantity" />
                            <img src={assets.star} alt="this is start quantity" />
                            <img src={assets.star} alt="this is start quantity" />
                        </div>
                        <div className='wrapper-btn-cart-detail'>
                            <button>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default DetailsProduct;
