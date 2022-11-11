export const BASE_URL  =  `https://jaffery.webappcart.com/api/v1/`
export const IMAGE_URL  =  `https://jaffery.webappcart.com/api/V1/`
export const LOGIN =  `${BASE_URL}login`
export const GET_CONTEST = (type) =>  `${BASE_URL}contests-by-type/${type}`
export const COUNTRY =  `${BASE_URL}location/country`  
export const STATE = (id) =>  `${BASE_URL}location/state/${id}`  
export const CITY = (id) =>  `${BASE_URL}location/city/${id}`  
export const PROFESSION = `${BASE_URL}location/profession`  
export const SIGN_UP =  `${BASE_URL}signup`
export const HOME_CONTEST =  `${BASE_URL}home/contests`

export const  GET_COUNTRY = () =>  `${BASE_URL}/location/country?search=''`
