
import React from 'react';
jest.mock('../actions/itemattrtypedatatype')
import {fetchItemAttrTypeDatatype, fetchAllItemAttrTypeDatatypes} from '../actions/itemattrtypedatatype';
import {mapStateToProps, mapDispatchToProps} from "./ItemAttrTypeDatatypeListContainer";

describe('ItemAttrTypeDatatypeListContainer', () => {
    const mockDispatch = jest.fn();
    
    afterEach(() => {
        mockDispatch.mockClear();
    });
    
    it('returns the expected state', ()=> {
        const sampleState = {
            itemAttrTypeDatatypes: {
                records: [],
                totalRecords: 0,
                first: 1
            }
        }
        const result = mapStateToProps(sampleState);
        expect(result).toMatchSnapshot();
    })
    
    it('dispatches fetchItemAttrTypeDatatype', () => {
        fetchItemAttrTypeDatatype.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchItemAttrTypeDatatype('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
    it('dispatches fetchAllItemAttrTypeDatatypes', () => {
        fetchAllItemAttrTypeDatatypes.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchAllItemAttrTypeDatatypes('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
});