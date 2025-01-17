// Discord: tondap

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SwimmingPools from './pages/SwimmingPools';
import SharedLayout from './pages/SharedLayout';
import Transport from './pages/Transport';
import Error from './pages/Error';
import Home from './pages/Home';

import './App.scss';

const App = () => {
    return (
        <BrowserRouter basename="/portfolio/react/web-berlin">
            <Routes>
                <Route element={<SharedLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/swimmingpools" element={<SwimmingPools />} />
                    <Route path="/transport" element={<Transport />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
