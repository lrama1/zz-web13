
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {clickElement} from '../utils/TestUtils';
import ItemAttrTypeDatatypeList from "../components/ItemAttrTypeDatatypeList";

describe("ItemAttrTypeDatatypeList", () => {
    const props = {
        history: []
    }

    const mockFetchItemAttrTypeDatatype = jest.fn();
    const mockFetchAllItemAttrTypeDatatypes = jest.fn();
    const mockItemAttrTypeDatatypes =
        [
                                                                                                                                                                                                                                          
          {itemAttrTypeDatatypeCode: 'Sample-itemAttrTypeDatatypeCode0',itemAttrTypeDatatypeName: 'Sample-itemAttrTypeDatatypeName0',itemAttrTypeDatatypeDesc: 'Sample-itemAttrTypeDatatypeDesc0',regexPattern: 'Sample-regexPattern0'}
                                ,
                                                                                                                                                                                                                                  
          {itemAttrTypeDatatypeCode: 'Sample-itemAttrTypeDatatypeCode1',itemAttrTypeDatatypeName: 'Sample-itemAttrTypeDatatypeName1',itemAttrTypeDatatypeDesc: 'Sample-itemAttrTypeDatatypeDesc1',regexPattern: 'Sample-regexPattern1'}
                                ,
                                                                                                                                                                                                                                  
          {itemAttrTypeDatatypeCode: 'Sample-itemAttrTypeDatatypeCode2',itemAttrTypeDatatypeName: 'Sample-itemAttrTypeDatatypeName2',itemAttrTypeDatatypeDesc: 'Sample-itemAttrTypeDatatypeDesc2',regexPattern: 'Sample-regexPattern2'}
                                ,
                                                                                                                                                                                                                                  
          {itemAttrTypeDatatypeCode: 'Sample-itemAttrTypeDatatypeCode3',itemAttrTypeDatatypeName: 'Sample-itemAttrTypeDatatypeName3',itemAttrTypeDatatypeDesc: 'Sample-itemAttrTypeDatatypeDesc3',regexPattern: 'Sample-regexPattern3'}
                                ,
                                                                                                                                                                                                                                  
          {itemAttrTypeDatatypeCode: 'Sample-itemAttrTypeDatatypeCode4',itemAttrTypeDatatypeName: 'Sample-itemAttrTypeDatatypeName4',itemAttrTypeDatatypeDesc: 'Sample-itemAttrTypeDatatypeDesc4',regexPattern: 'Sample-regexPattern4'}
                                ,
                                                                                                                                                                                                                                  
          {itemAttrTypeDatatypeCode: 'Sample-itemAttrTypeDatatypeCode5',itemAttrTypeDatatypeName: 'Sample-itemAttrTypeDatatypeName5',itemAttrTypeDatatypeDesc: 'Sample-itemAttrTypeDatatypeDesc5',regexPattern: 'Sample-regexPattern5'}
                                ,
                                                                                                                                                                                                                                  
          {itemAttrTypeDatatypeCode: 'Sample-itemAttrTypeDatatypeCode6',itemAttrTypeDatatypeName: 'Sample-itemAttrTypeDatatypeName6',itemAttrTypeDatatypeDesc: 'Sample-itemAttrTypeDatatypeDesc6',regexPattern: 'Sample-regexPattern6'}
                                ,
                                                                                                                                                                                                                                  
          {itemAttrTypeDatatypeCode: 'Sample-itemAttrTypeDatatypeCode7',itemAttrTypeDatatypeName: 'Sample-itemAttrTypeDatatypeName7',itemAttrTypeDatatypeDesc: 'Sample-itemAttrTypeDatatypeDesc7',regexPattern: 'Sample-regexPattern7'}
                                ,
                                                                                                                                                                                                                                  
          {itemAttrTypeDatatypeCode: 'Sample-itemAttrTypeDatatypeCode8',itemAttrTypeDatatypeName: 'Sample-itemAttrTypeDatatypeName8',itemAttrTypeDatatypeDesc: 'Sample-itemAttrTypeDatatypeDesc8',regexPattern: 'Sample-regexPattern8'}
                                ,
                                                                                                                                                                                                                                  
          {itemAttrTypeDatatypeCode: 'Sample-itemAttrTypeDatatypeCode9',itemAttrTypeDatatypeName: 'Sample-itemAttrTypeDatatypeName9',itemAttrTypeDatatypeDesc: 'Sample-itemAttrTypeDatatypeDesc9',regexPattern: 'Sample-regexPattern9'}
                                ,
                                                                                                                                                                                                                                  
          {itemAttrTypeDatatypeCode: 'Sample-itemAttrTypeDatatypeCode10',itemAttrTypeDatatypeName: 'Sample-itemAttrTypeDatatypeName10',itemAttrTypeDatatypeDesc: 'Sample-itemAttrTypeDatatypeDesc10',regexPattern: 'Sample-regexPattern10'}
                                ,
                                                                                                                                                                                                                                  
          {itemAttrTypeDatatypeCode: 'Sample-itemAttrTypeDatatypeCode11',itemAttrTypeDatatypeName: 'Sample-itemAttrTypeDatatypeName11',itemAttrTypeDatatypeDesc: 'Sample-itemAttrTypeDatatypeDesc11',regexPattern: 'Sample-regexPattern11'}
                                ,
                                                                                                                                                                                                                                  
          {itemAttrTypeDatatypeCode: 'Sample-itemAttrTypeDatatypeCode12',itemAttrTypeDatatypeName: 'Sample-itemAttrTypeDatatypeName12',itemAttrTypeDatatypeDesc: 'Sample-itemAttrTypeDatatypeDesc12',regexPattern: 'Sample-regexPattern12'}
                                ,
                                                                                                                                                                                                                                  
          {itemAttrTypeDatatypeCode: 'Sample-itemAttrTypeDatatypeCode13',itemAttrTypeDatatypeName: 'Sample-itemAttrTypeDatatypeName13',itemAttrTypeDatatypeDesc: 'Sample-itemAttrTypeDatatypeDesc13',regexPattern: 'Sample-regexPattern13'}
                ]

        const componentToTest = <ItemAttrTypeDatatypeList history={props.history} fetchItemAttrTypeDatatype={mockFetchItemAttrTypeDatatype}
            fetchAllItemAttrTypeDatatypes={mockFetchAllItemAttrTypeDatatypes} itemAttrTypeDatatypes={mockItemAttrTypeDatatypes} first={0} totalRecords={11} />

        const rootDiv = document.createElement('div') ;
        ReactDom.render(componentToTest, rootDiv);
        document.body.appendChild(rootDiv);
        
        it('renders correctly', () => {
            const tree = renderer.create(componentToTest).toJSON();
            expect(tree).toMatchSnapshot();
        })
        
        it('displays the correct number of rows', () => {
            const numberOfRowsRendered = document.querySelectorAll('div.p-datatable-wrapper > table > tbody > tr').length;
            expect(numberOfRowsRendered).toBe(10)
        })

        it('invokes row action', () =>{
            clickElement(document.querySelector("button[id='Sample-itemAttrTypeDatatypeCode0']"))
            expect(mockFetchItemAttrTypeDatatype).toBeCalledTimes(1)
        })
        
        it('invokes next page', () => {
            const selector = "div.p-paginator.p-component.p-unselectable-text.p-paginator-bottom > span > button:nth-child(2)";
            clickElement(document.querySelector(selector));
            expect(mockFetchAllItemAttrTypeDatatypes).toBeCalledTimes(1);
        })
})