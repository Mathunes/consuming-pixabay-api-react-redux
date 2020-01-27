import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardImage from '../../components/CardImage';
import imageLoading from '../../assets/images/loading.gif';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Header from '../../components/Header';
import './style.css';

class Main extends Component {
  
    render() {
  
        let container;
        let { loading, found } = this.props.images;

        if (!loading) {
            if (found) {
                (this.props.images.images.data.totalHits) ? 
                container = <CardImage imagesData={this.props.images.images.data.hits} /> :
                container = <p>Não encontrado</p>
            } else {
                container = <p>Não encontrado</p>
            }
            
        } else {
            container = <img src={imageLoading} alt="Carregando" className="image-loading" />
        }
        
        return (
            <main>
                <div className="container">
                    <Header />
                    {container}
                </div>
                
            </main>
        )
    }
}

const mapStateToProps = state => ({
    images: state.searchImage
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main);