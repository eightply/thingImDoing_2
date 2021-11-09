import { ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';



export default class CommentList extends React.Component {
    
 
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
         };
    
      
       
    renderItem = (item, index) => (
        <View key={index} style={styles.comment}>
            <Text>{item}</Text>
            <Button
            onClick={this.props.deleteComment(item.id)}
            title="Delete"
            color="black"
            accessibilityLabel="Delete comments"
            />
        </View>
        );
        render() {
            const { items } = this.props;
            return <ScrollView>{items.map(this.renderItem) }  
            
            </ScrollView>;
        }

}



const styles = StyleSheet.create({
    comment: {
        marginLeft: 20,
        paddingVertical: 20,
        paddingRight: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'black',
    },

});