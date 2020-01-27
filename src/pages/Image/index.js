import React, { Component } from "react";
import { api } from "../../services/api";
import imageLoading from '../../assets/images/loading.gif';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import * as actions from '../../actions';
import './style.css';
import iconView from '../../assets/icons/visibility.png';
import iconLike from '../../assets/icons/like.png';
import iconStar from '../../assets/icons/star.png';

class Image extends Component {

    state = {
        loading: false,
        imageData: {},
        error: false,
    }

    componentDidMount() {
     
        const {id} = this.props.match.params;
        this.setState({
            loading: true
        })

        api.get('', {params: {
            id
        }})
        .then(response => {
            this.setState({
                imageData: response.data.hits,
                error: false,
                loading: false
            })

        })
        .catch(error => {
            this.setState({
                imageData: {},
                error: true,
                loading: false
            })
        })

    }

    render() {

        let container;
        
        if (this.state.loading) {
            container = <img src={imageLoading} alt="Carregando" />
        } else {
            if (!this.state.error) {
                if (this.state.imageData.length) {
                    container = <div className="container-image-open">
                        {this.state.imageData.map((image) => (
                            <div className="container-image-data" key={image.id}>
                                <img src={image.largeImageURL} alt="Imagem" />

                                <div className="image-data">
                                    <div className="author-info">
                                        <img src={image.userImageURL} alt="Foto do autor" />
                                        <p>{image.user}</p>
                                    </div>
                                    <div className="image-info">
                                        <div className="view">
                                            <img src={iconView} alt="Icone olho" />
                                            {image.views}
                                        </div>
                                        <div className="likes">
                                            <img src={iconLike} alt="Icone curtida" />
                                            {image.likes}
                                        </div>
                                        <div className="favorites">
                                            <img src={iconStar} alt="Icone estrela" />
                                            {image.favorites}
                                        </div>

                                    </div>

                                    {console.log(image)}
                                </div>
                            </div>
                        ))}

                    </div>    
                }
                
            }
        }

        return (
            <div className="container-image-page">
                <Link to="/">Voltar</Link>
                {container}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    images: state.searchImage,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Image);