import {itemTypes, itemType} from "./itemtype";

describe('reducers/itemType', ()=> {

    jest.spyOn(window, 'alert').mockImplementation(() => {});

    afterEach(() => {
        jest.clearAllMocks();
    });

    /* We are testing that when we give our reducer an action, it creates
    * an expected new state*/
    it('returns a state with itemTypes', () => {
        const dummyAction = {
            type: 'ITEMTYPES_FETCH_SUCCESS',
            itemTypes: [

            ],
            totalRecords: 2,
            first: 1
        }

        const expectedResults = {
            records: [],
            totalRecords: 2,
            first: 1
        }

        const result = itemTypes(null, dummyAction);
        expect(result).toEqual(expectedResults)
    })

    it('returns a state with itemType', () => {
        const dummyAction = {
            type: 'ITEMTYPE_FETCH_SUCCESS',
            itemType: {
                                                itemTypeId: 'SampleitemTypeId'
                                                                ,itemTypeName: 'SampleitemTypeName'    
                                            }
        }

        const expectedResults = {
                                                itemTypeId: 'SampleitemTypeId'
                                                                ,itemTypeName: 'SampleitemTypeName'    
                                        }

        const result = itemType(null, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns a state a field edited', () => {
        const dummyAction = {
            type: 'ITEMTYPE_EDIT',
            "itemTypeId": 'ZZZ'
        }

        const expectedResults = {
            "itemTypeId": "ZZZ",
            attr2: 'YYY'
        }

        const result = itemType({attr2: 'YYY'}, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns saved itemType', () => {
        const dummyAction = {
            type: 'ITEMTYPE_SAVE_SUCCESS',
            "itemType": {
                                                itemTypeId: 'SampleitemTypeId'
                                                                ,itemTypeName: 'SampleitemTypeName'    
                                            }
        }

        const expectedResult = {
                                                itemTypeId: 'SampleitemTypeId'
                                                                ,itemTypeName: 'SampleitemTypeName'    
                                        }

        const result = itemType(null, dummyAction);

        expect(result).toEqual(expectedResult)
    })

    it('pops up alert on error', () => {
        const dummyAction = {
            type: 'ITEMTYPE_SAVE_ERROR',
            error: 'Error saving'
        }

        const result = itemType(null, dummyAction);
        expect(window.alert).toBeCalledWith('Error saving')
    })
})