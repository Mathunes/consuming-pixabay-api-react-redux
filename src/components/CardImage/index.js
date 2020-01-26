import React, { Component } from 'react';

export default class CardImage extends Component {

    handleClickImage = (image) => {
        console.log(image.id);
    }

    render() {
        return (
            <div className="container-images">
                {this.props.imagesData.map((image) => {
                    return (
                        <img key={image.id} src={image.largeImageURL} alt="Imagem" onClick={() => this.handleClickImage(image)}/>
                        // <Link to={`image/id=${id}`}>
                            
                        // </Link>
                    )
                })}
            </div>
        )
    }
}