import React, { Component } from 'react';
import './style.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <p>API de imagens disponibilizada pelo <a href="https://pixabay.com/api/docs/" target="_blank">Pixabay</a>.</p>
            </footer>
        )
    }
}