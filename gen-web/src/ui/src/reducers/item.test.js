import {items, item} from "./item";

describe('reducers/item', ()=> {

    jest.spyOn(window, 'alert').mockImplementation(() => {});

    afterEach(() => {
        jest.clearAllMocks();
    });

    /* We are testing that when we give our reducer an action, it creates
    * an expected new state*/
    it('returns a state with items', () => {
        const dummyAction = {
            type: 'ITEMS_FETCH_SUCCESS',
            items: [

            ],
            totalRecords: 2,
            first: 1
        }

        const expectedResults = {
            records: [],
            totalRecords: 2,
            first: 1
        }

        const result = items(null, dummyAction);
        expect(result).toEqual(expectedResults)
    })

    it('returns a state with item', () => {
        const dummyAction = {
            type: 'ITEM_FETCH_SUCCESS',
            item: {
                                                itemId: 'SampleitemId'
                                                                ,itemCode: 'SampleitemCode'    
                                                                ,itemName: 'SampleitemName'    
                                            }
        }

        const expectedResults = {
                                                itemId: 'SampleitemId'
                                                                ,itemCode: 'SampleitemCode'    
                                                                ,itemName: 'SampleitemName'    
                                        }

        const result = item(null, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns a state a field edited', () => {
        const dummyAction = {
            type: 'ITEM_EDIT',
            "itemId": 'ZZZ'
        }

        const expectedResults = {
            "itemId": "ZZZ",
            attr2: 'YYY'
        }

        const result = item({attr2: 'YYY'}, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns saved item', () => {
        const dummyAction = {
            type: 'ITEM_SAVE_SUCCESS',
            "item": {
                                                itemId: 'SampleitemId'
                                                                ,itemCode: 'SampleitemCode'    
                                                                ,itemName: 'SampleitemName'    
                                            }
        }

        const expectedResult = {
                                                itemId: 'SampleitemId'
                                                                ,itemCode: 'SampleitemCode'    
                                                                ,itemName: 'SampleitemName'    
                                        }

        const result = item(null, dummyAction);

        expect(result).toEqual(expectedResult)
    })

    it('pops up alert on error', () => {
        const dummyAction = {
            type: 'ITEM_SAVE_ERROR',
            error: 'Error saving'
        }

        const result = item(null, dummyAction);
        expect(window.alert).toBeCalledWith('Error saving')
    })
})