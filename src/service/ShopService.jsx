import { createContext, useState } from 'react';

export const ShopService = createContext();
const ShopServiceProvider = (props) => {
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false); 
    const value = {
        search, setSearch,
        showSearch, setShowSearch
    };

    return (
        <ShopService.Provider value={value}>
            {props.children}
        </ShopService.Provider>
    );
};

export default ShopServiceProvider;
