import React from 'react';

export default function ProductCard({ product }) {
    return (
        <div className='product-card'>
            <img src={product?.img} alt='' />
            <div className={product?.new && 'new-product'}>
                {product?.new ? '🎉신제품🎉' : null}
            </div>
            <div>{product?.choice ? 'Concious Choice' : null}</div>
            <h5>{product?.title}</h5>
            <div className='product-price'>₩ {product?.price}</div>
        </div>
    );
}
