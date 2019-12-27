import React from 'react'
import {DataTable} from 'primereact/components/datatable/DataTable'
import {Column} from 'primereact/components/column/Column'

function RelationshipTypeList({history, fetchRelationshipType, fetchAllRelationshipTypes, relationshipTypes, first, totalRecords}){

    function pageAction({first,rows, page}){
        console.log(first)
        fetchAllRelationshipTypes('relationshiptypes?per_page=' + rows + '&page=' + (page+1), first )
    }
    
    function buttonClicked(id){
        fetchRelationshipType('relationshiptype/' + id)
        //tell route to display the Edit screen
        history.push({pathname: '/relationshipType'});
    }

    function actionTemplate(rowData, column){
        return (
            <button id={rowData.relTypeId} value={rowData.relTypeId} onClick={() => buttonClicked(rowData.relTypeId)}>Edit</button>
        )
    }
       
    /*
    render a table component
     */
    return (
        <div>
        <DataTable first={first} paginator={true} value={relationshipTypes} lazy={true} rows={10} totalRecords={totalRecords}
            onPage={pageAction} selectionMode="single">
                <Column field="relTypeCode" header="RELTYPECODE"/>
                <Column field="relTypeName" header="RELTYPENAME"/>
                <Column field="relTypeDesc" header="RELTYPEDESC"/>
                <Column body={actionTemplate}/>
        </DataTable>
            <button id="addNewRelTypeButton" onClick={() => buttonClicked("-1")}>Add New Rel Type</button>
        </div>
    )
};

export default RelationshipTypeList;