import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

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
