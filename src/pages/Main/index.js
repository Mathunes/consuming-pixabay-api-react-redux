import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardImage from '../../components/CardImage';
import imageLoading from '../../assets/images/loading.gif';

class Main extends Component {
  
    render() {
        let container;
        let { loading, error, found } = this.props.images;

        if (!loading) {
            if (found) {
                container = <CardImage imagesData={this.props.images.images.data.hits} />
            } else {
                container = <p>Não encontrado</p>
            }
            
        } else {
            container = <img src={imageLoading} alt="Carregando" />
        }

        return (
            <main>
                <div className="container">
                    {container}
                </div>
                
            </main>
        )
    }
}

const mapStateToProps = state => ({
    images: state.searchImage
});

export default connect(mapStateToProps)(Main);