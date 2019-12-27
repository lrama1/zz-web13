import {relationshipTypes, relationshipType} from "./relationshiptype";

describe('reducers/relationshipType', ()=> {

    jest.spyOn(window, 'alert').mockImplementation(() => {});

    afterEach(() => {
        jest.clearAllMocks();
    });

    /* We are testing that when we give our reducer an action, it creates
    * an expected new state*/
    it('returns a state with relationshipTypes', () => {
        const dummyAction = {
            type: 'RELATIONSHIPTYPES_FETCH_SUCCESS',
            relationshipTypes: [

            ],
            totalRecords: 2,
            first: 1
        }

        const expectedResults = {
            records: [],
            totalRecords: 2,
            first: 1
        }

        const result = relationshipTypes(null, dummyAction);
        expect(result).toEqual(expectedResults)
    })

    it('returns a state with relationshipType', () => {
        const dummyAction = {
            type: 'RELATIONSHIPTYPE_FETCH_SUCCESS',
            relationshipType: {
                                                relTypeId: 'SamplerelTypeId'
                                                                ,relTypeCode: 'SamplerelTypeCode'    
                                                                ,relTypeName: 'SamplerelTypeName'    
                                                                ,relTypeDesc: 'SamplerelTypeDesc'    
                                            }
        }

        const expectedResults = {
                                                relTypeId: 'SamplerelTypeId'
                                                                ,relTypeCode: 'SamplerelTypeCode'    
                                                                ,relTypeName: 'SamplerelTypeName'    
                                                                ,relTypeDesc: 'SamplerelTypeDesc'    
                                        }

        const result = relationshipType(null, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns a state a field edited', () => {
        const dummyAction = {
            type: 'RELATIONSHIPTYPE_EDIT',
            "relTypeId": 'ZZZ'
        }

        const expectedResults = {
            "relTypeId": "ZZZ",
            attr2: 'YYY'
        }

        const result = relationshipType({attr2: 'YYY'}, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns saved relationshipType', () => {
        const dummyAction = {
            type: 'RELATIONSHIPTYPE_SAVE_SUCCESS',
            "relationshipType": {
                                                relTypeId: 'SamplerelTypeId'
                                                                ,relTypeCode: 'SamplerelTypeCode'    
                                                                ,relTypeName: 'SamplerelTypeName'    
                                                                ,relTypeDesc: 'SamplerelTypeDesc'    
                                            }
        }

        const expectedResult = {
                                                relTypeId: 'SamplerelTypeId'
                                                                ,relTypeCode: 'SamplerelTypeCode'    
                                                                ,relTypeName: 'SamplerelTypeName'    
                                                                ,relTypeDesc: 'SamplerelTypeDesc'    
                                        }

        const result = relationshipType(null, dummyAction);

        expect(result).toEqual(expectedResult)
    })

    it('pops up alert on error', () => {
        const dummyAction = {
            type: 'RELATIONSHIPTYPE_SAVE_ERROR',
            error: 'Error saving'
        }

        const result = relationshipType(null, dummyAction);
        expect(window.alert).toBeCalledWith('Error saving')
    })
})