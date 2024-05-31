import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ProductAll() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const url = 'http://localhost:5000/products';
        const res = await axios.get(url);
        setProductList(res.data);
    };

    return (
        <div>
            <h1>전체 상품 페이지</h1>
        </div>
    );
}
