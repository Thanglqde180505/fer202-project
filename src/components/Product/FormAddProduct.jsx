import React, { useState } from 'react';
import '../../assets/styles/components/Product/FormAddProduct.css';

const FormAddProduct = ({ onClose, addNewProduct }) => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        }

        reader.readAsDataURL(file);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            title,
            price: parseFloat(price),
            description,
            image,
            category
        };
        addNewProduct(newProduct);
        setTitle('');
        setPrice('');
        setDescription('');
        setImage(null);
        setCategory('')
    };

    return (
        <div className="overlay">
            <div className="add-product-form">
                <h2>Add New Product</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div>
                        <label>Image</label>
                        <input type="file" name="image" accept="image/*" onChange={handleImageUpload} required />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea name="description" value={description} onChange={(e) => {setDescription(e.target.value)}} required />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select
                            className="form-select"
                            name="category"
                            value={category}
                            onChange={(e) => {setCategory(e.target.value)}}
                            required
                        >
                            <option value="men's clothing">Men's Clothing</option>
                            <option value="women's clothing">Women's Clothing</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="electronics">Electronics</option>
                        </select>
                    </div>
                    <button className='btn-submit' type="submit">Add Product</button>
                    <button type="button" onClick={onClose} className='btn-cancel'>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default FormAddProduct;
