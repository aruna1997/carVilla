import React from "react";
import {shallow} from "enzyme";
import config from "../jest.config";
import TabSecond from "../HomePage/TabSecond";
import configureStore from "redux-mock-store";
import { setCity,setCarName, setMaxPrice,setMinPrice } from "../actions";
describe('Tab second actions',()=>{
   let mockStore,store;
    beforeEach(()=>{
         mockStore=configureStore();
         store=mockStore();
    })
    it('checks setCity Action',()=>{
        const connected=shallow(<TabSecond store={store}/>)
        store.dispatch(setCity('delhi'));
        const expectedpayload={
            'type':'SET_CITY',
            city:'delhi'
        }
        const actions=store.getActions();
        expect(actions).toEqual([expectedpayload]);
    })
    it('check setCarName action',()=>{
        const mockStore=configureStore();
        const store=mockStore();
        store.dispatch(setCarName('Alto'));
        const expectedpayload={
            'type':'SET_CAR_NAME',
            carName:'Alto'
        }
        const actions=store.getActions();
        expect(actions).toEqual([expectedpayload]);
    })
    it('check setMax',()=>{
        const mockStore=configureStore();
        const store=mockStore();
        store.dispatch(setMaxPrice(10));
        const expectedpayload={
            'type':'SET_MAX_PRICE',
             maxPrice:10
        }
        const actions=store.getActions();
        expect(actions).toEqual([expectedpayload]);
    })
    it('check setMin',()=>{
        const mockStore=configureStore();
        const store=mockStore();
        store.dispatch(setMinPrice(1));
        const expectedpayload={
            'type':'SET_MIN_PRICE',
             minPrice:1
        }
        const actions=store.getActions();
        expect(actions).toEqual([expectedpayload]);
    })
})