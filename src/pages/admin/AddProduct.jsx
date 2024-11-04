import React from 'react'
import Title from '../../components/Title'
import FormAddProduct from '../../components/Product/FormAddProduct'
const AddProduct = () => {
    return (
        <div className='container d-flex flex-column align-items-center justify-content-center gap-3'>
            <Title text1={'add'} text2={'product'} />
            <FormAddProduct />
        </div>
    )
}

export default AddProduct
