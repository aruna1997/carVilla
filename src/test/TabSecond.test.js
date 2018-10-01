import React from "react";
import { shallow } from "enzyme";
import config from "../jest.config";
import connectedTab,{TabSecond} from '../HomePage/TabSecond.jsx';
import configureStore from "redux-mock-store";
import { setCity } from "../actions";
describe('Tab second test cases',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<TabSecond/>);
    })
    const check=()=>({type:'check'})
    it('component render',()=>{
        expect(wrapper.length).toEqual(1);
    })
    it('change city input',()=>{
        const event={target:{value:"delhi"}}
        const a=wrapper.find('.input-section')
        a.simulate('change',event)
        expect(wrapper.state('city')).toEqual('delhi');
    })
    it('change min price',()=>{
        const event={target:{valueAsNumber:2}}
        const a=wrapper.find('#Min-price').simulate('change',event);
        expect(wrapper.state('minPrice')).toEqual(2)
    })
    it('change Max price',()=>{
        const event={target:{valueAsNumber:4}}
        const a=wrapper.find('#Max-price').simulate('change',event);
        expect(wrapper.state('maxPrice')).toEqual(4)
    })
   
})