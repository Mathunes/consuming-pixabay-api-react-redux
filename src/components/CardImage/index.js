import React, { Component } from 'react';

export default class CardImage extends Component {
    render() {
        return (
            <div className="container-images">
                {this.props.imagesData.map((image) => {
                    return (
                        <img key={image.id} src={image.largeImageURL} alt="Imagem" />
                    )
                })}
            </div>
        )
    }
}