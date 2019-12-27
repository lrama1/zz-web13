
import {getRequest, putRequest} from "../utils/authority";
import {
    RELATIONSHIP_FETCH_SUCCESS,
    RELATIONSHIP_SAVE_SUCCESS,
    RELATIONSHIPS_FETCH_SUCCESS,
    RELATIONSHIP_SAVE_ERROR,
    RELATIONSHIPS_FETCH_ERROR,
    RELATIONSHIP_FETCH_ERROR,
    fetchAllRelationships,
    fetchRelationship,
    saveRelationship
} from "./relationship";

jest.mock('../utils/authority')

describe('relationship (action)', () => {
    
    const mockDispatch = jest.fn();
    const mockGetState = jest.fn();

    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('invokes success when list of relationships are returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllRelationships('/mockurl', 1);

        /**/
        const response = Promise.resolve({rows:[], totalRecords: 0, lastPage: 1})
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIPS_FETCH_SUCCESS, relationships: [], totalRecords: 0, lastPage: 1, first: 1})
    })

    it('invokes error when an error occured in the service', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllRelationships('/mockurl', 1);

        /**/
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIPS_FETCH_ERROR, error: true})
    })
    
    it('invokes success when a single relationship is returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchRelationship('/mockurl');

        /**/
        const mockObjectToReturn = {
                                                relId: 'SamplerelId'
                                                                ,relName: 'SamplerelName'    
                                                                ,relDesc: 'SamplerelDesc'    
                                            }
        
        const response = Promise.resolve(mockObjectToReturn)
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIP_FETCH_SUCCESS, relationship: mockObjectToReturn})
    })
    
    it('invokes error when a single relationship fetch returned error', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchRelationship('/mockurl');
        
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIP_FETCH_ERROR, error: true})
    })

    it('invokes success when a record is saved', async () => {
        /* obtain reference to thunk*/
        const thunk = saveRelationship('/mockurl', {});

        /**/
        const mockObjectToReturn = {
                                                relId: 'SamplerelId'
                                                                ,relName: 'SamplerelName'    
                                                                ,relDesc: 'SamplerelDesc'    
                                            }
        const response = Promise.resolve(mockObjectToReturn)
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIP_SAVE_SUCCESS, relationship: mockObjectToReturn})
    })
    
    it('invokes error when save errors out', async () => {
        /* obtain reference to thunk*/
        const thunk = saveRelationship('/mockurl', {});

        const response = Promise.reject('Error saving')
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(window.alert).toBeCalledWith("\"Error saving\"")
    })

})