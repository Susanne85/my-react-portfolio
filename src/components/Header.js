import React from 'react';

import './styles/Header.css'

const myHeader = {backgroundColor:'blue'};
export default function Header() {
    return (
        <header className="header" style={myHeader} >
            <h1>Susanne's Portfolio</h1>
        </header>
    );
}