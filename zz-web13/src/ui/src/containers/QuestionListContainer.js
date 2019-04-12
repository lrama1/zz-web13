import React from 'react';
import {connect, dispatch} from 'react-redux';
import QuestionList from '../components/QuestionList'
import {fetchQuestion, updateQuestionAnswer} from '../actions';


const mapStateToProps = (state) => {
    console.log(state);
    return {
        questions: state.questions
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        onSelectQuestion: (question) => dispatch(fetchQuestion(question)),
        fetchQuestion: (url) => dispatch(fetchQuestion(url)),
        onRowEdit: (questionId, questionAnswer) => {
            console.log('should dispatch update of ' + questionId + ' with answer ' + questionAnswer)
            dispatch(updateQuestionAnswer(questionId, questionAnswer))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);