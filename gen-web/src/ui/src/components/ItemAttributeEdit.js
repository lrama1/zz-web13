//DomainDetail-template.js
import React from 'react'

function ItemAttributeEdit({selectedItemAttribute, onEditItemAttribute, onSaveItemAttribute}){

    function buttonEventHandler(event){
        onSaveItemAttribute('itemattribute/' + selectedItemAttribute.itemAttrId,
        		selectedItemAttribute);
        event.preventDefault();
    }

    return(
      <div>
          <form>
                        <div className="form-group">
		      <label htmlFor="itemAttrId">itemAttrId</label>
		      <input className="form-control" id="itemAttrId" name="itemAttrId" value={selectedItemAttribute.itemAttrId}
		          onChange={onEditItemAttribute}/>
		    </div>
		                <div className="form-group">
		      <label htmlFor="itemAttrValue">itemAttrValue</label>
		      <input className="form-control" id="itemAttrValue" name="itemAttrValue" value={selectedItemAttribute.itemAttrValue}
		          onChange={onEditItemAttribute}/>
		    </div>
		    		    
            <button id="saveButton" onClick={buttonEventHandler}>Save</button>
          </form>
      </div>
    );
}

export default ItemAttributeEdit;