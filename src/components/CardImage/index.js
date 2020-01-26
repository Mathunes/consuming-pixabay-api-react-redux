import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CardImage extends Component {

    handleClickImage = (image) => {
        console.log(image.id);
    }

    render() {
        return (
            <div className="container-images">
                {this.props.imagesData.map((image) => {
                    return (
                        <Link to={`image/id=${image.id}`}>
                            <img key={image.id} src={image.largeImageURL} alt="Imagem" onClick={() => this.handleClickImage(image)}/>                            
                        </Link>
                    )
                })}
            </div>
        )
    }
}