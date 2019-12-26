import React from 'react'
import {DataTable} from 'primereact/components/datatable/DataTable'
import {Column} from 'primereact/components/column/Column'

function ItemAttributeList({history, fetchItemAttribute, fetchAllItemAttributes, itemAttributes, first, totalRecords}){

    function pageAction({first,rows, page}){
        console.log(first)
        fetchAllItemAttributes('itemattributes?per_page=' + rows + '&page=' + (page+1), first )
    }
    
    function buttonClicked(event){
        fetchItemAttribute('itemattribute/' + event.target.value)
        //tell route to display the Edit screen
        history.push({pathname: '/itemAttribute'});
    }

    function actionTemplate(rowData, column){
        return (
            <button id={rowData.itemAttrId} value={rowData.itemAttrId} onClick={buttonClicked}>Edit</button>
        )
    }
       
    /*
    render a table component
     */
    return (
        <div>
        <DataTable first={first} paginator={true} value={itemAttributes} lazy={true} rows={10} totalRecords={totalRecords}
            onPage={pageAction} selectionMode="single">
                <Column field="itemAttrId" header="ITEMATTRID"/>
                <Column field="itemAttrValue" header="ITEMATTRVALUE"/>
                <Column body={actionTemplate}/>
        </DataTable>
        </div>
    )
};

export default ItemAttributeList;