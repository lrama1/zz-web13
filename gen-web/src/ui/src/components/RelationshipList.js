import React from 'react'
import {DataTable} from 'primereact/components/datatable/DataTable'
import {Column} from 'primereact/components/column/Column'

function RelationshipList({history, fetchRelationship, fetchAllRelationships, relationships, first, totalRecords}){

    function pageAction({first,rows, page}){
        console.log(first)
        fetchAllRelationships('relationships?per_page=' + rows + '&page=' + (page+1), first )
    }
    
    function buttonClicked(event){
        fetchRelationship('relationship/' + event.target.value)
        //tell route to display the Edit screen
        history.push({pathname: '/relationship'});
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
        <DataTable first={first} paginator={true} value={relationships} lazy={true} rows={10} totalRecords={totalRecords}
            onPage={pageAction} selectionMode="single">
                <Column field="relId" header="RELID"/>
                <Column field="relName" header="RELNAME"/>
                <Column field="relDesc" header="RELDESC"/>
                <Column body={actionTemplate}/>
        </DataTable>
        </div>
    )
};

export default RelationshipList;