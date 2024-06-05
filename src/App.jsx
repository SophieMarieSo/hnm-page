import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import Navbar from './component/Navbar';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
    const [auth, setAuth] = useState(false);
    return (
        <div>
            <Navbar auth={auth} setAuth={setAuth} />
            <Routes>
                <Route path='/' element={<ProductAll />} />
                <Route path='/login' element={<Login setAuth={setAuth} />} />
                <Route
                    path='/product/:id'
                    element={<PrivateRoute auth={auth} />}
                />
            </Routes>
        </div>
    );
}

export default App;
