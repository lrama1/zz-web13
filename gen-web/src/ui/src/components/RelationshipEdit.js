//DomainDetail-template.js
import React from 'react'

function RelationshipEdit({selectedRelationship, onEditRelationship, onSaveRelationship}){

    function buttonEventHandler(event){
        onSaveRelationship('relationship/' + selectedRelationship.relId,
        		selectedRelationship);
        event.preventDefault();
    }

    return(
      <div>
          <form>
                        <div className="form-group">
		      <label htmlFor="relId">relId</label>
		      <input className="form-control" id="relId" name="relId" value={selectedRelationship.relId}
		          onChange={onEditRelationship}/>
		    </div>
		                <div className="form-group">
		      <label htmlFor="relName">relName</label>
		      <input className="form-control" id="relName" name="relName" value={selectedRelationship.relName}
		          onChange={onEditRelationship}/>
		    </div>
		                <div className="form-group">
		      <label htmlFor="relDesc">relDesc</label>
		      <input className="form-control" id="relDesc" name="relDesc" value={selectedRelationship.relDesc}
		          onChange={onEditRelationship}/>
		    </div>
		    		    
            <button id="saveButton" onClick={buttonEventHandler}>Save</button>
          </form>
      </div>
    );
}

export default RelationshipEdit;