import React from 'react'

function QuestionList({history, fetchQuestion, questions, onRowEdit}){

    function selectQuestion(question){
        //dispatch an action to fetch the selected question
        fetchQuestion('/question/' + question.questionId)
        //tell route to display the Edit screen
        history.push({pathname: '/question'});
    }

    function rowEditHandler(event){
        const {name, value} = event.target;
        //console.log(name + '==>' + value)
        onRowEdit(name, value)
    }


    /*
    Iterate thru rows of questions and create a tr component for each
    NOTE: look up examples of the 'map' function on the web if you're unfamiliar with it
     */
    const rows = questions.map((question) => {
        return (
            <li key={question.questionId}>
                {question.questionText}
                <input name={question.questionId} onChange={rowEditHandler}/>
            </li>


        );
    });

    /*
    render a table component
     */
    return (
        <div>
            <ol>
                {rows}
            </ol>
        </div>
    )
};

export default QuestionList;