import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../assets/styles/SearchProduct.css';
import { ShopService } from '../../service/ShopService';

const SearchProduct = () => {
    const location = useLocation();
    const { showSearch, setShowSearch, search, setSearch } = useContext(ShopService);

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setShowSearch(true);
        } else {
            setShowSearch(false);
        }
    }, [location, setShowSearch]);

    return showSearch ? (
        <div className="input-group mb-3 text-center">
            <input 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                type="text" 
                className="form-control" 
                placeholder="Search Product" 
                aria-label="Recipient's username" 
                aria-describedby="button-addon2" 
            />
            <button className="btn-search btn-outline-secondary" type="button" id="button-addon2">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    ) : null;
}

export default SearchProduct;
