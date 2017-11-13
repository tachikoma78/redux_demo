import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        return;
    }
}

// map the global state object in the app 
// and provides it as prop
const mapStateToProps = state => {
    console.log(state);
};

export default connect(mapStateToProps)(LibraryList);