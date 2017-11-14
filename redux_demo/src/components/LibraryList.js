import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        return;
    }
}

// map the global "state" object inside the redux store
// and provides it as prop
const mapStateToProps = state => {
    return { dataToShow : state.libraries };
};

export default connect(mapStateToProps)(LibraryList);