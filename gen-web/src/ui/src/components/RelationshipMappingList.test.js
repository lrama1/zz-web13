
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {clickElement} from '../utils/TestUtils';
import RelationshipMappingList from "../components/RelationshipMappingList";

describe("RelationshipMappingList", () => {
    const props = {
        history: []
    }

    const mockFetchRelationshipMapping = jest.fn();
    const mockFetchAllRelationshipMappings = jest.fn();
    const mockRelationshipMappings =
        [
                                                                                                                                                                                           
          {relId: 'Sample-relId0',sourceItemId: 'Sample-sourceItemId0',targetItemId: 'Sample-targetItemId0'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId1',sourceItemId: 'Sample-sourceItemId1',targetItemId: 'Sample-targetItemId1'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId2',sourceItemId: 'Sample-sourceItemId2',targetItemId: 'Sample-targetItemId2'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId3',sourceItemId: 'Sample-sourceItemId3',targetItemId: 'Sample-targetItemId3'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId4',sourceItemId: 'Sample-sourceItemId4',targetItemId: 'Sample-targetItemId4'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId5',sourceItemId: 'Sample-sourceItemId5',targetItemId: 'Sample-targetItemId5'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId6',sourceItemId: 'Sample-sourceItemId6',targetItemId: 'Sample-targetItemId6'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId7',sourceItemId: 'Sample-sourceItemId7',targetItemId: 'Sample-targetItemId7'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId8',sourceItemId: 'Sample-sourceItemId8',targetItemId: 'Sample-targetItemId8'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId9',sourceItemId: 'Sample-sourceItemId9',targetItemId: 'Sample-targetItemId9'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId10',sourceItemId: 'Sample-sourceItemId10',targetItemId: 'Sample-targetItemId10'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId11',sourceItemId: 'Sample-sourceItemId11',targetItemId: 'Sample-targetItemId11'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId12',sourceItemId: 'Sample-sourceItemId12',targetItemId: 'Sample-targetItemId12'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId13',sourceItemId: 'Sample-sourceItemId13',targetItemId: 'Sample-targetItemId13'}
                ]

        const componentToTest = <RelationshipMappingList history={props.history} fetchRelationshipMapping={mockFetchRelationshipMapping}
            fetchAllRelationshipMappings={mockFetchAllRelationshipMappings} relationshipMappings={mockRelationshipMappings} first={0} totalRecords={11} />

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
            clickElement(document.querySelector("button[id='Sample-relId0']"))
            expect(mockFetchRelationshipMapping).toBeCalledTimes(1)
        })
        
        it('invokes next page', () => {
            const selector = "div.p-paginator.p-component.p-unselectable-text.p-paginator-bottom > span > button:nth-child(2)";
            clickElement(document.querySelector(selector));
            expect(mockFetchAllRelationshipMappings).toBeCalledTimes(1);
        })
})