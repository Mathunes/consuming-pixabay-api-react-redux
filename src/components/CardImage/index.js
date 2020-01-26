import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as openImage from '../../actions';

class CardImage extends Component {

    handleClickImage = (image) => {
        this.props.openImage(image);
    }

    render() {
        return (
            <div className="container-images">
                {this.props.imagesData.map((image) => {
                    return (
                        <img key={image.id} src={image.largeImageURL} alt="Imagem" onClick={() => this.handleClickImage(image)}/>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    imageData: state.openImage,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(openImage, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardImage);