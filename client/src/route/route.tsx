import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Searching from '../pages/search/Search';

export default function route() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Searching />} />
            </Routes>
        </BrowserRouter>
    );
}
