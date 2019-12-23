//DomainDetail-template.js
import React from 'react'

function ItemEdit({selectedItem, onEditItem, onSaveItem}){

    function buttonEventHandler(event){
        onSaveItem('item/' + selectedItem.itemId,
        		selectedItem);
        event.preventDefault();
    }

    return(
      <div>
          <form>
                        <div className="form-group">
		      <label htmlFor="itemId">itemId</label>
		      <input className="form-control" id="itemId" name="itemId" value={selectedItem.itemId}
		          onChange={onEditItem}/>
		    </div>
		                <div className="form-group">
		      <label htmlFor="itemCode">itemCode</label>
		      <input className="form-control" id="itemCode" name="itemCode" value={selectedItem.itemCode}
		          onChange={onEditItem}/>
		    </div>
		                <div className="form-group">
		      <label htmlFor="itemName">itemName</label>
		      <input className="form-control" id="itemName" name="itemName" value={selectedItem.itemName}
		          onChange={onEditItem}/>
		    </div>
		    		    
            <button id="saveButton" onClick={buttonEventHandler}>Save</button>
          </form>
      </div>
    );
}

export default ItemEdit;