
import React from 'react';
jest.mock('../actions/relationshipmapping')
import {fetchRelationshipMapping, fetchAllRelationshipMappings} from '../actions/relationshipmapping';
import {mapStateToProps, mapDispatchToProps} from "./RelationshipMappingListContainer";

describe('RelationshipMappingListContainer', () => {
    const mockDispatch = jest.fn();
    
    afterEach(() => {
        mockDispatch.mockClear();
    });
    
    it('returns the expected state', ()=> {
        const sampleState = {
            relationshipMappings: {
                records: [],
                totalRecords: 0,
                first: 1
            }
        }
        const result = mapStateToProps(sampleState);
        expect(result).toMatchSnapshot();
    })
    
    it('dispatches fetchRelationshipMapping', () => {
        fetchRelationshipMapping.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchRelationshipMapping('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
    it('dispatches fetchAllRelationshipMappings', () => {
        fetchAllRelationshipMappings.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchAllRelationshipMappings('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
});