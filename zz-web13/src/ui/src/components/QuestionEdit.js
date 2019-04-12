//DomainDetail-template.js
import React from 'react'

function QuestionEdit({selectedQuestion, onEditQuestion, onSaveQuestion}){
    function changeHandler(event){
        const {name, value} = event.target;
        onEditQuestion([name], value);
    }

    function buttonEventHandler(event){
        onSaveQuestion('/question/' + selectedQuestion.questionId,
        		selectedQuestion);
        event.preventDefault();
    }

    return(
      <div>
          <form>
                        <div className="form-group">
		      <label htmlFor="questionId">questionId</label>
		      <input className="form-control" id="questionId" name="questionId" value={selectedQuestion.questionId}
		          onChange={changeHandler}/>
		    </div>
		                <div className="form-group">
		      <label htmlFor="questionText">questionText</label>
		      <input className="form-control" id="questionText" name="questionText" value={selectedQuestion.questionText}
		          onChange={changeHandler}/>
		    </div>
		                <div className="form-group">
		      <label htmlFor="questionAnswer">questionAnswer</label>
		      <input className="form-control" id="questionAnswer" name="questionAnswer" value={selectedQuestion.questionAnswer}
		          onChange={changeHandler}/>
		    </div>
		                <div className="form-group">
		      <label htmlFor="visible">visible</label>
		      <input className="form-control" id="visible" name="visible" value={selectedQuestion.visible}
		          onChange={changeHandler}/>
		    </div>
		    		    
            <button id="saveButton" onClick={buttonEventHandler}>Save</button>
          </form>
      </div>
    );
}

export default QuestionEdit;