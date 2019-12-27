
import {getRequest, putRequest} from "../utils/authority";
import {
    RELATIONSHIPTYPE_FETCH_SUCCESS,
    RELATIONSHIPTYPE_SAVE_SUCCESS,
    RELATIONSHIPTYPES_FETCH_SUCCESS,
    RELATIONSHIPTYPE_SAVE_ERROR,
    RELATIONSHIPTYPES_FETCH_ERROR,
    RELATIONSHIPTYPE_FETCH_ERROR,
    fetchAllRelationshipTypes,
    fetchRelationshipType,
    saveRelationshipType
} from "./relationshiptype";

jest.mock('../utils/authority')

describe('relationshipType (action)', () => {
    
    const mockDispatch = jest.fn();
    const mockGetState = jest.fn();

    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('invokes success when list of relationshipTypes are returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllRelationshipTypes('/mockurl', 1);

        /**/
        const response = Promise.resolve({rows:[], totalRecords: 0, lastPage: 1})
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIPTYPES_FETCH_SUCCESS, relationshipTypes: [], totalRecords: 0, lastPage: 1, first: 1})
    })

    it('invokes error when an error occured in the service', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllRelationshipTypes('/mockurl', 1);

        /**/
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIPTYPES_FETCH_ERROR, error: true})
    })
    
    it('invokes success when a single relationshipType is returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchRelationshipType('/mockurl');

        /**/
        const mockObjectToReturn = {
                                                relTypeId: 'SamplerelTypeId'
                                                                ,relTypeCode: 'SamplerelTypeCode'    
                                                                ,relTypeName: 'SamplerelTypeName'    
                                                                ,relTypeDesc: 'SamplerelTypeDesc'    
                                            }
        
        const response = Promise.resolve(mockObjectToReturn)
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIPTYPE_FETCH_SUCCESS, relationshipType: mockObjectToReturn})
    })
    
    it('invokes error when a single relationshipType fetch returned error', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchRelationshipType('/mockurl');
        
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIPTYPE_FETCH_ERROR, error: true})
    })

    it('invokes success when a record is saved', async () => {
        /* obtain reference to thunk*/
        const thunk = saveRelationshipType('/mockurl', {});

        /**/
        const mockObjectToReturn = {
                                                relTypeId: 'SamplerelTypeId'
                                                                ,relTypeCode: 'SamplerelTypeCode'    
                                                                ,relTypeName: 'SamplerelTypeName'    
                                                                ,relTypeDesc: 'SamplerelTypeDesc'    
                                            }
        const response = Promise.resolve(mockObjectToReturn)
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIPTYPE_SAVE_SUCCESS, relationshipType: mockObjectToReturn})
    })
    
    it('invokes error when save errors out', async () => {
        /* obtain reference to thunk*/
        const thunk = saveRelationshipType('/mockurl', {});

        const response = Promise.reject('Error saving')
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(window.alert).toBeCalledWith("\"Error saving\"")
    })

})