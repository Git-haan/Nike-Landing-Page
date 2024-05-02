import React, { useState } from 'react';

import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="px-10 py-5 fixed z-10 w-full bg-white">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img 
                        src={headerLogo}
                        alt="Logo"
                    />
                </a>
                <ul className={`flex-1 flex justify-center items-center gap-16 ${isMenuOpen ? 'hidden' : 'block'} max-lg:hidden`}>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={`max-lg:block ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <button className="flex items-center" onClick={toggleMenu}>
                        <img 
                            src={hamburger}
                            alt="Hamburger"
                            width={24}
                            height={24}
                            class="hover:scale-125"
                        />
                    </button>
                </div>
                
                <div className={`absolute w-full top-16 right-0 bg-white shadow-lg p-5 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-row justify-between">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="font-montserrat leading-normal text-lg font-semibold text-black hover:text-slate-600"
                                    onClick={toggleMenu}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </nav>
        </header>
    );
};

export default Nav;
