
import {getRequest, putRequest} from "../utils/authority";
import {
    ITEMTYPE_FETCH_SUCCESS,
    ITEMTYPE_SAVE_SUCCESS,
    ITEMTYPES_FETCH_SUCCESS,
    ITEMTYPE_SAVE_ERROR,
    ITEMTYPES_FETCH_ERROR,
    ITEMTYPE_FETCH_ERROR,
    fetchAllItemTypes,
    fetchItemType,
    saveItemType
} from "./itemtype";

jest.mock('../utils/authority')

describe('itemType (action)', () => {
    
    const mockDispatch = jest.fn();
    const mockGetState = jest.fn();

    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('invokes success when list of itemTypes are returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllItemTypes('/mockurl', 1);

        /**/
        const response = Promise.resolve({rows:[], totalRecords: 0, lastPage: 1})
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMTYPES_FETCH_SUCCESS, itemTypes: [], totalRecords: 0, lastPage: 1, first: 1})
    })

    it('invokes error when an error occured in the service', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllItemTypes('/mockurl', 1);

        /**/
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMTYPES_FETCH_ERROR, error: true})
    })
    
    it('invokes success when a single itemType is returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchItemType('/mockurl');

        /**/
        const mockObjectToReturn = {
                                                itemTypeId: 'SampleitemTypeId'
                                                                ,itemTypeName: 'SampleitemTypeName'    
                                            }
        
        const response = Promise.resolve(mockObjectToReturn)
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMTYPE_FETCH_SUCCESS, itemType: mockObjectToReturn})
    })
    
    it('invokes error when a single itemType fetch returned error', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchItemType('/mockurl');
        
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMTYPE_FETCH_ERROR, error: true})
    })

    it('invokes success when a record is saved', async () => {
        /* obtain reference to thunk*/
        const thunk = saveItemType('/mockurl', {});

        /**/
        const mockObjectToReturn = {
                                                itemTypeId: 'SampleitemTypeId'
                                                                ,itemTypeName: 'SampleitemTypeName'    
                                            }
        const response = Promise.resolve(mockObjectToReturn)
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMTYPE_SAVE_SUCCESS, itemType: mockObjectToReturn})
    })
    
    it('invokes error when save errors out', async () => {
        /* obtain reference to thunk*/
        const thunk = saveItemType('/mockurl', {});

        const response = Promise.reject('Error saving')
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(window.alert).toBeCalledWith("\"Error saving\"")
    })

})