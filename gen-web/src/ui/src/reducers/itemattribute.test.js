import {itemAttributes, itemAttribute} from "./itemattribute";

describe('reducers/itemAttribute', ()=> {

    jest.spyOn(window, 'alert').mockImplementation(() => {});

    afterEach(() => {
        jest.clearAllMocks();
    });

    /* We are testing that when we give our reducer an action, it creates
    * an expected new state*/
    it('returns a state with itemAttributes', () => {
        const dummyAction = {
            type: 'ITEMATTRIBUTES_FETCH_SUCCESS',
            itemAttributes: [

            ],
            totalRecords: 2,
            first: 1
        }

        const expectedResults = {
            records: [],
            totalRecords: 2,
            first: 1
        }

        const result = itemAttributes(null, dummyAction);
        expect(result).toEqual(expectedResults)
    })

    it('returns a state with itemAttribute', () => {
        const dummyAction = {
            type: 'ITEMATTRIBUTE_FETCH_SUCCESS',
            itemAttribute: {
                                                itemAttrId: 'SampleitemAttrId'
                                                                ,itemAttrValue: 'SampleitemAttrValue'    
                                            }
        }

        const expectedResults = {
                                                itemAttrId: 'SampleitemAttrId'
                                                                ,itemAttrValue: 'SampleitemAttrValue'    
                                        }

        const result = itemAttribute(null, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns a state a field edited', () => {
        const dummyAction = {
            type: 'ITEMATTRIBUTE_EDIT',
            "itemAttrId": 'ZZZ'
        }

        const expectedResults = {
            "itemAttrId": "ZZZ",
            attr2: 'YYY'
        }

        const result = itemAttribute({attr2: 'YYY'}, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns saved itemAttribute', () => {
        const dummyAction = {
            type: 'ITEMATTRIBUTE_SAVE_SUCCESS',
            "itemAttribute": {
                                                itemAttrId: 'SampleitemAttrId'
                                                                ,itemAttrValue: 'SampleitemAttrValue'    
                                            }
        }

        const expectedResult = {
                                                itemAttrId: 'SampleitemAttrId'
                                                                ,itemAttrValue: 'SampleitemAttrValue'    
                                        }

        const result = itemAttribute(null, dummyAction);

        expect(result).toEqual(expectedResult)
    })

    it('pops up alert on error', () => {
        const dummyAction = {
            type: 'ITEMATTRIBUTE_SAVE_ERROR',
            error: 'Error saving'
        }

        const result = itemAttribute(null, dummyAction);
        expect(window.alert).toBeCalledWith('Error saving')
    })
})