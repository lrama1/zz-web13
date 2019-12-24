import {itemAttributeTypes, itemAttributeType} from "./itemattributetype";

describe('reducers/itemAttributeType', ()=> {

    jest.spyOn(window, 'alert').mockImplementation(() => {});

    afterEach(() => {
        jest.clearAllMocks();
    });

    /* We are testing that when we give our reducer an action, it creates
    * an expected new state*/
    it('returns a state with itemAttributeTypes', () => {
        const dummyAction = {
            type: 'ITEMATTRIBUTETYPES_FETCH_SUCCESS',
            itemAttributeTypes: [

            ],
            totalRecords: 2,
            first: 1
        }

        const expectedResults = {
            records: [],
            totalRecords: 2,
            first: 1
        }

        const result = itemAttributeTypes(null, dummyAction);
        expect(result).toEqual(expectedResults)
    })

    it('returns a state with itemAttributeType', () => {
        const dummyAction = {
            type: 'ITEMATTRIBUTETYPE_FETCH_SUCCESS',
            itemAttributeType: {
                                                itemAttrTypeId: 'SampleitemAttrTypeId'
                                                                ,itemAttrTypeCode: 'SampleitemAttrTypeCode'    
                                                                ,itemAttrTypeName: 'SampleitemAttrTypeName'    
                                                                ,itemAttrTypeDesc: 'SampleitemAttrTypeDesc'    
                                                                ,itemAttrTypeLength: 'SampleitemAttrTypeLength'    
                                                                ,itemAttrTypeIsSearchable: 'SampleitemAttrTypeIsSearchable'    
                                                                ,itemAttrTypeDisplayIndex: 'SampleitemAttrTypeDisplayIndex'    
                                                                ,itemAttrTypeIsRequired: 'SampleitemAttrTypeIsRequired'    
                                                                ,itemAttrTypeIsMetaphoneKey: 'SampleitemAttrTypeIsMetaphoneKey'    
                                                                ,itemAttrTypeMetaphonekeypos: 'SampleitemAttrTypeMetaphonekeypos'    
                                            }
        }

        const expectedResults = {
                                                itemAttrTypeId: 'SampleitemAttrTypeId'
                                                                ,itemAttrTypeCode: 'SampleitemAttrTypeCode'    
                                                                ,itemAttrTypeName: 'SampleitemAttrTypeName'    
                                                                ,itemAttrTypeDesc: 'SampleitemAttrTypeDesc'    
                                                                ,itemAttrTypeLength: 'SampleitemAttrTypeLength'    
                                                                ,itemAttrTypeIsSearchable: 'SampleitemAttrTypeIsSearchable'    
                                                                ,itemAttrTypeDisplayIndex: 'SampleitemAttrTypeDisplayIndex'    
                                                                ,itemAttrTypeIsRequired: 'SampleitemAttrTypeIsRequired'    
                                                                ,itemAttrTypeIsMetaphoneKey: 'SampleitemAttrTypeIsMetaphoneKey'    
                                                                ,itemAttrTypeMetaphonekeypos: 'SampleitemAttrTypeMetaphonekeypos'    
                                        }

        const result = itemAttributeType(null, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns a state a field edited', () => {
        const dummyAction = {
            type: 'ITEMATTRIBUTETYPE_EDIT',
            "itemAttrTypeId": 'ZZZ'
        }

        const expectedResults = {
            "itemAttrTypeId": "ZZZ",
            attr2: 'YYY'
        }

        const result = itemAttributeType({attr2: 'YYY'}, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns saved itemAttributeType', () => {
        const dummyAction = {
            type: 'ITEMATTRIBUTETYPE_SAVE_SUCCESS',
            "itemAttributeType": {
                                                itemAttrTypeId: 'SampleitemAttrTypeId'
                                                                ,itemAttrTypeCode: 'SampleitemAttrTypeCode'    
                                                                ,itemAttrTypeName: 'SampleitemAttrTypeName'    
                                                                ,itemAttrTypeDesc: 'SampleitemAttrTypeDesc'    
                                                                ,itemAttrTypeLength: 'SampleitemAttrTypeLength'    
                                                                ,itemAttrTypeIsSearchable: 'SampleitemAttrTypeIsSearchable'    
                                                                ,itemAttrTypeDisplayIndex: 'SampleitemAttrTypeDisplayIndex'    
                                                                ,itemAttrTypeIsRequired: 'SampleitemAttrTypeIsRequired'    
                                                                ,itemAttrTypeIsMetaphoneKey: 'SampleitemAttrTypeIsMetaphoneKey'    
                                                                ,itemAttrTypeMetaphonekeypos: 'SampleitemAttrTypeMetaphonekeypos'    
                                            }
        }

        const expectedResult = {
                                                itemAttrTypeId: 'SampleitemAttrTypeId'
                                                                ,itemAttrTypeCode: 'SampleitemAttrTypeCode'    
                                                                ,itemAttrTypeName: 'SampleitemAttrTypeName'    
                                                                ,itemAttrTypeDesc: 'SampleitemAttrTypeDesc'    
                                                                ,itemAttrTypeLength: 'SampleitemAttrTypeLength'    
                                                                ,itemAttrTypeIsSearchable: 'SampleitemAttrTypeIsSearchable'    
                                                                ,itemAttrTypeDisplayIndex: 'SampleitemAttrTypeDisplayIndex'    
                                                                ,itemAttrTypeIsRequired: 'SampleitemAttrTypeIsRequired'    
                                                                ,itemAttrTypeIsMetaphoneKey: 'SampleitemAttrTypeIsMetaphoneKey'    
                                                                ,itemAttrTypeMetaphonekeypos: 'SampleitemAttrTypeMetaphonekeypos'    
                                        }

        const result = itemAttributeType(null, dummyAction);

        expect(result).toEqual(expectedResult)
    })

    it('pops up alert on error', () => {
        const dummyAction = {
            type: 'ITEMATTRIBUTETYPE_SAVE_ERROR',
            error: 'Error saving'
        }

        const result = itemAttributeType(null, dummyAction);
        expect(window.alert).toBeCalledWith('Error saving')
    })
})