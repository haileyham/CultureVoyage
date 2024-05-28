import React, { useState } from 'react';

const Header: React.FC = () => {
    const [toggle, setToggle] = useState(false);

    const useToggle = () => {
        setToggle(!toggle);
    };

    return (
        <header>
            <div
                onClick={useToggle}
                className={toggle ? 'mNavToggle open' : 'mNavToggle'}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className={toggle ? 'navToggleOpen' : 'navToggleClose navPc'}>
                <a href="/Culture">전체행사</a>
                <a href="/" className="home">
                    <img src="/logo192.png" alt="Logo" />
                    <span>Culture-Voyage</span>
                </a>
                <a
                    href="https://github.com/haileyham/CultureVoyage"
                    target="_blank"
                >
                    새소식
                </a>
            </nav>
        </header>
    );
};

export default Header;
