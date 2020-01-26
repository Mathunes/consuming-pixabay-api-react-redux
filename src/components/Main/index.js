import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardImage from '../CardImage';

class Main extends Component {
    
    render() {

        let container;

        if (!this.props.images.loading) {
            if (this.props.images.found) {
                
                // container = <p>Encontrado</p>
                console.log(this.props.images.images.data);
                
                container = <CardImage imagesData={this.props.images.images.data.hits} />

            } else {
                container = <p>Não encontrado</p>
            }
            
        } else {
            container = <p>Carregando</p>
        }

        return (
            <main>
                <div className="container-images">
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