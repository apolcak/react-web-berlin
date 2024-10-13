// Discord: tondap

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Swimmingpools from './pages/Swimmingpools';
import SharedLayout from './pages/SharedLayout';
import Transport from './pages/Transport';
import Error from './pages/Error';
import Home from './pages/Home';

import './App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<SharedLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/swimmingpools" element={<Swimmingpools />} />
                    <Route path="/transport" element={<Transport />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
