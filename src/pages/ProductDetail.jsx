import React, { useEffect } from 'react';
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';

export default function ProductDetail() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productItem);
  const { id } = useParams();
  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id));
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className='product-img'>
          <img src={product?.img} alt='' />
        </Col>
        <Col xs={12} md={6}>
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
