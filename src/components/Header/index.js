import React, { Component } from 'react';
import logoPixabay from '../../assets/images/pixabay-logo.png';
import './style.css';

export default class Header extends Component {
    state = {
        imageSearch: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.imageSearch);
    }

    render() {
        return (
            <header>
                <img src={logoPixabay} alt="logo"></img>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Buscar imagens..." onChange={(e) => {this.setState({imageSearch: e.target.value})}}/>
                    <button type="submit">Buscar</button>
                </form>
            </header>
        )
    }
}