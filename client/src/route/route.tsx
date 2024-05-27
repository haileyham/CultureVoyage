import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Searching from '../pages/search/Search';
import Culture from '../pages/search/Culture';

export default function route() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Searching />} />
                <Route path="/culture" element={<Culture />} />
            </Routes>
        </BrowserRouter>
    );
}
