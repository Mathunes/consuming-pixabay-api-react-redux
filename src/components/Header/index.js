import React, { Component } from 'react';
import logoPixabay from '../../assets/images/pixabay-logo.png';
import './style.css';
import searchImage from '../../assets/icons/search.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions';

class Header extends Component {
    state = {
        imageSearch: '',
    }

    componentDidMount() {
        this.props.searchImage('');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.searchImage(this.state.imageSearch);

    }

    render() {

        return (
            <header>
                <img src={logoPixabay} alt="logo" className="logo-pixabay"></img>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" className="btn-search">
                        <img src={searchImage} alt="buscar" />
                    </button>
                    <input type="text" placeholder="Procurar imagens..." onChange={(e) => {this.setState({imageSearch: e.target.value})}}/>
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