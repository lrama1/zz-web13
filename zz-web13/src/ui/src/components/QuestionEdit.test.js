import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import QuestionEdit from './QuestionEdit'
import { shallow, configure } from 'enzyme';


describe("QuestionEdit", ()=> {
    it('Renders fields correctly', () =>{
        const props = {
            selectedQuestion : {
                                                questionId: 'SamplequestionId'
                                                                ,questionText: 'SamplequestionText'    
                                                                ,questionAnswer: 'SamplequestionAnswer'    
                                                                ,visible: 'Samplevisible'    
                                            }
        }
        const tree = renderer.create(<QuestionEdit {...props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('dispatches input changes', () =>{
        configure({adapter: new Adapter()});

        const onEditQuestion = jest.fn();
        const onSaveQuestion = jest.fn();

        const props = {
            selectedQuestion : {
                                                questionId: 'SamplequestionId'
                                                                ,questionText: 'SamplequestionText'    
                                                                ,questionAnswer: 'SamplequestionAnswer'    
                                                                ,visible: 'Samplevisible'    
                                            },
            onEditQuestion,
            onSaveQuestion
        }

        const wrapper = shallow(<QuestionEdit {...props} />);
                wrapper.find('#questionId').simulate('change', {target: {name: 'questionId', value: 'SamplequestionId'}});
        expect(onEditQuestion).toHaveBeenCalledWith(['questionId'], 'SamplequestionId');
                wrapper.find('#questionText').simulate('change', {target: {name: 'questionText', value: 'SamplequestionText'}});
        expect(onEditQuestion).toHaveBeenCalledWith(['questionText'], 'SamplequestionText');
                wrapper.find('#questionAnswer').simulate('change', {target: {name: 'questionAnswer', value: 'SamplequestionAnswer'}});
        expect(onEditQuestion).toHaveBeenCalledWith(['questionAnswer'], 'SamplequestionAnswer');
                wrapper.find('#visible').simulate('change', {target: {name: 'visible', value: 'Samplevisible'}});
        expect(onEditQuestion).toHaveBeenCalledWith(['visible'], 'Samplevisible');
                        
        wrapper.find('#saveButton').simulate('click',{preventDefault: ()=>{}});
        expect(onSaveQuestion).toHaveBeenCalled();
    })

})