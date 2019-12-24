import React from 'react';
import renderer from 'react-test-renderer';
import ItemAttrTypeDatatypeEdit from './ItemAttrTypeDatatypeEdit';
import ReactDom from 'react-dom';
import {changeInputValue, clickElement} from '../utils/TestUtils'

describe("ItemAttrTypeDatatypeEdit", ()=> {
    const mockChangeHandler = jest.fn();
    const mockSaveHandler = jest.fn();

    const mockSelectedItemAttrTypeDatatype = {
                        itemAttrTypeDatatypeCode: 'SampleitemAttrTypeDatatypeCode'
                                ,itemAttrTypeDatatypeName: 'SampleitemAttrTypeDatatypeName'    
                                ,itemAttrTypeDatatypeDesc: 'SampleitemAttrTypeDatatypeDesc'    
                                ,regexPattern: 'SampleregexPattern'    
                    }

    const componentToTest = <ItemAttrTypeDatatypeEdit selectedItemAttrTypeDatatype={mockSelectedItemAttrTypeDatatype} onEditItemAttrTypeDatatype={mockChangeHandler}
                        onSaveItemAttrTypeDatatype={mockSaveHandler}/>
    const rootDiv = document.createElement('div')
    ReactDom.render(componentToTest, rootDiv);
    document.body.appendChild(rootDiv);
    
    it('Renders fields correctly', () =>{
        const props = {
            selectedItemAttrTypeDatatype : {
                                                itemAttrTypeDatatypeCode: 'SampleitemAttrTypeDatatypeCode'
                                                                ,itemAttrTypeDatatypeName: 'SampleitemAttrTypeDatatypeName'    
                                                                ,itemAttrTypeDatatypeDesc: 'SampleitemAttrTypeDatatypeDesc'    
                                                                ,regexPattern: 'SampleregexPattern'    
                                            }
        }
        const tree = renderer.create(<ItemAttrTypeDatatypeEdit {...props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
        
    it('dispatches input changes', ()=> {
        changeInputValue(document.querySelector("input[name='itemAttrTypeDatatypeCode'"), "TEST");
        expect(mockChangeHandler).toBeCalledTimes(1);
    })
    
    it('calls save function on click of Save button', () => {
        clickElement(document.querySelector("button[id='saveButton']"));
        expect(mockSaveHandler).toBeCalledTimes(1);
        expect(mockSaveHandler).toHaveBeenCalledWith('itemattrtypedatatype/SampleitemAttrTypeDatatypeCode', mockSelectedItemAttrTypeDatatype)
    })

})