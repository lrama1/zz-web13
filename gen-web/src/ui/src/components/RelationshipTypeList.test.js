
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {clickElement} from '../utils/TestUtils';
import RelationshipTypeList from "../components/RelationshipTypeList";

describe("RelationshipTypeList", () => {
    const props = {
        history: []
    }

    const mockFetchRelationshipType = jest.fn();
    const mockFetchAllRelationshipTypes = jest.fn();
    const mockRelationshipTypes =
        [
                                                                                                                                                                                                                                          
          {relTypeId: 'Sample-relTypeId0',relTypeCode: 'Sample-relTypeCode0',relTypeName: 'Sample-relTypeName0',relTypeDesc: 'Sample-relTypeDesc0'}
                                ,
                                                                                                                                                                                                                                  
          {relTypeId: 'Sample-relTypeId1',relTypeCode: 'Sample-relTypeCode1',relTypeName: 'Sample-relTypeName1',relTypeDesc: 'Sample-relTypeDesc1'}
                                ,
                                                                                                                                                                                                                                  
          {relTypeId: 'Sample-relTypeId2',relTypeCode: 'Sample-relTypeCode2',relTypeName: 'Sample-relTypeName2',relTypeDesc: 'Sample-relTypeDesc2'}
                                ,
                                                                                                                                                                                                                                  
          {relTypeId: 'Sample-relTypeId3',relTypeCode: 'Sample-relTypeCode3',relTypeName: 'Sample-relTypeName3',relTypeDesc: 'Sample-relTypeDesc3'}
                                ,
                                                                                                                                                                                                                                  
          {relTypeId: 'Sample-relTypeId4',relTypeCode: 'Sample-relTypeCode4',relTypeName: 'Sample-relTypeName4',relTypeDesc: 'Sample-relTypeDesc4'}
                                ,
                                                                                                                                                                                                                                  
          {relTypeId: 'Sample-relTypeId5',relTypeCode: 'Sample-relTypeCode5',relTypeName: 'Sample-relTypeName5',relTypeDesc: 'Sample-relTypeDesc5'}
                                ,
                                                                                                                                                                                                                                  
          {relTypeId: 'Sample-relTypeId6',relTypeCode: 'Sample-relTypeCode6',relTypeName: 'Sample-relTypeName6',relTypeDesc: 'Sample-relTypeDesc6'}
                                ,
                                                                                                                                                                                                                                  
          {relTypeId: 'Sample-relTypeId7',relTypeCode: 'Sample-relTypeCode7',relTypeName: 'Sample-relTypeName7',relTypeDesc: 'Sample-relTypeDesc7'}
                                ,
                                                                                                                                                                                                                                  
          {relTypeId: 'Sample-relTypeId8',relTypeCode: 'Sample-relTypeCode8',relTypeName: 'Sample-relTypeName8',relTypeDesc: 'Sample-relTypeDesc8'}
                                ,
                                                                                                                                                                                                                                  
          {relTypeId: 'Sample-relTypeId9',relTypeCode: 'Sample-relTypeCode9',relTypeName: 'Sample-relTypeName9',relTypeDesc: 'Sample-relTypeDesc9'}
                                ,
                                                                                                                                                                                                                                  
          {relTypeId: 'Sample-relTypeId10',relTypeCode: 'Sample-relTypeCode10',relTypeName: 'Sample-relTypeName10',relTypeDesc: 'Sample-relTypeDesc10'}
                                ,
                                                                                                                                                                                                                                  
          {relTypeId: 'Sample-relTypeId11',relTypeCode: 'Sample-relTypeCode11',relTypeName: 'Sample-relTypeName11',relTypeDesc: 'Sample-relTypeDesc11'}
                                ,
                                                                                                                                                                                                                                  
          {relTypeId: 'Sample-relTypeId12',relTypeCode: 'Sample-relTypeCode12',relTypeName: 'Sample-relTypeName12',relTypeDesc: 'Sample-relTypeDesc12'}
                                ,
                                                                                                                                                                                                                                  
          {relTypeId: 'Sample-relTypeId13',relTypeCode: 'Sample-relTypeCode13',relTypeName: 'Sample-relTypeName13',relTypeDesc: 'Sample-relTypeDesc13'}
                ]

        const componentToTest = <RelationshipTypeList history={props.history} fetchRelationshipType={mockFetchRelationshipType}
            fetchAllRelationshipTypes={mockFetchAllRelationshipTypes} relationshipTypes={mockRelationshipTypes} first={0} totalRecords={11} />

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
            clickElement(document.querySelector("button[id='Sample-relTypeId0']"))
            expect(mockFetchRelationshipType).toBeCalledTimes(1)
        })
        
        it('invokes next page', () => {
            const selector = "div.p-paginator.p-component.p-unselectable-text.p-paginator-bottom > span > button:nth-child(2)";
            clickElement(document.querySelector(selector));
            expect(mockFetchAllRelationshipTypes).toBeCalledTimes(1);
        })
})