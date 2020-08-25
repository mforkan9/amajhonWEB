import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img,name,seller,stock,price} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
             <div>
                 <h3 className='product-name'>{name}</h3>
                <p>buy:{seller}</p>
                <p>Stock:<strong>{stock}</strong></p>
                <p>price:<strong>${price}</strong></p>
                <button onClick={() => props.handleAdd(props.product)} className='main-button'>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;