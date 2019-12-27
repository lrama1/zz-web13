
import React from 'react';
jest.mock('../actions/relationshiptype')
import {fetchRelationshipType, fetchAllRelationshipTypes} from '../actions/relationshiptype';
import {mapStateToProps, mapDispatchToProps} from "./RelationshipTypeListContainer";

describe('RelationshipTypeListContainer', () => {
    const mockDispatch = jest.fn();
    
    afterEach(() => {
        mockDispatch.mockClear();
    });
    
    it('returns the expected state', ()=> {
        const sampleState = {
            relationshipTypes: {
                records: [],
                totalRecords: 0,
                first: 1
            }
        }
        const result = mapStateToProps(sampleState);
        expect(result).toMatchSnapshot();
    })
    
    it('dispatches fetchRelationshipType', () => {
        fetchRelationshipType.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchRelationshipType('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
    it('dispatches fetchAllRelationshipTypes', () => {
        fetchAllRelationshipTypes.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchAllRelationshipTypes('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
});