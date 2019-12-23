
import React from 'react';
jest.mock('../actions/item')
import {fetchItem, fetchAllItems} from '../actions/item';
import {mapStateToProps, mapDispatchToProps} from "./ItemListContainer";

describe('ItemListContainer', () => {
    const mockDispatch = jest.fn();
    
    afterEach(() => {
        mockDispatch.mockClear();
    });
    
    it('returns the expected state', ()=> {
        const sampleState = {
            items: {
                records: [],
                totalRecords: 0,
                first: 1
            }
        }
        const result = mapStateToProps(sampleState);
        expect(result).toMatchSnapshot();
    })
    
    it('dispatches fetchItem', () => {
        fetchItem.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchItem('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
    it('dispatches fetchAllItems', () => {
        fetchAllItems.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchAllItems('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
});