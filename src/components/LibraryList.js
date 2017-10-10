import React, {Component} from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    componentWillMount(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);

    }

    renderRow(library) {
        return <ListItem library={library}/>;
    }


    render() {
        return (
            <ListView 
                dataSource = {this.dataSource}
                renderRow = {this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return {libraries: state.libraries}; //what ever object we return from mapStateToProps will show up as props in component
};

export default connect(mapStateToProps)(LibraryList); //connect calls another function and that function takes LibraryList as an argument