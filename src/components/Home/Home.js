import { NavbarTab } from '../Navbar/Navbar';
import { Content } from '../Content/Content';
import { Footer } from '../Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

import React from 'react';

import './Home.css';

export const Home = () => {
    return (
        <div className="home">
            <BrowserRouter>
                <NavbarTab></NavbarTab>
                <Content></Content>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    )
}
