//DomainDetail-template.js
import React from 'react'

function RelationshipTypeEdit({selectedRelationshipType, onEditRelationshipType, onSaveRelationshipType}) {

    function buttonEventHandler(event) {
        onSaveRelationshipType('relationshiptype/' + selectedRelationshipType.relTypeId,
            selectedRelationshipType);
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="relTypeId">relTypeId</label>
                    <input className="form-control" id="relTypeId" name="relTypeId"
                           value={selectedRelationshipType.relTypeId}
                           onChange={onEditRelationshipType}/>
                </div>
                <div className="form-group">
                    <label htmlFor="relTypeCode">relTypeCode</label>
                    <input className="form-control" id="relTypeCode" name="relTypeCode"
                           value={selectedRelationshipType.relTypeCode}
                           onChange={onEditRelationshipType}/>
                </div>
                <div className="form-group">
                    <label htmlFor="relTypeName">relTypeName</label>
                    <input className="form-control" id="relTypeName" name="relTypeName"
                           value={selectedRelationshipType.relTypeName}
                           onChange={onEditRelationshipType}/>
                </div>
                <div className="form-group">
                    <label htmlFor="relTypeDesc">relTypeDesc</label>
                    <input className="form-control" id="relTypeDesc" name="relTypeDesc"
                           value={selectedRelationshipType.relTypeDesc}
                           onChange={onEditRelationshipType}/>
                </div>

                <button id="saveButton" onClick={buttonEventHandler}>Save</button>
            </form>
        </div>
    );
}

export default RelationshipTypeEdit;