import {relationships, relationship} from "./relationship";

describe('reducers/relationship', ()=> {

    jest.spyOn(window, 'alert').mockImplementation(() => {});

    afterEach(() => {
        jest.clearAllMocks();
    });

    /* We are testing that when we give our reducer an action, it creates
    * an expected new state*/
    it('returns a state with relationships', () => {
        const dummyAction = {
            type: 'RELATIONSHIPS_FETCH_SUCCESS',
            relationships: [

            ],
            totalRecords: 2,
            first: 1
        }

        const expectedResults = {
            records: [],
            totalRecords: 2,
            first: 1
        }

        const result = relationships(null, dummyAction);
        expect(result).toEqual(expectedResults)
    })

    it('returns a state with relationship', () => {
        const dummyAction = {
            type: 'RELATIONSHIP_FETCH_SUCCESS',
            relationship: {
                                                relId: 'SamplerelId'
                                                                ,relName: 'SamplerelName'    
                                                                ,relDesc: 'SamplerelDesc'    
                                            }
        }

        const expectedResults = {
                                                relId: 'SamplerelId'
                                                                ,relName: 'SamplerelName'    
                                                                ,relDesc: 'SamplerelDesc'    
                                        }

        const result = relationship(null, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns a state a field edited', () => {
        const dummyAction = {
            type: 'RELATIONSHIP_EDIT',
            "relId": 'ZZZ'
        }

        const expectedResults = {
            "relId": "ZZZ",
            attr2: 'YYY'
        }

        const result = relationship({attr2: 'YYY'}, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns saved relationship', () => {
        const dummyAction = {
            type: 'RELATIONSHIP_SAVE_SUCCESS',
            "relationship": {
                                                relId: 'SamplerelId'
                                                                ,relName: 'SamplerelName'    
                                                                ,relDesc: 'SamplerelDesc'    
                                            }
        }

        const expectedResult = {
                                                relId: 'SamplerelId'
                                                                ,relName: 'SamplerelName'    
                                                                ,relDesc: 'SamplerelDesc'    
                                        }

        const result = relationship(null, dummyAction);

        expect(result).toEqual(expectedResult)
    })

    it('pops up alert on error', () => {
        const dummyAction = {
            type: 'RELATIONSHIP_SAVE_ERROR',
            error: 'Error saving'
        }

        const result = relationship(null, dummyAction);
        expect(window.alert).toBeCalledWith('Error saving')
    })
})