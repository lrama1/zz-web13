
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import {clickElement} from '../utils/TestUtils';
import ItemAttributeTypeList from "../components/ItemAttributeTypeList";

describe("ItemAttributeTypeList", () => {
    const props = {
        history: []
    }

    const mockFetchItemAttributeType = jest.fn();
    const mockFetchAllItemAttributeTypes = jest.fn();
    const mockItemAttributeTypes =
        [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
          {itemAttrTypeId: 'Sample-itemAttrTypeId0',itemAttrTypeCode: 'Sample-itemAttrTypeCode0',itemAttrTypeName: 'Sample-itemAttrTypeName0',itemAttrTypeDesc: 'Sample-itemAttrTypeDesc0',itemAttrTypeLength: 'Sample-itemAttrTypeLength0',itemAttrTypeIsSearchable: 'Sample-itemAttrTypeIsSearchable0',itemAttrTypeDisplayIndex: 'Sample-itemAttrTypeDisplayIndex0',itemAttrTypeIsRequired: 'Sample-itemAttrTypeIsRequired0',itemAttrTypeIsMetaphoneKey: 'Sample-itemAttrTypeIsMetaphoneKey0',itemAttrTypeMetaphonekeypos: 'Sample-itemAttrTypeMetaphonekeypos0'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          {itemAttrTypeId: 'Sample-itemAttrTypeId1',itemAttrTypeCode: 'Sample-itemAttrTypeCode1',itemAttrTypeName: 'Sample-itemAttrTypeName1',itemAttrTypeDesc: 'Sample-itemAttrTypeDesc1',itemAttrTypeLength: 'Sample-itemAttrTypeLength1',itemAttrTypeIsSearchable: 'Sample-itemAttrTypeIsSearchable1',itemAttrTypeDisplayIndex: 'Sample-itemAttrTypeDisplayIndex1',itemAttrTypeIsRequired: 'Sample-itemAttrTypeIsRequired1',itemAttrTypeIsMetaphoneKey: 'Sample-itemAttrTypeIsMetaphoneKey1',itemAttrTypeMetaphonekeypos: 'Sample-itemAttrTypeMetaphonekeypos1'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          {itemAttrTypeId: 'Sample-itemAttrTypeId2',itemAttrTypeCode: 'Sample-itemAttrTypeCode2',itemAttrTypeName: 'Sample-itemAttrTypeName2',itemAttrTypeDesc: 'Sample-itemAttrTypeDesc2',itemAttrTypeLength: 'Sample-itemAttrTypeLength2',itemAttrTypeIsSearchable: 'Sample-itemAttrTypeIsSearchable2',itemAttrTypeDisplayIndex: 'Sample-itemAttrTypeDisplayIndex2',itemAttrTypeIsRequired: 'Sample-itemAttrTypeIsRequired2',itemAttrTypeIsMetaphoneKey: 'Sample-itemAttrTypeIsMetaphoneKey2',itemAttrTypeMetaphonekeypos: 'Sample-itemAttrTypeMetaphonekeypos2'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          {itemAttrTypeId: 'Sample-itemAttrTypeId3',itemAttrTypeCode: 'Sample-itemAttrTypeCode3',itemAttrTypeName: 'Sample-itemAttrTypeName3',itemAttrTypeDesc: 'Sample-itemAttrTypeDesc3',itemAttrTypeLength: 'Sample-itemAttrTypeLength3',itemAttrTypeIsSearchable: 'Sample-itemAttrTypeIsSearchable3',itemAttrTypeDisplayIndex: 'Sample-itemAttrTypeDisplayIndex3',itemAttrTypeIsRequired: 'Sample-itemAttrTypeIsRequired3',itemAttrTypeIsMetaphoneKey: 'Sample-itemAttrTypeIsMetaphoneKey3',itemAttrTypeMetaphonekeypos: 'Sample-itemAttrTypeMetaphonekeypos3'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          {itemAttrTypeId: 'Sample-itemAttrTypeId4',itemAttrTypeCode: 'Sample-itemAttrTypeCode4',itemAttrTypeName: 'Sample-itemAttrTypeName4',itemAttrTypeDesc: 'Sample-itemAttrTypeDesc4',itemAttrTypeLength: 'Sample-itemAttrTypeLength4',itemAttrTypeIsSearchable: 'Sample-itemAttrTypeIsSearchable4',itemAttrTypeDisplayIndex: 'Sample-itemAttrTypeDisplayIndex4',itemAttrTypeIsRequired: 'Sample-itemAttrTypeIsRequired4',itemAttrTypeIsMetaphoneKey: 'Sample-itemAttrTypeIsMetaphoneKey4',itemAttrTypeMetaphonekeypos: 'Sample-itemAttrTypeMetaphonekeypos4'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          {itemAttrTypeId: 'Sample-itemAttrTypeId5',itemAttrTypeCode: 'Sample-itemAttrTypeCode5',itemAttrTypeName: 'Sample-itemAttrTypeName5',itemAttrTypeDesc: 'Sample-itemAttrTypeDesc5',itemAttrTypeLength: 'Sample-itemAttrTypeLength5',itemAttrTypeIsSearchable: 'Sample-itemAttrTypeIsSearchable5',itemAttrTypeDisplayIndex: 'Sample-itemAttrTypeDisplayIndex5',itemAttrTypeIsRequired: 'Sample-itemAttrTypeIsRequired5',itemAttrTypeIsMetaphoneKey: 'Sample-itemAttrTypeIsMetaphoneKey5',itemAttrTypeMetaphonekeypos: 'Sample-itemAttrTypeMetaphonekeypos5'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          {itemAttrTypeId: 'Sample-itemAttrTypeId6',itemAttrTypeCode: 'Sample-itemAttrTypeCode6',itemAttrTypeName: 'Sample-itemAttrTypeName6',itemAttrTypeDesc: 'Sample-itemAttrTypeDesc6',itemAttrTypeLength: 'Sample-itemAttrTypeLength6',itemAttrTypeIsSearchable: 'Sample-itemAttrTypeIsSearchable6',itemAttrTypeDisplayIndex: 'Sample-itemAttrTypeDisplayIndex6',itemAttrTypeIsRequired: 'Sample-itemAttrTypeIsRequired6',itemAttrTypeIsMetaphoneKey: 'Sample-itemAttrTypeIsMetaphoneKey6',itemAttrTypeMetaphonekeypos: 'Sample-itemAttrTypeMetaphonekeypos6'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          {itemAttrTypeId: 'Sample-itemAttrTypeId7',itemAttrTypeCode: 'Sample-itemAttrTypeCode7',itemAttrTypeName: 'Sample-itemAttrTypeName7',itemAttrTypeDesc: 'Sample-itemAttrTypeDesc7',itemAttrTypeLength: 'Sample-itemAttrTypeLength7',itemAttrTypeIsSearchable: 'Sample-itemAttrTypeIsSearchable7',itemAttrTypeDisplayIndex: 'Sample-itemAttrTypeDisplayIndex7',itemAttrTypeIsRequired: 'Sample-itemAttrTypeIsRequired7',itemAttrTypeIsMetaphoneKey: 'Sample-itemAttrTypeIsMetaphoneKey7',itemAttrTypeMetaphonekeypos: 'Sample-itemAttrTypeMetaphonekeypos7'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          {itemAttrTypeId: 'Sample-itemAttrTypeId8',itemAttrTypeCode: 'Sample-itemAttrTypeCode8',itemAttrTypeName: 'Sample-itemAttrTypeName8',itemAttrTypeDesc: 'Sample-itemAttrTypeDesc8',itemAttrTypeLength: 'Sample-itemAttrTypeLength8',itemAttrTypeIsSearchable: 'Sample-itemAttrTypeIsSearchable8',itemAttrTypeDisplayIndex: 'Sample-itemAttrTypeDisplayIndex8',itemAttrTypeIsRequired: 'Sample-itemAttrTypeIsRequired8',itemAttrTypeIsMetaphoneKey: 'Sample-itemAttrTypeIsMetaphoneKey8',itemAttrTypeMetaphonekeypos: 'Sample-itemAttrTypeMetaphonekeypos8'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          {itemAttrTypeId: 'Sample-itemAttrTypeId9',itemAttrTypeCode: 'Sample-itemAttrTypeCode9',itemAttrTypeName: 'Sample-itemAttrTypeName9',itemAttrTypeDesc: 'Sample-itemAttrTypeDesc9',itemAttrTypeLength: 'Sample-itemAttrTypeLength9',itemAttrTypeIsSearchable: 'Sample-itemAttrTypeIsSearchable9',itemAttrTypeDisplayIndex: 'Sample-itemAttrTypeDisplayIndex9',itemAttrTypeIsRequired: 'Sample-itemAttrTypeIsRequired9',itemAttrTypeIsMetaphoneKey: 'Sample-itemAttrTypeIsMetaphoneKey9',itemAttrTypeMetaphonekeypos: 'Sample-itemAttrTypeMetaphonekeypos9'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          {itemAttrTypeId: 'Sample-itemAttrTypeId10',itemAttrTypeCode: 'Sample-itemAttrTypeCode10',itemAttrTypeName: 'Sample-itemAttrTypeName10',itemAttrTypeDesc: 'Sample-itemAttrTypeDesc10',itemAttrTypeLength: 'Sample-itemAttrTypeLength10',itemAttrTypeIsSearchable: 'Sample-itemAttrTypeIsSearchable10',itemAttrTypeDisplayIndex: 'Sample-itemAttrTypeDisplayIndex10',itemAttrTypeIsRequired: 'Sample-itemAttrTypeIsRequired10',itemAttrTypeIsMetaphoneKey: 'Sample-itemAttrTypeIsMetaphoneKey10',itemAttrTypeMetaphonekeypos: 'Sample-itemAttrTypeMetaphonekeypos10'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          {itemAttrTypeId: 'Sample-itemAttrTypeId11',itemAttrTypeCode: 'Sample-itemAttrTypeCode11',itemAttrTypeName: 'Sample-itemAttrTypeName11',itemAttrTypeDesc: 'Sample-itemAttrTypeDesc11',itemAttrTypeLength: 'Sample-itemAttrTypeLength11',itemAttrTypeIsSearchable: 'Sample-itemAttrTypeIsSearchable11',itemAttrTypeDisplayIndex: 'Sample-itemAttrTypeDisplayIndex11',itemAttrTypeIsRequired: 'Sample-itemAttrTypeIsRequired11',itemAttrTypeIsMetaphoneKey: 'Sample-itemAttrTypeIsMetaphoneKey11',itemAttrTypeMetaphonekeypos: 'Sample-itemAttrTypeMetaphonekeypos11'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          {itemAttrTypeId: 'Sample-itemAttrTypeId12',itemAttrTypeCode: 'Sample-itemAttrTypeCode12',itemAttrTypeName: 'Sample-itemAttrTypeName12',itemAttrTypeDesc: 'Sample-itemAttrTypeDesc12',itemAttrTypeLength: 'Sample-itemAttrTypeLength12',itemAttrTypeIsSearchable: 'Sample-itemAttrTypeIsSearchable12',itemAttrTypeDisplayIndex: 'Sample-itemAttrTypeDisplayIndex12',itemAttrTypeIsRequired: 'Sample-itemAttrTypeIsRequired12',itemAttrTypeIsMetaphoneKey: 'Sample-itemAttrTypeIsMetaphoneKey12',itemAttrTypeMetaphonekeypos: 'Sample-itemAttrTypeMetaphonekeypos12'}
                                ,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          {itemAttrTypeId: 'Sample-itemAttrTypeId13',itemAttrTypeCode: 'Sample-itemAttrTypeCode13',itemAttrTypeName: 'Sample-itemAttrTypeName13',itemAttrTypeDesc: 'Sample-itemAttrTypeDesc13',itemAttrTypeLength: 'Sample-itemAttrTypeLength13',itemAttrTypeIsSearchable: 'Sample-itemAttrTypeIsSearchable13',itemAttrTypeDisplayIndex: 'Sample-itemAttrTypeDisplayIndex13',itemAttrTypeIsRequired: 'Sample-itemAttrTypeIsRequired13',itemAttrTypeIsMetaphoneKey: 'Sample-itemAttrTypeIsMetaphoneKey13',itemAttrTypeMetaphonekeypos: 'Sample-itemAttrTypeMetaphonekeypos13'}
                ]

        const componentToTest = <ItemAttributeTypeList history={props.history} fetchItemAttributeType={mockFetchItemAttributeType}
            fetchAllItemAttributeTypes={mockFetchAllItemAttributeTypes} itemAttributeTypes={mockItemAttributeTypes} first={0} totalRecords={11} />

        const rootDiv = document.createElement('div') ;
        ReactDom.render(componentToTest, rootDiv);
        document.body.appendChild(rootDiv);
        
        it('renders correctly', () => {
            const tree = renderer.create(componentToTest).toJSON();
            expect(tree).toMatchSnapshot();
        })
        
        it('displays the correct number of rows', () => {
            const numberOfRowsRendered = document.querySelectorAll('div.p-datatable-wrapper > table > tbody > tr').length;
            expect(numberOfRowsRendered).toBe(10)
        })

        it('invokes row action', () =>{
            clickElement(document.querySelector("button[id='Sample-itemAttrTypeId0']"))
            expect(mockFetchItemAttributeType).toBeCalledTimes(1)
        })
        
        it('invokes next page', () => {
            const selector = "div.p-paginator.p-component.p-unselectable-text.p-paginator-bottom > span > button:nth-child(2)";
            clickElement(document.querySelector(selector));
            expect(mockFetchAllItemAttributeTypes).toBeCalledTimes(1);
        })
})