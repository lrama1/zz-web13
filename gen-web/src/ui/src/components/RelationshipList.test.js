
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {clickElement} from '../utils/TestUtils';
import RelationshipList from "../components/RelationshipList";

describe("RelationshipList", () => {
    const props = {
        history: []
    }

    const mockFetchRelationship = jest.fn();
    const mockFetchAllRelationships = jest.fn();
    const mockRelationships =
        [
                                                                                                                                                                                           
          {relId: 'Sample-relId0',relName: 'Sample-relName0',relDesc: 'Sample-relDesc0'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId1',relName: 'Sample-relName1',relDesc: 'Sample-relDesc1'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId2',relName: 'Sample-relName2',relDesc: 'Sample-relDesc2'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId3',relName: 'Sample-relName3',relDesc: 'Sample-relDesc3'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId4',relName: 'Sample-relName4',relDesc: 'Sample-relDesc4'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId5',relName: 'Sample-relName5',relDesc: 'Sample-relDesc5'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId6',relName: 'Sample-relName6',relDesc: 'Sample-relDesc6'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId7',relName: 'Sample-relName7',relDesc: 'Sample-relDesc7'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId8',relName: 'Sample-relName8',relDesc: 'Sample-relDesc8'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId9',relName: 'Sample-relName9',relDesc: 'Sample-relDesc9'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId10',relName: 'Sample-relName10',relDesc: 'Sample-relDesc10'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId11',relName: 'Sample-relName11',relDesc: 'Sample-relDesc11'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId12',relName: 'Sample-relName12',relDesc: 'Sample-relDesc12'}
                                ,
                                                                                                                                                                                   
          {relId: 'Sample-relId13',relName: 'Sample-relName13',relDesc: 'Sample-relDesc13'}
                ]

        const componentToTest = <RelationshipList history={props.history} fetchRelationship={mockFetchRelationship}
            fetchAllRelationships={mockFetchAllRelationships} relationships={mockRelationships} first={0} totalRecords={11} />

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
            expect(mockFetchRelationship).toBeCalledTimes(1)
        })
        
        it('invokes next page', () => {
            const selector = "div.p-paginator.p-component.p-unselectable-text.p-paginator-bottom > span > button:nth-child(2)";
            clickElement(document.querySelector(selector));
            expect(mockFetchAllRelationships).toBeCalledTimes(1);
        })
})