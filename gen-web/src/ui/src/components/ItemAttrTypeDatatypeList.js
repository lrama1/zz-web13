import React from 'react'
import {DataTable} from 'primereact/components/datatable/DataTable'
import {Column} from 'primereact/components/column/Column'

function ItemAttrTypeDatatypeList({history, fetchItemAttrTypeDatatype, fetchAllItemAttrTypeDatatypes, itemAttrTypeDatatypes, first, totalRecords}){

    function pageAction({first,rows, page}){
        console.log(first)
        fetchAllItemAttrTypeDatatypes('itemattrtypedatatypes?per_page=' + rows + '&page=' + (page+1), first )
    }
    
    function buttonClicked(event){
        fetchItemAttrTypeDatatype('itemattrtypedatatype/' + event.target.value)
        //tell route to display the Edit screen
        history.push({pathname: '/itemAttrTypeDatatype'});
    }

    function actionTemplate(rowData, column){
        return (
            <button id={rowData.itemAttrTypeDatatypeCode} value={rowData.itemAttrTypeDatatypeCode} onClick={buttonClicked}>Edit</button>
        )
    }
       
    /*
    render a table component
     */
    return (
        <div>
        <DataTable first={first} paginator={true} value={itemAttrTypeDatatypes} lazy={true} rows={10} totalRecords={totalRecords}
            onPage={pageAction} selectionMode="single">
                <Column field="itemAttrTypeDatatypeCode" header="ITEMATTRTYPEDATATYPECODE"/>
                <Column field="itemAttrTypeDatatypeName" header="ITEMATTRTYPEDATATYPENAME"/>
                <Column field="itemAttrTypeDatatypeDesc" header="ITEMATTRTYPEDATATYPEDESC"/>
                <Column field="regexPattern" header="REGEXPATTERN"/>
                <Column body={actionTemplate}/>
        </DataTable>
        </div>
    )
};

export default ItemAttrTypeDatatypeList;