import React from 'react'
import {DataTable} from 'primereact/components/datatable/DataTable'
import {Column} from 'primereact/components/column/Column'

function ItemAttributeTypeList({history, fetchItemAttributeType, fetchAllItemAttributeTypes, itemAttributeTypes, first, totalRecords}){

    function pageAction({first,rows, page}){
        console.log(first)
        fetchAllItemAttributeTypes('itemattributetypes?per_page=' + rows + '&page=' + (page+1), first )
    }
    
    function buttonClicked(event){
        fetchItemAttributeType('itemattributetype/' + event.target.value)
        //tell route to display the Edit screen
        history.push({pathname: '/itemAttributeType'});
    }

    function actionTemplate(rowData, column){
        return (
            <button id={rowData.itemAttrTypeId} value={rowData.itemAttrTypeId} onClick={buttonClicked}>Edit</button>
        )
    }
       
    /*
    render a table component
     */
    return (
        <div>
        <DataTable first={first} paginator={true} value={itemAttributeTypes} lazy={true} rows={10} totalRecords={totalRecords}
            onPage={pageAction} selectionMode="single">
                <Column field="itemAttrTypeId" header="ITEMATTRTYPEID"/>
                <Column field="itemAttrTypeCode" header="ITEMATTRTYPECODE"/>
                <Column field="itemAttrTypeName" header="ITEMATTRTYPENAME"/>
                <Column field="itemAttrTypeDesc" header="ITEMATTRTYPEDESC"/>
                <Column field="itemAttrTypeLength" header="ITEMATTRTYPELENGTH"/>
                <Column field="itemAttrTypeIsSearchable" header="ITEMATTRTYPEISSEARCHABLE"/>
                <Column field="itemAttrTypeDisplayIndex" header="ITEMATTRTYPEDISPLAYINDEX"/>
                <Column field="itemAttrTypeIsRequired" header="ITEMATTRTYPEISREQUIRED"/>
                <Column field="itemAttrTypeIsMetaphoneKey" header="ITEMATTRTYPEISMETAPHONEKEY"/>
                <Column field="itemAttrTypeMetaphonekeypos" header="ITEMATTRTYPEMETAPHONEKEYPOS"/>
                <Column body={actionTemplate}/>
        </DataTable>
        </div>
    )
};

export default ItemAttributeTypeList;