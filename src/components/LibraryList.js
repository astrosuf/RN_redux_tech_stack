import React, {Component} from 'react';
import {connect} from 'react-redux';


class LibraryList extends Component {
    render() {
        return ;
    }
}

const mapStateToProps = state => {
    return {libraries: state.libraries}; //what ever object we return from mapStateToProps will show up as props in component
};

export default connect(mapStateToProps)(LibraryList); //connect calls another function and that function takes LibraryList as an argument