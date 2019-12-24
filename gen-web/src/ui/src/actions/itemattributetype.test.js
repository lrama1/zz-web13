
import {getRequest, putRequest} from "../utils/authority";
import {
    ITEMATTRIBUTETYPE_FETCH_SUCCESS,
    ITEMATTRIBUTETYPE_SAVE_SUCCESS,
    ITEMATTRIBUTETYPES_FETCH_SUCCESS,
    ITEMATTRIBUTETYPE_SAVE_ERROR,
    ITEMATTRIBUTETYPES_FETCH_ERROR,
    ITEMATTRIBUTETYPE_FETCH_ERROR,
    fetchAllItemAttributeTypes,
    fetchItemAttributeType,
    saveItemAttributeType
} from "./itemattributetype";

jest.mock('../utils/authority')

describe('itemAttributeType (action)', () => {
    
    const mockDispatch = jest.fn();
    const mockGetState = jest.fn();

    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('invokes success when list of itemAttributeTypes are returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllItemAttributeTypes('/mockurl', 1);

        /**/
        const response = Promise.resolve({rows:[], totalRecords: 0, lastPage: 1})
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRIBUTETYPES_FETCH_SUCCESS, itemAttributeTypes: [], totalRecords: 0, lastPage: 1, first: 1})
    })

    it('invokes error when an error occured in the service', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllItemAttributeTypes('/mockurl', 1);

        /**/
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRIBUTETYPES_FETCH_ERROR, error: true})
    })
    
    it('invokes success when a single itemAttributeType is returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchItemAttributeType('/mockurl');

        /**/
        const mockObjectToReturn = {
                                                itemAttrTypeId: 'SampleitemAttrTypeId'
                                                                ,itemAttrTypeCode: 'SampleitemAttrTypeCode'    
                                                                ,itemAttrTypeName: 'SampleitemAttrTypeName'    
                                                                ,itemAttrTypeDesc: 'SampleitemAttrTypeDesc'    
                                                                ,itemAttrTypeLength: 'SampleitemAttrTypeLength'    
                                                                ,itemAttrTypeIsSearchable: 'SampleitemAttrTypeIsSearchable'    
                                                                ,itemAttrTypeDisplayIndex: 'SampleitemAttrTypeDisplayIndex'    
                                                                ,itemAttrTypeIsRequired: 'SampleitemAttrTypeIsRequired'    
                                                                ,itemAttrTypeIsMetaphoneKey: 'SampleitemAttrTypeIsMetaphoneKey'    
                                                                ,itemAttrTypeMetaphonekeypos: 'SampleitemAttrTypeMetaphonekeypos'    
                                            }
        
        const response = Promise.resolve(mockObjectToReturn)
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRIBUTETYPE_FETCH_SUCCESS, itemAttributeType: mockObjectToReturn})
    })
    
    it('invokes error when a single itemAttributeType fetch returned error', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchItemAttributeType('/mockurl');
        
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRIBUTETYPE_FETCH_ERROR, error: true})
    })

    it('invokes success when a record is saved', async () => {
        /* obtain reference to thunk*/
        const thunk = saveItemAttributeType('/mockurl', {});

        /**/
        const mockObjectToReturn = {
                                                itemAttrTypeId: 'SampleitemAttrTypeId'
                                                                ,itemAttrTypeCode: 'SampleitemAttrTypeCode'    
                                                                ,itemAttrTypeName: 'SampleitemAttrTypeName'    
                                                                ,itemAttrTypeDesc: 'SampleitemAttrTypeDesc'    
                                                                ,itemAttrTypeLength: 'SampleitemAttrTypeLength'    
                                                                ,itemAttrTypeIsSearchable: 'SampleitemAttrTypeIsSearchable'    
                                                                ,itemAttrTypeDisplayIndex: 'SampleitemAttrTypeDisplayIndex'    
                                                                ,itemAttrTypeIsRequired: 'SampleitemAttrTypeIsRequired'    
                                                                ,itemAttrTypeIsMetaphoneKey: 'SampleitemAttrTypeIsMetaphoneKey'    
                                                                ,itemAttrTypeMetaphonekeypos: 'SampleitemAttrTypeMetaphonekeypos'    
                                            }
        const response = Promise.resolve(mockObjectToReturn)
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRIBUTETYPE_SAVE_SUCCESS, itemAttributeType: mockObjectToReturn})
    })
    
    it('invokes error when save errors out', async () => {
        /* obtain reference to thunk*/
        const thunk = saveItemAttributeType('/mockurl', {});

        const response = Promise.reject('Error saving')
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(window.alert).toBeCalledWith("\"Error saving\"")
    })

})