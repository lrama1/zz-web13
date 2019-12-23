import React from 'react'
import {DataTable} from 'primereact/components/datatable/DataTable'
import {Column} from 'primereact/components/column/Column'

function ItemList({history, fetchItem, fetchAllItems, items, first, totalRecords}){

    function pageAction({first,rows, page}){
        console.log(first)
        fetchAllItems('items?per_page=' + rows + '&page=' + (page+1), first )
    }
    
    function buttonClicked(event){
        fetchItem('item/' + event.target.value)
        //tell route to display the Edit screen
        history.push({pathname: '/item'});
    }

    function actionTemplate(rowData, column){
        return (
            <button id={rowData.itemId} value={rowData.itemId} onClick={buttonClicked}>Edit</button>
        )
    }
       
    /*
    render a table component
     */
    return (
        <div>
        <DataTable first={first} paginator={true} value={items} lazy={true} rows={10} totalRecords={totalRecords}
            onPage={pageAction} selectionMode="single">
                <Column field="itemId" header="ITEMID"/>
                <Column field="itemCode" header="ITEMCODE"/>
                <Column field="itemName" header="ITEMNAME"/>
                <Column body={actionTemplate}/>
        </DataTable>
        </div>
    )
};

export default ItemList;