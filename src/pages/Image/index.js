import React, { Component } from "react";
import { api } from "../../services/api";
import imageLoading from '../../assets/images/loading.gif';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import './style.css';

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

        console.log(this.state.imageData)
        
        if (this.state.loading) {
            container = <img src={imageLoading} alt="Carregando" className="image-loading"/>
        } else {
            if (!this.state.error) {
                if (this.state.imageData.length) {
                    container = <div className="container-image">
                        {this.state.imageData.map((image) => (
                            <div className="container-image-open" key={image.id}>
                                <img src={image.largeImageURL} alt="Imagem" className="image" />

                                <div className="info">
                                    <div className="author-info">
                                        <img src={image.userImageURL} alt="Foto do autor" />
                                        <p>{image.user}</p>
                                    </div>
                                    <div className="image-info">
                                        <div className="view">{image.views}</div>
                                        <div className="likes">{image.likes}</div>
                                        <div className="favorites">{image.favorites}</div>
                                    </div>
                                    <button>Baixar</button>
                                </div>
                            </div>
                        ))}

                    </div>    
                }
                
            }
        }

        return (
            <div className="container">
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