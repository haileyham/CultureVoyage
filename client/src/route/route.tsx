import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Searching = lazy(() => import('../pages/search/Search'));
const Culture = lazy(() => import('../pages/search/Culture'));

export default function route() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Searching />} />
                    <Route path="/culture" element={<Culture />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
