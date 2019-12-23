
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {clickElement} from '../utils/TestUtils';
import ItemList from "../components/ItemList";

describe("ItemList", () => {
    const props = {
        history: []
    }

    const mockFetchItem = jest.fn();
    const mockFetchAllItems = jest.fn();
    const mockItems =
        [
                                                                                                                                                                                           
          {itemId: 'Sample-itemId0',itemCode: 'Sample-itemCode0',itemName: 'Sample-itemName0'}
                                ,
                                                                                                                                                                                   
          {itemId: 'Sample-itemId1',itemCode: 'Sample-itemCode1',itemName: 'Sample-itemName1'}
                                ,
                                                                                                                                                                                   
          {itemId: 'Sample-itemId2',itemCode: 'Sample-itemCode2',itemName: 'Sample-itemName2'}
                                ,
                                                                                                                                                                                   
          {itemId: 'Sample-itemId3',itemCode: 'Sample-itemCode3',itemName: 'Sample-itemName3'}
                                ,
                                                                                                                                                                                   
          {itemId: 'Sample-itemId4',itemCode: 'Sample-itemCode4',itemName: 'Sample-itemName4'}
                                ,
                                                                                                                                                                                   
          {itemId: 'Sample-itemId5',itemCode: 'Sample-itemCode5',itemName: 'Sample-itemName5'}
                                ,
                                                                                                                                                                                   
          {itemId: 'Sample-itemId6',itemCode: 'Sample-itemCode6',itemName: 'Sample-itemName6'}
                                ,
                                                                                                                                                                                   
          {itemId: 'Sample-itemId7',itemCode: 'Sample-itemCode7',itemName: 'Sample-itemName7'}
                                ,
                                                                                                                                                                                   
          {itemId: 'Sample-itemId8',itemCode: 'Sample-itemCode8',itemName: 'Sample-itemName8'}
                                ,
                                                                                                                                                                                   
          {itemId: 'Sample-itemId9',itemCode: 'Sample-itemCode9',itemName: 'Sample-itemName9'}
                                ,
                                                                                                                                                                                   
          {itemId: 'Sample-itemId10',itemCode: 'Sample-itemCode10',itemName: 'Sample-itemName10'}
                                ,
                                                                                                                                                                                   
          {itemId: 'Sample-itemId11',itemCode: 'Sample-itemCode11',itemName: 'Sample-itemName11'}
                                ,
                                                                                                                                                                                   
          {itemId: 'Sample-itemId12',itemCode: 'Sample-itemCode12',itemName: 'Sample-itemName12'}
                                ,
                                                                                                                                                                                   
          {itemId: 'Sample-itemId13',itemCode: 'Sample-itemCode13',itemName: 'Sample-itemName13'}
                ]

        const componentToTest = <ItemList history={props.history} fetchItem={mockFetchItem}
            fetchAllItems={mockFetchAllItems} items={mockItems} first={0} totalRecords={11} />

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
            clickElement(document.querySelector("button[id='Sample-itemId0']"))
            expect(mockFetchItem).toBeCalledTimes(1)
        })
        
        it('invokes next page', () => {
            const selector = "div.p-paginator.p-component.p-unselectable-text.p-paginator-bottom > span > button:nth-child(2)";
            clickElement(document.querySelector(selector));
            expect(mockFetchAllItems).toBeCalledTimes(1);
        })
})