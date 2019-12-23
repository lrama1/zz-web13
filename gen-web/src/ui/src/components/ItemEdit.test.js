import React from 'react';
import renderer from 'react-test-renderer';
import ItemEdit from './ItemEdit';
import ReactDom from 'react-dom';
import {changeInputValue, clickElement} from '../utils/TestUtils'

describe("ItemEdit", ()=> {
    const mockChangeHandler = jest.fn();
    const mockSaveHandler = jest.fn();

    const mockSelectedItem = {
                        itemId: 'SampleitemId'
                                ,itemCode: 'SampleitemCode'    
                                ,itemName: 'SampleitemName'    
                    }

    const componentToTest = <ItemEdit selectedItem={mockSelectedItem} onEditItem={mockChangeHandler}
                        onSaveItem={mockSaveHandler}/>
    const rootDiv = document.createElement('div')
    ReactDom.render(componentToTest, rootDiv);
    document.body.appendChild(rootDiv);
    
    it('Renders fields correctly', () =>{
        const props = {
            selectedItem : {
                                                itemId: 'SampleitemId'
                                                                ,itemCode: 'SampleitemCode'    
                                                                ,itemName: 'SampleitemName'    
                                            }
        }
        const tree = renderer.create(<ItemEdit {...props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
        
    it('dispatches input changes', ()=> {
        changeInputValue(document.querySelector("input[name='itemId'"), "TEST");
        expect(mockChangeHandler).toBeCalledTimes(1);
    })
    
    it('calls save function on click of Save button', () => {
        clickElement(document.querySelector("button[id='saveButton']"));
        expect(mockSaveHandler).toBeCalledTimes(1);
        expect(mockSaveHandler).toHaveBeenCalledWith('item/SampleitemId', mockSelectedItem)
    })

})