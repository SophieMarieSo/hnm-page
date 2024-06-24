import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authAction } from '../redux/actions/authAction';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginInfo, setLoginInfo] = useState({ id: '', pw: '' });
    return (
        <Container>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(authAction.login(loginInfo.id, loginInfo.pw));
                    navigate('/');
                }}
            >
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>이메일</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        onChange={(e) =>
                            setLoginInfo({ ...loginInfo, id: e.target.value })
                        }
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        onChange={(e) =>
                            setLoginInfo({ ...loginInfo, pw: e.target.value })
                        }
                    />
                </Form.Group>
                <Button variant='danger' type='submit'>
                    로그인
                </Button>
            </Form>
        </Container>
    );
}
