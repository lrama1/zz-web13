import React from 'react';
import renderer from 'react-test-renderer';
import RelationshipTypeEdit from './RelationshipTypeEdit';
import ReactDom from 'react-dom';
import {changeInputValue, clickElement} from '../utils/TestUtils'

describe("RelationshipTypeEdit", ()=> {
    const mockChangeHandler = jest.fn();
    const mockSaveHandler = jest.fn();

    const mockSelectedRelationshipType = {
                        relTypeId: 'SamplerelTypeId'
                                ,relTypeCode: 'SamplerelTypeCode'    
                                ,relTypeName: 'SamplerelTypeName'    
                                ,relTypeDesc: 'SamplerelTypeDesc'    
                    }

    const componentToTest = <RelationshipTypeEdit selectedRelationshipType={mockSelectedRelationshipType} onEditRelationshipType={mockChangeHandler}
                        onSaveRelationshipType={mockSaveHandler}/>
    const rootDiv = document.createElement('div')
    ReactDom.render(componentToTest, rootDiv);
    document.body.appendChild(rootDiv);
    
    it('Renders fields correctly', () =>{
        const props = {
            selectedRelationshipType : {
                                                relTypeId: 'SamplerelTypeId'
                                                                ,relTypeCode: 'SamplerelTypeCode'    
                                                                ,relTypeName: 'SamplerelTypeName'    
                                                                ,relTypeDesc: 'SamplerelTypeDesc'    
                                            }
        }
        const tree = renderer.create(<RelationshipTypeEdit {...props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
        
    it('dispatches input changes', ()=> {
        changeInputValue(document.querySelector("input[name='relTypeId'"), "TEST");
        expect(mockChangeHandler).toBeCalledTimes(1);
    })
    
    it('calls save function on click of Save button', () => {
        clickElement(document.querySelector("button[id='saveButton']"));
        expect(mockSaveHandler).toBeCalledTimes(1);
        expect(mockSaveHandler).toHaveBeenCalledWith('relationshiptype/SamplerelTypeId', mockSelectedRelationshipType)
    })

})