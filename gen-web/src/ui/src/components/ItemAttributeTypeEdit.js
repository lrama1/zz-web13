//DomainDetail-template.js
import React from 'react'
import {Dropdown} from 'primereact/dropdown';

function ItemAttributeTypeEdit({selectedItemAttributeType, onEditItemAttributeType, onSaveItemAttributeType}) {

    function buttonEventHandler(event) {
        onSaveItemAttributeType('itemattributetype/' + selectedItemAttributeType.itemAttrTypeId,
            selectedItemAttributeType);
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="itemAttrTypeId">itemAttrTypeId</label>
                    <input className="form-control" id="itemAttrTypeId" name="itemAttrTypeId"
                           value={selectedItemAttributeType.itemAttrTypeId}
                           onChange={onEditItemAttributeType}/>
                </div>
                <div className="form-group">
                    <label htmlFor="itemAttrTypeCode">itemAttrTypeCode</label>
                    <input className="form-control" id="itemAttrTypeCode" name="itemAttrTypeCode"
                           value={selectedItemAttributeType.itemAttrTypeCode}
                           onChange={onEditItemAttributeType}/>
                </div>
                <div className="form-group">
                    <label htmlFor="itemAttrTypeName">itemAttrTypeName</label>
                    <input className="form-control" id="itemAttrTypeName" name="itemAttrTypeName"
                           value={selectedItemAttributeType.itemAttrTypeName}
                           onChange={onEditItemAttributeType}/>
                </div>
                <div className="form-group">
                    <label htmlFor="itemAttrTypeDesc">itemAttrTypeDesc</label>
                    <input className="form-control" id="itemAttrTypeDesc" name="itemAttrTypeDesc"
                           value={selectedItemAttributeType.itemAttrTypeDesc}
                           onChange={onEditItemAttributeType}/>
                </div>


                <div className="form-group">
                    <label htmlFor="itemAttrTypeLength">itemAttrTypeLength</label>
                    <input className="form-control" id="itemAttrTypeLength" name="itemAttrTypeLength"
                           value={selectedItemAttributeType.itemAttrTypeLength}
                           onChange={onEditItemAttributeType}/>
                </div>
                <div className="form-group">
                    <label htmlFor="itemAttrTypeIssearchable">itemAttrTypeIssearchable</label>
                    <input className="form-control" id="itemAttrTypeIssearchable" name="itemAttrTypeIssearchable"
                           value={selectedItemAttributeType.itemAttrTypeIssearchable}
                           onChange={onEditItemAttributeType}/>
                </div>
                <div className="form-group">
                    <label htmlFor="itemAttrTypeDisplayIndex">itemAttrTypeDisplayIndex</label>
                    <input className="form-control" id="itemAttrTypeDisplayIndex" name="itemAttrTypeDisplayIndex"
                           value={selectedItemAttributeType.itemAttrTypeDisplayIndex}
                           onChange={onEditItemAttributeType}/>
                </div>
                <div className="form-group">
                    <label htmlFor="itemAttrTypeIsRequired">itemAttrTypeIsRequired</label>
                    <input className="form-control" id="itemAttrTypeIsRequired" name="itemAttrTypeIsRequired"
                           value={selectedItemAttributeType.itemAttrTypeIsRequired}
                           onChange={onEditItemAttributeType}/>
                </div>

                <button id="saveButton" onClick={buttonEventHandler}>Save</button>
            </form>
        </div>
    );
}

export default ItemAttributeTypeEdit;