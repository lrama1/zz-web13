
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {clickElement} from '../utils/TestUtils';
import ItemAttributeList from "../components/ItemAttributeList";

describe("ItemAttributeList", () => {
    const props = {
        history: []
    }

    const mockFetchItemAttribute = jest.fn();
    const mockFetchAllItemAttributes = jest.fn();
    const mockItemAttributes =
        [
                                                                                                                                            
          {itemAttrId: 'Sample-itemAttrId0',itemAttrValue: 'Sample-itemAttrValue0'}
                                ,
                                                                                                                                    
          {itemAttrId: 'Sample-itemAttrId1',itemAttrValue: 'Sample-itemAttrValue1'}
                                ,
                                                                                                                                    
          {itemAttrId: 'Sample-itemAttrId2',itemAttrValue: 'Sample-itemAttrValue2'}
                                ,
                                                                                                                                    
          {itemAttrId: 'Sample-itemAttrId3',itemAttrValue: 'Sample-itemAttrValue3'}
                                ,
                                                                                                                                    
          {itemAttrId: 'Sample-itemAttrId4',itemAttrValue: 'Sample-itemAttrValue4'}
                                ,
                                                                                                                                    
          {itemAttrId: 'Sample-itemAttrId5',itemAttrValue: 'Sample-itemAttrValue5'}
                                ,
                                                                                                                                    
          {itemAttrId: 'Sample-itemAttrId6',itemAttrValue: 'Sample-itemAttrValue6'}
                                ,
                                                                                                                                    
          {itemAttrId: 'Sample-itemAttrId7',itemAttrValue: 'Sample-itemAttrValue7'}
                                ,
                                                                                                                                    
          {itemAttrId: 'Sample-itemAttrId8',itemAttrValue: 'Sample-itemAttrValue8'}
                                ,
                                                                                                                                    
          {itemAttrId: 'Sample-itemAttrId9',itemAttrValue: 'Sample-itemAttrValue9'}
                                ,
                                                                                                                                    
          {itemAttrId: 'Sample-itemAttrId10',itemAttrValue: 'Sample-itemAttrValue10'}
                                ,
                                                                                                                                    
          {itemAttrId: 'Sample-itemAttrId11',itemAttrValue: 'Sample-itemAttrValue11'}
                                ,
                                                                                                                                    
          {itemAttrId: 'Sample-itemAttrId12',itemAttrValue: 'Sample-itemAttrValue12'}
                                ,
                                                                                                                                    
          {itemAttrId: 'Sample-itemAttrId13',itemAttrValue: 'Sample-itemAttrValue13'}
                ]

        const componentToTest = <ItemAttributeList history={props.history} fetchItemAttribute={mockFetchItemAttribute}
            fetchAllItemAttributes={mockFetchAllItemAttributes} itemAttributes={mockItemAttributes} first={0} totalRecords={11} />

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
            clickElement(document.querySelector("button[id='Sample-itemAttrId0']"))
            expect(mockFetchItemAttribute).toBeCalledTimes(1)
        })
        
        it('invokes next page', () => {
            const selector = "div.p-paginator.p-component.p-unselectable-text.p-paginator-bottom > span > button:nth-child(2)";
            clickElement(document.querySelector(selector));
            expect(mockFetchAllItemAttributes).toBeCalledTimes(1);
        })
})