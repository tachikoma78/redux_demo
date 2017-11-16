import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    
    renderDescription() {
        const { descriptionStyle } = styles;
        const { libraryItem, selectedLibraryId } = this.props;
        if(libraryItem.id === selectedLibraryId){
            console.log(libraryItem.id +" "+ selectedLibraryId);
            return (
                <CardSection>
                    <Text style={descriptionStyle}>{libraryItem.description}</Text>
                </CardSection>
            );
        }   
    }
    
    render(){
        const { titleStyle } = styles;
        const { id, title } = this.props.libraryItem;
       
        return (
           <TouchableWithoutFeedback
                onPress={ () => this.props.selectLibrary(id)  }  //this is from action folder
           >
                <View>
                     <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    } 
}

const styles = {
    titleStyle:{
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle:{
        paddingLeft: 15
    }
};

// connect to the app state we want
const mapStateToProps = state => {
    return {
        selectedLibraryId: state.selectedLibraryId
    };
};

export default connect(mapStateToProps, actions)(ListItem);
