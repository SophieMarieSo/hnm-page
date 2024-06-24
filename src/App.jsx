import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<ProductAll />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product/:id' element={<PrivateRoute />} />
            </Routes>
        </div>
    );
}

export default App;
