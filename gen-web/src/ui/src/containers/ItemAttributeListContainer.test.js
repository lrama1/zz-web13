
import React from 'react';
jest.mock('../actions/itemattribute')
import {fetchItemAttribute, fetchAllItemAttributes} from '../actions/itemattribute';
import {mapStateToProps, mapDispatchToProps} from "./ItemAttributeListContainer";

describe('ItemAttributeListContainer', () => {
    const mockDispatch = jest.fn();
    
    afterEach(() => {
        mockDispatch.mockClear();
    });
    
    it('returns the expected state', ()=> {
        const sampleState = {
            itemAttributes: {
                records: [],
                totalRecords: 0,
                first: 1
            }
        }
        const result = mapStateToProps(sampleState);
        expect(result).toMatchSnapshot();
    })
    
    it('dispatches fetchItemAttribute', () => {
        fetchItemAttribute.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchItemAttribute('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
    it('dispatches fetchAllItemAttributes', () => {
        fetchAllItemAttributes.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchAllItemAttributes('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
});