import {SET_CITY,SET_MAX_PRICE,SET_MIN_PRICE,SET_CAR_NAME,SET_CAR_RECORD} from '../constants';
export const setCity=(city)=>{
    return {type:SET_CITY,city}
}
export const setMaxPrice=(maxPrice)=>{
    return {type:SET_MAX_PRICE,maxPrice}
}
export const setMinPrice=(minPrice)=>{
    return {type:SET_MIN_PRICE,minPrice}
}
export const setCarName=(carName)=>{
    return {type:SET_CAR_NAME,carName}
}
export const setCarRecord=(data)=>{
    return {type:SET_CAR_RECORD,data}
}