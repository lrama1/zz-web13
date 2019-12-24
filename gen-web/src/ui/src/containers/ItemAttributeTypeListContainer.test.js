
import React from 'react';
jest.mock('../actions/itemattributetype')
import {fetchItemAttributeType, fetchAllItemAttributeTypes} from '../actions/itemattributetype';
import {mapStateToProps, mapDispatchToProps} from "./ItemAttributeTypeListContainer";

describe('ItemAttributeTypeListContainer', () => {
    const mockDispatch = jest.fn();
    
    afterEach(() => {
        mockDispatch.mockClear();
    });
    
    it('returns the expected state', ()=> {
        const sampleState = {
            itemAttributeTypes: {
                records: [],
                totalRecords: 0,
                first: 1
            }
        }
        const result = mapStateToProps(sampleState);
        expect(result).toMatchSnapshot();
    })
    
    it('dispatches fetchItemAttributeType', () => {
        fetchItemAttributeType.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchItemAttributeType('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
    it('dispatches fetchAllItemAttributeTypes', () => {
        fetchAllItemAttributeTypes.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchAllItemAttributeTypes('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
});