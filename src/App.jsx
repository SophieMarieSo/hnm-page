import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Navbar from './component/Navbar';
import { useState } from 'react';

function App() {
    const [auth, setAuth] = useState(true);
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<ProductAll />} />
                <Route path='/login' element={<Login setAuth={setAuth} />} />
                <Route path='/product/:id' element={<ProductDetail />} />
            </Routes>
        </div>
    );
}

export default App;
