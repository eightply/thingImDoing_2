// Daniel Vestergaard

import { SafeAreaView, ViewPropTypes, Button} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import NavigationBar from '../components/NavigationBar';
import CommentList from '../components/CommentList';
import CommentInput from '../components/CommentInput';
import React, {useState} from 'react';

export default function Comments({
    style,
    onSubmitComment,
    onClose,
    commentsFromOutside, // not sure where this is then comming from but there needs this code to go. 


}) {
    const [comments, setComments] = useState(commentsFromOutside)
    deleteComment(comment_id) {
        const updatedList = comments.map(comment => {
            if comment.id !== comment_id:
                return comment
        })
        this.setComments(updatedList)
    }
    return (
        <SafeAreaView style = {style}>
            <NavigationBar
                title="Comments"
                leftText= 'Close'
                onPressLeftText= {onClose}
                />

                <CommentInput placeholder = "Leave a Comment" onSubmit={onSubmitComment} />

                <CommentList items ={comments} deleteComment={deleteComment} />

        </SafeAreaView>
    );
}

Comments.propTypes = {
    style: ViewPropTypes.style,
    comments: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmitComment: PropTypes.func.isRequired,
 };

 Comments.defaultProps = {
    style: null,
 };