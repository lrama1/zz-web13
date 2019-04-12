
export const questions = (state = [], action) => {
    if(action.type === 'QUESTIONS_FETCH_SUCCESS'){
        return action.questions        
    }else if(action.type === 'UPDATE_QUESTION_ANSWER'){
        console.log('UPDATING ANSWER')
        return updateAnswer(state, action.questionId, action.questionAnswer)
    }
    return state;
}

function updateAnswer(questions , questionId, questionAnswer) {
    const newArray = questions.map(question => {
        if(question.questionId !== questionId){
            console.log('Found')
            return question
        }else{
           return {...question, questionId, questionAnswer}
        }
    })

    console.log(newArray)
    return newArray
}

const initialQuestion = {
        questionId: ''    
            ,questionText: ''    
            ,questionAnswer: ''    
            ,visible: ''    
    }

export const question = (state = initialQuestion, action) => {
    if (action.type === 'QUESTION_FETCH_SUCCESS'){
        return action.question
        
    }else if(action.type ==='QUESTION_EDIT'){
        return {
        	...state,
        	[action.name]: action.value
        	}
    }else if(action.type ==='QUESTION_SAVE'){
        return action.question;
    }
    return state;
}
