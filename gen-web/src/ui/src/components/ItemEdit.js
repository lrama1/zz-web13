//DomainDetail-template.js
import React from 'react'
import {Dropdown} from 'primereact/dropdown';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Fieldset} from 'primereact/fieldset';

function ItemEdit({history, selectedItem, onEditItem, onSaveItem, itemTypes, fetchItemAttribute, fetchRelationshipMapping}) {

    function buttonEventHandler(event) {
        onSaveItem('item/' + selectedItem.itemId,
            selectedItem);
        event.preventDefault();
    }

    const itemTypeOptions = itemTypes.records.map(itemType => {
        return {
            label: itemType.itemTypeName,
            value: itemType.itemTypeId
        }
    })

    function getAttributeValue(itemAttrTypeId) {
        //console.log('Lookking for ', itemAttrTypeId, selectedItem.itemAttributes)
        for (let index = 0; index < selectedItem.itemAttributes.length; index++) {
            console.log(selectedItem.itemAttributes[index].itemAttrTypeId, itemAttrTypeId)
            if (selectedItem.itemAttributes[index].itemAttrTypeId === itemAttrTypeId) {
                return selectedItem.itemAttributes[index].itemAttrValue;
            }
        }
        return "";
    }

    function getAttributeId(itemAttrTypeId) {
        //console.log('Lookking for ', itemAttrTypeId, selectedItem.itemAttributes)
        for (let index = 0; index < selectedItem.itemAttributes.length; index++) {
            console.log(selectedItem.itemAttributes[index].itemAttrTypeId, itemAttrTypeId)
            if (selectedItem.itemAttributes[index].itemAttrTypeId === itemAttrTypeId) {
                return selectedItem.itemAttributes[index].itemAttrId;
            }
        }
        return "-1";
    }


    function editItemAttribute(itemAttributeId, itemAttrTypeId, itemId) {
        //alert(itemAttributeId);
        fetchItemAttribute('itemattribute/' + itemAttributeId + "/" + itemAttrTypeId + "/" + itemId)
        history.push({pathname: '/itemattribute'});
    }

    const itemAttributeRows = selectedItem.itemType.itemAttributeTypesForItemTypeId.map((attribute, index) => {
        return (
            <Row key={attribute.itemAttrTypeId}>
                <Col>{attribute.itemAttrTypeName}</Col>
                <Col>
                    <input className="form-control" name={"itemAttributes." + index + ".itemAttrValue"}
                           value={getAttributeValue(attribute.itemAttrTypeId)}
                           readOnly={true}/>
                </Col>
                <Col>
                    <button
                        onClick={() => editItemAttribute(getAttributeId(attribute.itemAttrTypeId), attribute.itemAttrTypeId, selectedItem.itemId)}>Edit
                    </button>
                </Col>
            </Row>
        )
    });

    function addOrEditRelationshipMapping(sourceItemId, targetItemId, relationshipId){
        fetchRelationshipMapping('relationshipmapping/' + sourceItemId + "/" + targetItemId + "/" + relationshipId)
        history.push({pathname: '/relationshipmapping'});
    }

    const relationshipRows = selectedItem.relationshipMappingsForSourceItemId.map(relMapping => {
        return (
            <Row key={relMapping.id.relId}>
                <Col>{relMapping.relationship.relationshipType.relTypeName}</Col>
                <Col>{relMapping.itemByTargetItemId.itemName}</Col>
                <Col>
                    <button onClick={() => addOrEditRelationshipMapping(selectedItem.itemId, relMapping.itemByTargetItemId.itemId, relMapping.relationship.relId)}>Edit</button>
                </Col>
            </Row>
        )
    })



    return (
        <div>

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

            <div className="form-group">
                <Dropdown name="itemType.itemTypeId" value={selectedItem.itemType.itemTypeId}
                          options={itemTypeOptions} onChange={onEditItem}/>
            </div>

            <div>
                <Fieldset legend="Attributes">
                    {itemAttributeRows}
                </Fieldset>
                <Fieldset legend="Relationships">
                    {relationshipRows}
                    <button onClick={() => addOrEditRelationshipMapping(selectedItem.itemId, -1, -1)}>Add Relationship</button>
                </Fieldset>
            </div>

            <button id="saveButton" onClick={buttonEventHandler}>Save</button>

        </div>
    );
}

export default ItemEdit;