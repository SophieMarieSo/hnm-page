import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../redux/actions/authAction';

export default function Navbar() {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth.auth);
    const dispatch = useDispatch();
    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        '아동',
        'H&M Home',
        'Sale',
        '지속가능성',
    ];

    const search = (value) => {
        navigate(`/?q=${value}`);
    };

    return (
        <div>
            {/* login */}
            <div className='login-container'>
                <div
                    className='login-button-container'
                    onClick={() => {
                        if (auth) {
                            navigate('/');
                            dispatch(authAction.logout());
                        } else {
                            navigate('/login');
                        }
                    }}
                >
                    <FontAwesomeIcon icon={faUser} />
                    <div className='login-button'>
                        {auth ? '로그아웃' : '로그인'}
                    </div>
                </div>
            </div>

            {/* logo */}
            <div className='logo-section'>
                <img
                    className='logo-img'
                    width={100}
                    src='data:image/jpeg;base64,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'
                    alt=''
                    onClick={() => {
                        navigate('/');
                    }}
                />
            </div>

            {/* menu-item */}
            <div className='menu-section'>
                <ul className='menu-list'>
                    {menuList.map((menu, idx) => (
                        <li key={idx}>{menu}</li>
                    ))}
                </ul>
                <div className='search-section'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                        type='text'
                        className='search'
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') search(e.target.value);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
