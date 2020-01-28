import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class CardImage extends Component {

    render() {
        return (
            <div className="container-images">
                {this.props.imagesData.map((image) => {
                    return (
                        <Link key={image.id} to={process.env.PUBLIC_URL + `/image/${image.id}`}>
                            <img src={image.largeImageURL} alt="Imagem"/>
                        </Link>
                    )
                })}
            </div>
        )
    }
}