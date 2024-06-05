import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    const url = `http://localhost:5000/products/${id}`;
    const resp = await axios.get(url);
    setProduct(resp.data);
  };

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} alt='' />
        </Col>
        <Col>
          <h3>{product?.title}</h3>
          <div
            className={product?.new && 'new-product'}
            style={{ marginBottom: 4 }}
          >
            {product?.new ? '🎉신제품🎉' : null}
          </div>
          <h5>₩ {product?.price}</h5>
          <div>{product?.choice ? 'Conscious Choice' : null}</div>
          <DropdownButton
            title='사이즈 선택'
            data-bs-theme='dark'
            variant='secondary'
            style={{ margin: '10px 0' }}
          >
            {product?.size.map((s) => (
              <Dropdown.Item>{s}</Dropdown.Item>
            ))}
          </DropdownButton>
          <Button variant='outline-dark'>추가</Button>
        </Col>
      </Row>
    </Container>
  );
}
