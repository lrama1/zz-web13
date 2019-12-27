import React from 'react';
import renderer from 'react-test-renderer';
import RelationshipEdit from './RelationshipEdit';
import ReactDom from 'react-dom';
import {changeInputValue, clickElement} from '../utils/TestUtils'

describe("RelationshipEdit", ()=> {
    const mockChangeHandler = jest.fn();
    const mockSaveHandler = jest.fn();

    const mockSelectedRelationship = {
                        relId: 'SamplerelId'
                                ,relName: 'SamplerelName'    
                                ,relDesc: 'SamplerelDesc'    
                    }

    const componentToTest = <RelationshipEdit selectedRelationship={mockSelectedRelationship} onEditRelationship={mockChangeHandler}
                        onSaveRelationship={mockSaveHandler}/>
    const rootDiv = document.createElement('div')
    ReactDom.render(componentToTest, rootDiv);
    document.body.appendChild(rootDiv);
    
    it('Renders fields correctly', () =>{
        const props = {
            selectedRelationship : {
                                                relId: 'SamplerelId'
                                                                ,relName: 'SamplerelName'    
                                                                ,relDesc: 'SamplerelDesc'    
                                            }
        }
        const tree = renderer.create(<RelationshipEdit {...props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
        
    it('dispatches input changes', ()=> {
        changeInputValue(document.querySelector("input[name='relId'"), "TEST");
        expect(mockChangeHandler).toBeCalledTimes(1);
    })
    
    it('calls save function on click of Save button', () => {
        clickElement(document.querySelector("button[id='saveButton']"));
        expect(mockSaveHandler).toBeCalledTimes(1);
        expect(mockSaveHandler).toHaveBeenCalledWith('relationship/SamplerelId', mockSelectedRelationship)
    })

})