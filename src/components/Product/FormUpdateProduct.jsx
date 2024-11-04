import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/components/Product/FormUpdate.css';

const FormUpdate = ({ product, onSave, onCancel }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const [previewImage, setPreviewImage] = useState(product.image);

    
    useEffect(() => {
        setUpdatedProduct(product);
        setPreviewImage(product.image);
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPreviewImage(imageURL);
            setUpdatedProduct((prev) => ({
                ...prev,
                image: imageURL,  
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(updatedProduct);
    };

    return (
        <div className="overlay">
            <div className="update-form-container">
                <form className="update-form" onSubmit={handleSubmit}>
                    <h3>Update Product</h3>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            value={updatedProduct.title || ''}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Product Title"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            value={updatedProduct.price || ''}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Product Price"
                        />
                    </div>

                    <div className="mb-3">
                        <label>Product Image</label>
                        <input
                            type="file"
                            className="form-control"
                            onChange={handleImageChange}
                            accept="image/*"
                        />
                        {previewImage && (
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="img-preview mt-3"
                            />
                        )}
                    </div>

                    <div className="d-flex justify-content-end gap-2">
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormUpdate;
