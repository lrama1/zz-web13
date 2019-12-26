//DomainDetail-template.js
import React from 'react'
import {Dropdown} from 'primereact/dropdown';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ItemEdit({history, selectedItem, onEditItem, onSaveItem, itemTypes, fetchItemAttribute}) {

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

    function getAttributeValue(itemAttrTypeId){
        //console.log('Lookking for ', itemAttrTypeId, selectedItem.itemAttributes)
        for(let index = 0; index < selectedItem.itemAttributes.length; index++){
            console.log(selectedItem.itemAttributes[index].itemAttrTypeId, itemAttrTypeId)
            if(selectedItem.itemAttributes[index].itemAttrTypeId === itemAttrTypeId){
                return selectedItem.itemAttributes[index].itemAttrValue;
            }
        }
        return "";
    }

    function getAttributeId(itemAttrTypeId){
        //console.log('Lookking for ', itemAttrTypeId, selectedItem.itemAttributes)
        for(let index = 0; index < selectedItem.itemAttributes.length; index++){
            console.log(selectedItem.itemAttributes[index].itemAttrTypeId, itemAttrTypeId)
            if(selectedItem.itemAttributes[index].itemAttrTypeId === itemAttrTypeId){
                return selectedItem.itemAttributes[index].itemAttrId;
            }
        }
        return "-1";
    }


    function editItemAttribute(itemAttributeId, itemAttrTypeId, itemId){
        //alert(itemAttributeId);
        fetchItemAttribute('itemattribute/' + itemAttributeId + "/" + itemAttrTypeId + "/" + itemId)
        history.push({pathname: '/itemattribute'});
    }

    const itemAttributeRows = selectedItem.itemType.itemAttributeTypesForItemTypeId.map( (attribute, index) => {
        return(
            <Row key={attribute.itemAttrTypeId}>
                <Col>{attribute.itemAttrTypeName}</Col>
                <Col>
                    <input className="form-control"  name={"itemAttributes." + index + ".itemAttrValue"} value={getAttributeValue(attribute.itemAttrTypeId)}
                           readOnly={true}/>
                </Col>
                <Col>
                    <button onClick={()=> editItemAttribute(getAttributeId(attribute.itemAttrTypeId), attribute.itemAttrTypeId, selectedItem.itemId)}>Edit</button>
                </Col>
            </Row>
        )
    })

    return (
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

                <div className="form-group">
                 <Dropdown name="itemType.itemTypeId" value={selectedItem.itemType.itemTypeId}
                          options={itemTypeOptions} onChange={onEditItem}/>
                </div>

                <div>
                    {itemAttributeRows}
                </div>

                <button id="saveButton" onClick={buttonEventHandler}>Save</button>
            </form>
        </div>
    );
}

export default ItemEdit;