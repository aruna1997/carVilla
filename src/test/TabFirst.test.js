import React from 'react';
import config from '../jest.config';
import {shallow,mount} from 'enzyme';
import ConnectedTab,{TabFirst} from '../Header/TabFirst.jsx';
import configureStore from "redux-mock-store";
describe('TabFirst test file',()=>{
    let wrapper
    beforeEach(()=>{
       wrapper=shallow(<TabFirst/>);
    })
    it('check onchange',()=>{
        const a=wrapper.find('.input-section');
        const event={target:{value:"hi"}};
        a.simulate('change',event);
        expect(wrapper.state().carName).toEqual('hi');
    });
    /* it('success button',()=>{
        const mockStore=configureStore();
        const initialState={carName:"hi"}
        const store=mockStore(initialState);
        const connectedwrap=mount(<ConnectedTab store={store}/>);
        const a=connectedwrap.find('#find-car-button').at(1);
        const b=wrapper.find('.input-section');
        const event={target:{value:"two"}};
        b.simulate('change',event);
        console.log('prop check 2',connectedwrap.state());
        //a.simulate('click');        
    }) */
})