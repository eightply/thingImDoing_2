
import {  View,  StyleSheet, Text,  Button} from 'react-native';
import PropTypes from 'prop-types';
import React, {useState}from 'react';

import NavigationBar from '../components/NavigationBar';
import CommentList from '../components/CommentList';
import CommentInput from '../components/CommentInput';

export default function Comment({
    title,
    color,
    item,
    id,
    deleteCommentFromSource,
}) {
    function deleteCommentHandler(){
        console.log("delete comment");
        console.log("text",item);
        console.log(id);
        deleteCommentFromSource(id, item) // usually you would pass in comment id 
    }

    return (
        <View key={id} style={styles.comment}>
            <Text>{item}</Text>
            <Button
            onPress={deleteCommentHandler}
            title={title}
            color={color}
            accessibilityLabel="Delete comments"
            />
        </View>
    );
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