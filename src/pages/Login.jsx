import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login({ setAuth }) {
    return (
        <Container>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    setAuth(true);
                }}
            >
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>이메일</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                </Form.Group>
                <Button variant='danger' type='submit'>
                    로그인
                </Button>
            </Form>
        </Container>
    );
}
