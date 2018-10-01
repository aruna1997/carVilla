import config from "../jest.config";
import React from "react";
import {TopBanner} from "../Header/TopBanner.jsx";
import {shallow} from "enzyme";
describe('Header Banner Test Cases',()=>{
    it('check initial tab state',()=>{
        const wrapper = shallow(<TopBanner/>)
        expect( wrapper.state().key ).toEqual( 1 );
    });
    it( 'onclick tab', () => {
        const wrapper = shallow(<TopBanner/>);
        const a = wrapper.find('Uncontrolled(Tabs)');
        a.simulate('select',2);
        expect(wrapper.state().key).toEqual(2);
    });
})