import config from '../jest.config';
import App from '../App';
import React from 'react';
import {shallow} from 'enzyme';
describe('App test',()=>{
    it('total components',()=>{
        const wrapper=shallow(<App/>);
        const child=wrapper.find('div');
        expect(child.props().children.length).toEqual(3);
    })
})