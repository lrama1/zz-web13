
import {getRequest, putRequest} from "../utils/authority";
import {
    ITEMATTRTYPEDATATYPE_FETCH_SUCCESS,
    ITEMATTRTYPEDATATYPE_SAVE_SUCCESS,
    ITEMATTRTYPEDATATYPES_FETCH_SUCCESS,
    ITEMATTRTYPEDATATYPE_SAVE_ERROR,
    ITEMATTRTYPEDATATYPES_FETCH_ERROR,
    ITEMATTRTYPEDATATYPE_FETCH_ERROR,
    fetchAllItemAttrTypeDatatypes,
    fetchItemAttrTypeDatatype,
    saveItemAttrTypeDatatype
} from "./itemattrtypedatatype";

jest.mock('../utils/authority')

describe('itemAttrTypeDatatype (action)', () => {
    
    const mockDispatch = jest.fn();
    const mockGetState = jest.fn();

    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('invokes success when list of itemAttrTypeDatatypes are returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllItemAttrTypeDatatypes('/mockurl', 1);

        /**/
        const response = Promise.resolve({rows:[], totalRecords: 0, lastPage: 1})
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRTYPEDATATYPES_FETCH_SUCCESS, itemAttrTypeDatatypes: [], totalRecords: 0, lastPage: 1, first: 1})
    })

    it('invokes error when an error occured in the service', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllItemAttrTypeDatatypes('/mockurl', 1);

        /**/
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRTYPEDATATYPES_FETCH_ERROR, error: true})
    })
    
    it('invokes success when a single itemAttrTypeDatatype is returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchItemAttrTypeDatatype('/mockurl');

        /**/
        const mockObjectToReturn = {
                                                itemAttrTypeDatatypeCode: 'SampleitemAttrTypeDatatypeCode'
                                                                ,itemAttrTypeDatatypeName: 'SampleitemAttrTypeDatatypeName'    
                                                                ,itemAttrTypeDatatypeDesc: 'SampleitemAttrTypeDatatypeDesc'    
                                                                ,regexPattern: 'SampleregexPattern'    
                                            }
        
        const response = Promise.resolve(mockObjectToReturn)
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRTYPEDATATYPE_FETCH_SUCCESS, itemAttrTypeDatatype: mockObjectToReturn})
    })
    
    it('invokes error when a single itemAttrTypeDatatype fetch returned error', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchItemAttrTypeDatatype('/mockurl');
        
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRTYPEDATATYPE_FETCH_ERROR, error: true})
    })

    it('invokes success when a record is saved', async () => {
        /* obtain reference to thunk*/
        const thunk = saveItemAttrTypeDatatype('/mockurl', {});

        /**/
        const mockObjectToReturn = {
                                                itemAttrTypeDatatypeCode: 'SampleitemAttrTypeDatatypeCode'
                                                                ,itemAttrTypeDatatypeName: 'SampleitemAttrTypeDatatypeName'    
                                                                ,itemAttrTypeDatatypeDesc: 'SampleitemAttrTypeDatatypeDesc'    
                                                                ,regexPattern: 'SampleregexPattern'    
                                            }
        const response = Promise.resolve(mockObjectToReturn)
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: ITEMATTRTYPEDATATYPE_SAVE_SUCCESS, itemAttrTypeDatatype: mockObjectToReturn})
    })
    
    it('invokes error when save errors out', async () => {
        /* obtain reference to thunk*/
        const thunk = saveItemAttrTypeDatatype('/mockurl', {});

        const response = Promise.reject('Error saving')
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(window.alert).toBeCalledWith("\"Error saving\"")
    })

})