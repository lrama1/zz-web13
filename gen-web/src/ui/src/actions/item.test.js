
import {getRequest, putRequest} from "../utils/authority";
import {
    ITEM_FETCH_SUCCESS,
    ITEM_SAVE_SUCCESS,
    ITEMS_FETCH_SUCCESS,
    ITEM_SAVE_ERROR,
    ITEMS_FETCH_ERROR,
    ITEM_FETCH_ERROR,
    fetchAllItems,
    fetchItem,
    saveItem
} from "./item";

jest.mock('../utils/authority')

describe('item (action)', () => {
    
    const mockDispatch = jest.fn();
    const mockGetState = jest.fn();

    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('invokes success when list of items are returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllItems('/mockurl', 1);

        /**/
        const response = Promise.resolve({rows:[], totalRecords: 0, lastPage: 1})
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMS_FETCH_SUCCESS, items: [], totalRecords: 0, lastPage: 1, first: 1})
    })

    it('invokes error when an error occured in the service', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllItems('/mockurl', 1);

        /**/
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMS_FETCH_ERROR, error: true})
    })
    
    it('invokes success when a single item is returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchItem('/mockurl');

        /**/
        const mockObjectToReturn = {
                                                itemId: 'SampleitemId'
                                                                ,itemCode: 'SampleitemCode'    
                                                                ,itemName: 'SampleitemName'    
                                            }
        
        const response = Promise.resolve(mockObjectToReturn)
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEM_FETCH_SUCCESS, item: mockObjectToReturn})
    })
    
    it('invokes error when a single item fetch returned error', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchItem('/mockurl');
        
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEM_FETCH_ERROR, error: true})
    })

    it('invokes success when a record is saved', async () => {
        /* obtain reference to thunk*/
        const thunk = saveItem('/mockurl', {});

        /**/
        const mockObjectToReturn = {
                                                itemId: 'SampleitemId'
                                                                ,itemCode: 'SampleitemCode'    
                                                                ,itemName: 'SampleitemName'    
                                            }
        const response = Promise.resolve(mockObjectToReturn)
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEM_SAVE_SUCCESS, item: mockObjectToReturn})
    })
    
    it('invokes error when save errors out', async () => {
        /* obtain reference to thunk*/
        const thunk = saveItem('/mockurl', {});

        const response = Promise.reject('Error saving')
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(window.alert).toBeCalledWith("\"Error saving\"")
    })

})