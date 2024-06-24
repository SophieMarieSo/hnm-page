import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

export default function ProductAll() {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  useEffect(() => {
    getProducts();
  }, [query]);

  const getProducts = () => {
    const searchQuery = query.get('q') || '';
    dispatch(productAction.getProducts(searchQuery));
  };

  return (
    <Container>
      <Row>
        {productList.map((product, idx) => (
          <Col md={3} sm={12} key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
