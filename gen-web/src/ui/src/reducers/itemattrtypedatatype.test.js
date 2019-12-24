import {itemAttrTypeDatatypes, itemAttrTypeDatatype} from "./itemattrtypedatatype";

describe('reducers/itemAttrTypeDatatype', ()=> {

    jest.spyOn(window, 'alert').mockImplementation(() => {});

    afterEach(() => {
        jest.clearAllMocks();
    });

    /* We are testing that when we give our reducer an action, it creates
    * an expected new state*/
    it('returns a state with itemAttrTypeDatatypes', () => {
        const dummyAction = {
            type: 'ITEMATTRTYPEDATATYPES_FETCH_SUCCESS',
            itemAttrTypeDatatypes: [

            ],
            totalRecords: 2,
            first: 1
        }

        const expectedResults = {
            records: [],
            totalRecords: 2,
            first: 1
        }

        const result = itemAttrTypeDatatypes(null, dummyAction);
        expect(result).toEqual(expectedResults)
    })

    it('returns a state with itemAttrTypeDatatype', () => {
        const dummyAction = {
            type: 'ITEMATTRTYPEDATATYPE_FETCH_SUCCESS',
            itemAttrTypeDatatype: {
                                                itemAttrTypeDatatypeCode: 'SampleitemAttrTypeDatatypeCode'
                                                                ,itemAttrTypeDatatypeName: 'SampleitemAttrTypeDatatypeName'    
                                                                ,itemAttrTypeDatatypeDesc: 'SampleitemAttrTypeDatatypeDesc'    
                                                                ,regexPattern: 'SampleregexPattern'    
                                            }
        }

        const expectedResults = {
                                                itemAttrTypeDatatypeCode: 'SampleitemAttrTypeDatatypeCode'
                                                                ,itemAttrTypeDatatypeName: 'SampleitemAttrTypeDatatypeName'    
                                                                ,itemAttrTypeDatatypeDesc: 'SampleitemAttrTypeDatatypeDesc'    
                                                                ,regexPattern: 'SampleregexPattern'    
                                        }

        const result = itemAttrTypeDatatype(null, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns a state a field edited', () => {
        const dummyAction = {
            type: 'ITEMATTRTYPEDATATYPE_EDIT',
            "itemAttrTypeDatatypeCode": 'ZZZ'
        }

        const expectedResults = {
            "itemAttrTypeDatatypeCode": "ZZZ",
            attr2: 'YYY'
        }

        const result = itemAttrTypeDatatype({attr2: 'YYY'}, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns saved itemAttrTypeDatatype', () => {
        const dummyAction = {
            type: 'ITEMATTRTYPEDATATYPE_SAVE_SUCCESS',
            "itemAttrTypeDatatype": {
                                                itemAttrTypeDatatypeCode: 'SampleitemAttrTypeDatatypeCode'
                                                                ,itemAttrTypeDatatypeName: 'SampleitemAttrTypeDatatypeName'    
                                                                ,itemAttrTypeDatatypeDesc: 'SampleitemAttrTypeDatatypeDesc'    
                                                                ,regexPattern: 'SampleregexPattern'    
                                            }
        }

        const expectedResult = {
                                                itemAttrTypeDatatypeCode: 'SampleitemAttrTypeDatatypeCode'
                                                                ,itemAttrTypeDatatypeName: 'SampleitemAttrTypeDatatypeName'    
                                                                ,itemAttrTypeDatatypeDesc: 'SampleitemAttrTypeDatatypeDesc'    
                                                                ,regexPattern: 'SampleregexPattern'    
                                        }

        const result = itemAttrTypeDatatype(null, dummyAction);

        expect(result).toEqual(expectedResult)
    })

    it('pops up alert on error', () => {
        const dummyAction = {
            type: 'ITEMATTRTYPEDATATYPE_SAVE_ERROR',
            error: 'Error saving'
        }

        const result = itemAttrTypeDatatype(null, dummyAction);
        expect(window.alert).toBeCalledWith('Error saving')
    })
})