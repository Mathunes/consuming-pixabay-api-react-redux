import React, { Component } from 'react';
import logoPixabay from '../../assets/images/pixabay-logo.png';
import './style.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <img src={logoPixabay} alt="logo"></img>
                <form>
                    <input type="text" placeholder="Buscar imagens..." />
                    <button type="submit">Buscar</button>
                </form>
            </header>
        )
    }
}