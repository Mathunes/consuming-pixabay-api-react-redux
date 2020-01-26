import React, { Component } from "react";
import { api } from "../../services/api";
import imageLoading from '../../assets/images/loading.gif';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Image extends Component {

    state = {
        loading: false,
        imageData: {},
        error: false
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

            
        setInterval(() => {
            console.log(this.props)
        }, 2000);

        if (this.state.loading) {
            container = <img src={imageLoading} alt="Carregando" />
        } else {
            if (!this.state.error) {
                if (this.state.imageData.length) {
                    container = <div className="container-image-open">
                        {this.state.imageData.map((image) => (
                            <img key={image.id} src={image.largeImageURL} alt="Imagem" />
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

// const mapStateToProps = state => {
//     images: state.searchImage
// }

// export default connect(mapStateToProps)(image);

const mapStateToProps = state => ({
    images: state.searchImage
});

export default connect(mapStateToProps)(Image);