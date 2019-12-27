import React from 'react'
import {DataTable} from 'primereact/components/datatable/DataTable'
import {Column} from 'primereact/components/column/Column'

function RelationshipMappingList({history, fetchRelationshipMapping, fetchAllRelationshipMappings, relationshipMappings, first, totalRecords}){

    function pageAction({first,rows, page}){
        console.log(first)
        fetchAllRelationshipMappings('relationshipmappings?per_page=' + rows + '&page=' + (page+1), first )
    }
    
    function buttonClicked(event){
        fetchRelationshipMapping('relationshipmapping/' + event.target.value)
        //tell route to display the Edit screen
        history.push({pathname: '/relationshipMapping'});
    }

    function actionTemplate(rowData, column){
        return (
            <button id={rowData.relId} value={rowData.relId} onClick={buttonClicked}>Edit</button>
        )
    }
       
    /*
    render a table component
     */
    return (
        <div>
        <DataTable first={first} paginator={true} value={relationshipMappings} lazy={true} rows={10} totalRecords={totalRecords}
            onPage={pageAction} selectionMode="single">
                <Column field="relId" header="RELID"/>
                <Column field="sourceItemId" header="SOURCEITEMID"/>
                <Column field="targetItemId" header="TARGETITEMID"/>
                <Column body={actionTemplate}/>
        </DataTable>
        </div>
    )
};

export default RelationshipMappingList;