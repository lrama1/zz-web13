//DomainDetail-template.js
import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function ItemTypeEdit({history, selectedItemType, onEditItemType, onSaveItemType, addNewItemAttributeType}) {

    function buttonEventHandler(event) {
        onSaveItemType('itemtype/' + selectedItemType.itemTypeId,
            selectedItemType);
        event.preventDefault();
    }

    function addNewItemAttributeTypeLocal(parentItemTypeId){
        addNewItemAttributeType(parentItemTypeId);
        history.push({pathname: '/itemattributetype'});
    }

    const itemAttributeTypeHeader = (
        <Row>
            <Col>Code</Col><Col>Name</Col>
        </Row>
    )

    const itemAttributeTypeRows = selectedItemType.itemAttributeTypesForItemTypeId.map(attribute => {
        return(
        <Row>
            <Col>
                <input id="itemAttrTypeCode" value={attribute.itemAttrTypeCode} readOnly={true}/>
            </Col>
            <Col>
                <input id="itemAttrTypeName" value={attribute.itemAttrTypeName} readOnly={true}/>
            </Col>
        </Row>
        )
    })

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="itemTypeId">itemTypeId</label>
                    <input className="form-control" id="itemTypeId" name="itemTypeId"
                           value={selectedItemType.itemTypeId}
                           onChange={onEditItemType}/>
                </div>
                <div className="form-group">
                    <label htmlFor="itemTypeCode">itemTypeCode</label>
                    <input className="form-control" id="itemTypeCode" name="itemTypeCode"
                           value={selectedItemType.itemTypeCode}
                           onChange={onEditItemType}/>
                </div>
                <div className="form-group">
                    <label htmlFor="itemTypeName">itemTypeName</label>
                    <input className="form-control" id="itemTypeName" name="itemTypeName"
                           value={selectedItemType.itemTypeName}
                           onChange={onEditItemType}/>
                </div>
                <div className="form-group">
                    <label htmlFor="itemTypeDesc">itemTypeDesc</label>
                    <input className="form-control" id="itemTypeDesc" name="itemTypeDesc"
                           value={selectedItemType.itemTypeDesc}
                           onChange={onEditItemType}/>
                </div>

                {itemAttributeTypeHeader}
                {itemAttributeTypeRows}
                <button id="addNewAttributeType" onClick={() => addNewItemAttributeTypeLocal(selectedItemType.itemTypeId)}>Add Attr Type</button>

                <button id="saveButton" onClick={buttonEventHandler}>Save</button>
            </form>
        </div>
    );
}

export default ItemTypeEdit;