import React from 'react';
import renderer from 'react-test-renderer';
import ItemAttributeTypeEdit from './ItemAttributeTypeEdit';
import ReactDom from 'react-dom';
import {changeInputValue, clickElement} from '../utils/TestUtils'

describe("ItemAttributeTypeEdit", ()=> {
    const mockChangeHandler = jest.fn();
    const mockSaveHandler = jest.fn();

    const mockSelectedItemAttributeType = {
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

    const componentToTest = <ItemAttributeTypeEdit selectedItemAttributeType={mockSelectedItemAttributeType} onEditItemAttributeType={mockChangeHandler}
                        onSaveItemAttributeType={mockSaveHandler}/>
    const rootDiv = document.createElement('div')
    ReactDom.render(componentToTest, rootDiv);
    document.body.appendChild(rootDiv);
    
    it('Renders fields correctly', () =>{
        const props = {
            selectedItemAttributeType : {
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
        const tree = renderer.create(<ItemAttributeTypeEdit {...props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
        
    it('dispatches input changes', ()=> {
        changeInputValue(document.querySelector("input[name='itemAttrTypeId'"), "TEST");
        expect(mockChangeHandler).toBeCalledTimes(1);
    })
    
    it('calls save function on click of Save button', () => {
        clickElement(document.querySelector("button[id='saveButton']"));
        expect(mockSaveHandler).toBeCalledTimes(1);
        expect(mockSaveHandler).toHaveBeenCalledWith('itemattributetype/SampleitemAttrTypeId', mockSelectedItemAttributeType)
    })

})