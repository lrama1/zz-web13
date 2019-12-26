import React from 'react';
import renderer from 'react-test-renderer';
import ItemAttributeEdit from './ItemAttributeEdit';
import ReactDom from 'react-dom';
import {changeInputValue, clickElement} from '../utils/TestUtils'

describe("ItemAttributeEdit", ()=> {
    const mockChangeHandler = jest.fn();
    const mockSaveHandler = jest.fn();

    const mockSelectedItemAttribute = {
                        itemAttrId: 'SampleitemAttrId'
                                ,itemAttrValue: 'SampleitemAttrValue'    
                    }

    const componentToTest = <ItemAttributeEdit selectedItemAttribute={mockSelectedItemAttribute} onEditItemAttribute={mockChangeHandler}
                        onSaveItemAttribute={mockSaveHandler}/>
    const rootDiv = document.createElement('div')
    ReactDom.render(componentToTest, rootDiv);
    document.body.appendChild(rootDiv);
    
    it('Renders fields correctly', () =>{
        const props = {
            selectedItemAttribute : {
                                                itemAttrId: 'SampleitemAttrId'
                                                                ,itemAttrValue: 'SampleitemAttrValue'    
                                            }
        }
        const tree = renderer.create(<ItemAttributeEdit {...props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
        
    it('dispatches input changes', ()=> {
        changeInputValue(document.querySelector("input[name='itemAttrId'"), "TEST");
        expect(mockChangeHandler).toBeCalledTimes(1);
    })
    
    it('calls save function on click of Save button', () => {
        clickElement(document.querySelector("button[id='saveButton']"));
        expect(mockSaveHandler).toBeCalledTimes(1);
        expect(mockSaveHandler).toHaveBeenCalledWith('itemattribute/SampleitemAttrId', mockSelectedItemAttribute)
    })

})