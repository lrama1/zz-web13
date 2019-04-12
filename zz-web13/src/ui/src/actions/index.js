/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */

export function questionFetchSuccess(question){
    console.log('DISPATCHING SUCCESS', question );
    return {
        type: 'QUESTION_FETCH_SUCCESS',
        question: question
    }
}

export function questionFetchError(error){
    return {
        type: 'QUESTION_FETCH_ERROR',
        error: error
    }
}

export function fetchQuestion(url){
    console.log('Fetch of single question Invoked');
    return dispatch => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                dispatch(questionFetchSuccess(data))
            })
            .catch(() => dispatch(questionFetchError(true)))
    }
}

export function editQuestion(name, value){    
    return {
        type: 'QUESTION_EDIT',
        name,
        value
    }
}

export function saveQuestionSuccess(question){
    return {
        type: 'QUESTION_SAVE_SUCCESS',
        question: question
    }
}

export function saveQuestionError(question){
    return {
        type: 'QUESTION_SAVE_ERROR',
        question: question
    }
}

export function saveQuestion(url, question){
    return dispatch => {
        fetch(url,{
          method: 'put',
          body: JSON.stringify(question),
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
        })
            .then(response => response.json())
            .then(data => {
                dispatch(saveQuestionSuccess(data))
            })
            .catch(() => dispatch(saveQuestionError(true)))
    }
}

/*---------------------------------------------------------*/
export function questionsFetchSuccess(questions){
    console.log('DISPATCHING SUCCESS', questions );
    return {
        type: 'QUESTIONS_FETCH_SUCCESS',
        questions: questions
    }
}

export function questionsFetchError(error){
    return {
        type: 'QUESTIONS_FETCH_ERROR',
        error: error
    }
}

export function fetchAllQuestions(url){
    console.log('Fetch Invoked');
    return dispatch => {
        fetch(url)
        .then(response => response.json())
        .then(data => {            
            dispatch(questionsFetchSuccess(data.rows))
        })
        .catch(() => dispatch(questionsFetchError(true)))
    }
}

/*--------------------------------------------------------*/
export function updateQuestionAnswer(questionId, questionAnswer){
    return {
        type: 'UPDATE_QUESTION_ANSWER',
        questionId,
        questionAnswer
    }
}