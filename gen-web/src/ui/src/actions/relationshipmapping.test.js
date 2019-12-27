
import {getRequest, putRequest} from "../utils/authority";
import {
    RELATIONSHIPMAPPING_FETCH_SUCCESS,
    RELATIONSHIPMAPPING_SAVE_SUCCESS,
    RELATIONSHIPMAPPINGS_FETCH_SUCCESS,
    RELATIONSHIPMAPPING_SAVE_ERROR,
    RELATIONSHIPMAPPINGS_FETCH_ERROR,
    RELATIONSHIPMAPPING_FETCH_ERROR,
    fetchAllRelationshipMappings,
    fetchRelationshipMapping,
    saveRelationshipMapping
} from "./relationshipmapping";

jest.mock('../utils/authority')

describe('relationshipMapping (action)', () => {
    
    const mockDispatch = jest.fn();
    const mockGetState = jest.fn();

    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('invokes success when list of relationshipMappings are returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllRelationshipMappings('/mockurl', 1);

        /**/
        const response = Promise.resolve({rows:[], totalRecords: 0, lastPage: 1})
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIPMAPPINGS_FETCH_SUCCESS, relationshipMappings: [], totalRecords: 0, lastPage: 1, first: 1})
    })

    it('invokes error when an error occured in the service', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllRelationshipMappings('/mockurl', 1);

        /**/
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIPMAPPINGS_FETCH_ERROR, error: true})
    })
    
    it('invokes success when a single relationshipMapping is returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchRelationshipMapping('/mockurl');

        /**/
        const mockObjectToReturn = {
                                                relId: 'SamplerelId'
                                                                ,sourceItemId: 'SamplesourceItemId'    
                                                                ,targetItemId: 'SampletargetItemId'    
                                            }
        
        const response = Promise.resolve(mockObjectToReturn)
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIPMAPPING_FETCH_SUCCESS, relationshipMapping: mockObjectToReturn})
    })
    
    it('invokes error when a single relationshipMapping fetch returned error', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchRelationshipMapping('/mockurl');
        
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIPMAPPING_FETCH_ERROR, error: true})
    })

    it('invokes success when a record is saved', async () => {
        /* obtain reference to thunk*/
        const thunk = saveRelationshipMapping('/mockurl', {});

        /**/
        const mockObjectToReturn = {
                                                relId: 'SamplerelId'
                                                                ,sourceItemId: 'SamplesourceItemId'    
                                                                ,targetItemId: 'SampletargetItemId'    
                                            }
        const response = Promise.resolve(mockObjectToReturn)
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: RELATIONSHIPMAPPING_SAVE_SUCCESS, relationshipMapping: mockObjectToReturn})
    })
    
    it('invokes error when save errors out', async () => {
        /* obtain reference to thunk*/
        const thunk = saveRelationshipMapping('/mockurl', {});

        const response = Promise.reject('Error saving')
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(window.alert).toBeCalledWith("\"Error saving\"")
    })

})