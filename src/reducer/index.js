import {SET_CITY,SET_MAX_PRICE,SET_MIN_PRICE,SET_CAR_NAME} from '../constants';

const data=(state=[],action)=>{
    switch(action.type)
    {
        case SET_CITY:
        const {city}=action;
        return {...state,city};

        case SET_MAX_PRICE:
        const {maxPrice}=action;
        return {...state,maxPrice};  

        case SET_MIN_PRICE:
        const{minPrice}=action;
        return {...state,minPrice};

        case SET_CAR_NAME:
        const {carName}=action;
        return {...state,carName};

        default:
        return state;
    }
    
}
export default data;