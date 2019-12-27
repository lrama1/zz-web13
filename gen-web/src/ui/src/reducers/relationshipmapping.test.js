import {relationshipMappings, relationshipMapping} from "./relationshipmapping";

describe('reducers/relationshipMapping', ()=> {

    jest.spyOn(window, 'alert').mockImplementation(() => {});

    afterEach(() => {
        jest.clearAllMocks();
    });

    /* We are testing that when we give our reducer an action, it creates
    * an expected new state*/
    it('returns a state with relationshipMappings', () => {
        const dummyAction = {
            type: 'RELATIONSHIPMAPPINGS_FETCH_SUCCESS',
            relationshipMappings: [

            ],
            totalRecords: 2,
            first: 1
        }

        const expectedResults = {
            records: [],
            totalRecords: 2,
            first: 1
        }

        const result = relationshipMappings(null, dummyAction);
        expect(result).toEqual(expectedResults)
    })

    it('returns a state with relationshipMapping', () => {
        const dummyAction = {
            type: 'RELATIONSHIPMAPPING_FETCH_SUCCESS',
            relationshipMapping: {
                                                relId: 'SamplerelId'
                                                                ,sourceItemId: 'SamplesourceItemId'    
                                                                ,targetItemId: 'SampletargetItemId'    
                                            }
        }

        const expectedResults = {
                                                relId: 'SamplerelId'
                                                                ,sourceItemId: 'SamplesourceItemId'    
                                                                ,targetItemId: 'SampletargetItemId'    
                                        }

        const result = relationshipMapping(null, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns a state a field edited', () => {
        const dummyAction = {
            type: 'RELATIONSHIPMAPPING_EDIT',
            "relId": 'ZZZ'
        }

        const expectedResults = {
            "relId": "ZZZ",
            attr2: 'YYY'
        }

        const result = relationshipMapping({attr2: 'YYY'}, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns saved relationshipMapping', () => {
        const dummyAction = {
            type: 'RELATIONSHIPMAPPING_SAVE_SUCCESS',
            "relationshipMapping": {
                                                relId: 'SamplerelId'
                                                                ,sourceItemId: 'SamplesourceItemId'    
                                                                ,targetItemId: 'SampletargetItemId'    
                                            }
        }

        const expectedResult = {
                                                relId: 'SamplerelId'
                                                                ,sourceItemId: 'SamplesourceItemId'    
                                                                ,targetItemId: 'SampletargetItemId'    
                                        }

        const result = relationshipMapping(null, dummyAction);

        expect(result).toEqual(expectedResult)
    })

    it('pops up alert on error', () => {
        const dummyAction = {
            type: 'RELATIONSHIPMAPPING_SAVE_ERROR',
            error: 'Error saving'
        }

        const result = relationshipMapping(null, dummyAction);
        expect(window.alert).toBeCalledWith('Error saving')
    })
})