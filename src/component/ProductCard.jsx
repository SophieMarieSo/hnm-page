import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
    const { id } = product;
    const navigate = useNavigate();
    return (
        <div
            className='product-card'
            onClick={() => {
                navigate(`/product/${id}`);
            }}
        >
            <img src={product?.img} alt='' width={300} />
            <div className={product?.new.toString() && 'new-product'}>
                {product?.new ? '🎉신제품🎉' : null}
            </div>
            <div>{product?.choice ? 'Conscious Choice' : null}</div>
            <h5>{product?.title}</h5>
            <div className='product-price'>₩ {product?.price}</div>
        </div>
    );
}
