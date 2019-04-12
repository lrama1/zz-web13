import React from 'react';
import {connect, dispatch} from 'react-redux';
import {editQuestion, saveQuestion} from '../actions';
import QuestionEdit from '../components/QuestionEdit';

const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedQuestion: state.question
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEditQuestion: (name, value) => {
            dispatch(editQuestion(name, value))
        },
        onSaveQuestion: (url, question) => {
            dispatch(saveQuestion(url, question))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(QuestionEdit);