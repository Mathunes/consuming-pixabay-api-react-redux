import React, { Component } from 'react';
import logoPixabay from '../../assets/images/pixabay-logo.png';
import './style.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions';

class Header extends Component {
    state = {
        imageSearch: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.searchImage(this.state.imageSearch);
    }

    render() {

        return (
            <header>
                <img src={logoPixabay} alt="logo"></img>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Buscar imagens..." onChange={(e) => {this.setState({imageSearch: e.target.value})}}/>
                    <button type="submit">Buscar</button>
                </form>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    images: state.images
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(searchActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header);