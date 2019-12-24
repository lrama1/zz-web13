//DomainDetail-template.js
import React from 'react'

function ItemAttrTypeDatatypeEdit({selectedItemAttrTypeDatatype, onEditItemAttrTypeDatatype, onSaveItemAttrTypeDatatype}){

    function buttonEventHandler(event){
        onSaveItemAttrTypeDatatype('itemattrtypedatatype/' + selectedItemAttrTypeDatatype.itemAttrTypeDatatypeCode,
        		selectedItemAttrTypeDatatype);
        event.preventDefault();
    }

    return(
      <div>
          <form>
                        <div className="form-group">
		      <label htmlFor="itemAttrTypeDatatypeCode">itemAttrTypeDatatypeCode</label>
		      <input className="form-control" id="itemAttrTypeDatatypeCode" name="itemAttrTypeDatatypeCode" value={selectedItemAttrTypeDatatype.itemAttrTypeDatatypeCode}
		          onChange={onEditItemAttrTypeDatatype}/>
		    </div>
		                <div className="form-group">
		      <label htmlFor="itemAttrTypeDatatypeName">itemAttrTypeDatatypeName</label>
		      <input className="form-control" id="itemAttrTypeDatatypeName" name="itemAttrTypeDatatypeName" value={selectedItemAttrTypeDatatype.itemAttrTypeDatatypeName}
		          onChange={onEditItemAttrTypeDatatype}/>
		    </div>
		                <div className="form-group">
		      <label htmlFor="itemAttrTypeDatatypeDesc">itemAttrTypeDatatypeDesc</label>
		      <input className="form-control" id="itemAttrTypeDatatypeDesc" name="itemAttrTypeDatatypeDesc" value={selectedItemAttrTypeDatatype.itemAttrTypeDatatypeDesc}
		          onChange={onEditItemAttrTypeDatatype}/>
		    </div>
		                <div className="form-group">
		      <label htmlFor="regexPattern">regexPattern</label>
		      <input className="form-control" id="regexPattern" name="regexPattern" value={selectedItemAttrTypeDatatype.regexPattern}
		          onChange={onEditItemAttrTypeDatatype}/>
		    </div>
		    		    
            <button id="saveButton" onClick={buttonEventHandler}>Save</button>
          </form>
      </div>
    );
}

export default ItemAttrTypeDatatypeEdit;