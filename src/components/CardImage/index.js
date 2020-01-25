import React, { Component } from 'react';

export default class CardImage extends Component {
    render() {
        return (
            <div className="image-container">
                <img src={this.props.imageData} alt="Imagem" />
            </div>
        )
    }
}