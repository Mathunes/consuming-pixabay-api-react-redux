import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
    
    render() {
        setInterval(() => console.log(this.props), 1000);
        return (
            <main>
                Oi
            </main>
        )
    }
}

const mapStateToProps = state => ({
    images: state.searchImage
});

export default connect(mapStateToProps)(Main);