import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

export default function ProductAll() {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        getProducts();
    }, [query]);

    const getProducts = async () => {
        const searchQuery = query.get('q') || '';
        const url = `http://localhost:5000/products?q=${searchQuery}`;
        const res = await axios.get(url);
        setProductList(res.data);
    };

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((product, idx) => (
                        <Col lg={3} key={idx}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
