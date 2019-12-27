import React from 'react';
import renderer from 'react-test-renderer';
import RelationshipMappingEdit from './RelationshipMappingEdit';
import ReactDom from 'react-dom';
import {changeInputValue, clickElement} from '../utils/TestUtils'

describe("RelationshipMappingEdit", ()=> {
    const mockChangeHandler = jest.fn();
    const mockSaveHandler = jest.fn();

    const mockSelectedRelationshipMapping = {
                        relId: 'SamplerelId'
                                ,sourceItemId: 'SamplesourceItemId'    
                                ,targetItemId: 'SampletargetItemId'    
                    }

    const componentToTest = <RelationshipMappingEdit selectedRelationshipMapping={mockSelectedRelationshipMapping} onEditRelationshipMapping={mockChangeHandler}
                        onSaveRelationshipMapping={mockSaveHandler}/>
    const rootDiv = document.createElement('div')
    ReactDom.render(componentToTest, rootDiv);
    document.body.appendChild(rootDiv);
    
    it('Renders fields correctly', () =>{
        const props = {
            selectedRelationshipMapping : {
                                                relId: 'SamplerelId'
                                                                ,sourceItemId: 'SamplesourceItemId'    
                                                                ,targetItemId: 'SampletargetItemId'    
                                            }
        }
        const tree = renderer.create(<RelationshipMappingEdit {...props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
        
    it('dispatches input changes', ()=> {
        changeInputValue(document.querySelector("input[name='relId'"), "TEST");
        expect(mockChangeHandler).toBeCalledTimes(1);
    })
    
    it('calls save function on click of Save button', () => {
        clickElement(document.querySelector("button[id='saveButton']"));
        expect(mockSaveHandler).toBeCalledTimes(1);
        expect(mockSaveHandler).toHaveBeenCalledWith('relationshipmapping/SamplerelId', mockSelectedRelationshipMapping)
    })

})