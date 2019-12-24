
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {clickElement} from '../utils/TestUtils';
import ItemTypeList from "../components/ItemTypeList";

describe("ItemTypeList", () => {
    const props = {
        history: []
    }

    const mockFetchItemType = jest.fn();
    const mockFetchAllItemTypes = jest.fn();
    const mockItemTypes =
        [
                                                                                                                                            
          {itemTypeId: 'Sample-itemTypeId0',itemTypeName: 'Sample-itemTypeName0'}
                                ,
                                                                                                                                    
          {itemTypeId: 'Sample-itemTypeId1',itemTypeName: 'Sample-itemTypeName1'}
                                ,
                                                                                                                                    
          {itemTypeId: 'Sample-itemTypeId2',itemTypeName: 'Sample-itemTypeName2'}
                                ,
                                                                                                                                    
          {itemTypeId: 'Sample-itemTypeId3',itemTypeName: 'Sample-itemTypeName3'}
                                ,
                                                                                                                                    
          {itemTypeId: 'Sample-itemTypeId4',itemTypeName: 'Sample-itemTypeName4'}
                                ,
                                                                                                                                    
          {itemTypeId: 'Sample-itemTypeId5',itemTypeName: 'Sample-itemTypeName5'}
                                ,
                                                                                                                                    
          {itemTypeId: 'Sample-itemTypeId6',itemTypeName: 'Sample-itemTypeName6'}
                                ,
                                                                                                                                    
          {itemTypeId: 'Sample-itemTypeId7',itemTypeName: 'Sample-itemTypeName7'}
                                ,
                                                                                                                                    
          {itemTypeId: 'Sample-itemTypeId8',itemTypeName: 'Sample-itemTypeName8'}
                                ,
                                                                                                                                    
          {itemTypeId: 'Sample-itemTypeId9',itemTypeName: 'Sample-itemTypeName9'}
                                ,
                                                                                                                                    
          {itemTypeId: 'Sample-itemTypeId10',itemTypeName: 'Sample-itemTypeName10'}
                                ,
                                                                                                                                    
          {itemTypeId: 'Sample-itemTypeId11',itemTypeName: 'Sample-itemTypeName11'}
                                ,
                                                                                                                                    
          {itemTypeId: 'Sample-itemTypeId12',itemTypeName: 'Sample-itemTypeName12'}
                                ,
                                                                                                                                    
          {itemTypeId: 'Sample-itemTypeId13',itemTypeName: 'Sample-itemTypeName13'}
                ]

        const componentToTest = <ItemTypeList history={props.history} fetchItemType={mockFetchItemType}
            fetchAllItemTypes={mockFetchAllItemTypes} itemTypes={mockItemTypes} first={0} totalRecords={11} />

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
            clickElement(document.querySelector("button[id='Sample-itemTypeId0']"))
            expect(mockFetchItemType).toBeCalledTimes(1)
        })
        
        it('invokes next page', () => {
            const selector = "div.p-paginator.p-component.p-unselectable-text.p-paginator-bottom > span > button:nth-child(2)";
            clickElement(document.querySelector(selector));
            expect(mockFetchAllItemTypes).toBeCalledTimes(1);
        })
})