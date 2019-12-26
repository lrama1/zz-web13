
import {getRequest, putRequest} from "../utils/authority";
import {
    ITEMATTRIBUTE_FETCH_SUCCESS,
    ITEMATTRIBUTE_SAVE_SUCCESS,
    ITEMATTRIBUTES_FETCH_SUCCESS,
    ITEMATTRIBUTE_SAVE_ERROR,
    ITEMATTRIBUTES_FETCH_ERROR,
    ITEMATTRIBUTE_FETCH_ERROR,
    fetchAllItemAttributes,
    fetchItemAttribute,
    saveItemAttribute
} from "./itemattribute";

jest.mock('../utils/authority')

describe('itemAttribute (action)', () => {
    
    const mockDispatch = jest.fn();
    const mockGetState = jest.fn();

    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('invokes success when list of itemAttributes are returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllItemAttributes('/mockurl', 1);

        /**/
        const response = Promise.resolve({rows:[], totalRecords: 0, lastPage: 1})
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRIBUTES_FETCH_SUCCESS, itemAttributes: [], totalRecords: 0, lastPage: 1, first: 1})
    })

    it('invokes error when an error occured in the service', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllItemAttributes('/mockurl', 1);

        /**/
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRIBUTES_FETCH_ERROR, error: true})
    })
    
    it('invokes success when a single itemAttribute is returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchItemAttribute('/mockurl');

        /**/
        const mockObjectToReturn = {
                                                itemAttrId: 'SampleitemAttrId'
                                                                ,itemAttrValue: 'SampleitemAttrValue'    
                                            }
        
        const response = Promise.resolve(mockObjectToReturn)
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRIBUTE_FETCH_SUCCESS, itemAttribute: mockObjectToReturn})
    })
    
    it('invokes error when a single itemAttribute fetch returned error', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchItemAttribute('/mockurl');
        
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRIBUTE_FETCH_ERROR, error: true})
    })

    it('invokes success when a record is saved', async () => {
        /* obtain reference to thunk*/
        const thunk = saveItemAttribute('/mockurl', {});

        /**/
        const mockObjectToReturn = {
                                                itemAttrId: 'SampleitemAttrId'
                                                                ,itemAttrValue: 'SampleitemAttrValue'    
                                            }
        const response = Promise.resolve(mockObjectToReturn)
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRIBUTE_SAVE_SUCCESS, itemAttribute: mockObjectToReturn})
    })
    
    it('invokes error when save errors out', async () => {
        /* obtain reference to thunk*/
        const thunk = saveItemAttribute('/mockurl', {});

        const response = Promise.reject('Error saving')
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(window.alert).toBeCalledWith("\"Error saving\"")
    })

})