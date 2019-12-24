import React from 'react';
import renderer from 'react-test-renderer';
import ItemTypeEdit from './ItemTypeEdit';
import ReactDom from 'react-dom';
import {changeInputValue, clickElement} from '../utils/TestUtils'

describe("ItemTypeEdit", ()=> {
    const mockChangeHandler = jest.fn();
    const mockSaveHandler = jest.fn();

    const mockSelectedItemType = {
                        itemTypeId: 'SampleitemTypeId'
                                ,itemTypeName: 'SampleitemTypeName'    
                    }

    const componentToTest = <ItemTypeEdit selectedItemType={mockSelectedItemType} onEditItemType={mockChangeHandler}
                        onSaveItemType={mockSaveHandler}/>
    const rootDiv = document.createElement('div')
    ReactDom.render(componentToTest, rootDiv);
    document.body.appendChild(rootDiv);
    
    it('Renders fields correctly', () =>{
        const props = {
            selectedItemType : {
                                                itemTypeId: 'SampleitemTypeId'
                                                                ,itemTypeName: 'SampleitemTypeName'    
                                            }
        }
        const tree = renderer.create(<ItemTypeEdit {...props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
        
    it('dispatches input changes', ()=> {
        changeInputValue(document.querySelector("input[name='itemTypeId'"), "TEST");
        expect(mockChangeHandler).toBeCalledTimes(1);
    })
    
    it('calls save function on click of Save button', () => {
        clickElement(document.querySelector("button[id='saveButton']"));
        expect(mockSaveHandler).toBeCalledTimes(1);
        expect(mockSaveHandler).toHaveBeenCalledWith('itemtype/SampleitemTypeId', mockSelectedItemType)
    })

})