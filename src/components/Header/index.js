import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <img src="" alt="logo"></img>
                <form>
                    <input type="text" placeholder="Buscar imagens..." />
                    <button type="submit">Buscar</button>
                </form>
            </header>
        )
    }
}