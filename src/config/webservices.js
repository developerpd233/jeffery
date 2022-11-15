export const BASE_URL  =  `https://jaffery.webappcart.com/api/v1/`
export const IMAGE_URL  =  `https://jaffery.webappcart.com/storage/`
export const LOGIN =  `${BASE_URL}login`
export const GET_CONTEST = (type) =>  `${BASE_URL}contests-by-type/${type}`
export const COUNTRY =  `${BASE_URL}location/country`  
export const STATE = (id) =>  `${BASE_URL}location/state/${id}`  
export const CITY = (id) =>  `${BASE_URL}location/city/${id}`  
export const PROFESSION = `${BASE_URL}location/profession`  
export const SIGN_UP =  `${BASE_URL}signup`
export const HOME_CONTEST =  `${BASE_URL}home/contests`
export const CONTESTANTS =  `${BASE_URL}contestants`
export const WINNERS =  `${BASE_URL}winners`
export const FAVOURITIES =  `${BASE_URL}favourites`
export const POST_COMMENTS =  `${BASE_URL}comments`
export const GET_PROFILE =  `${BASE_URL}users/show-profile`
export const GET_COMMENTS = (id , pageno) => `${BASE_URL}comments?participant_id=${id}&page=${pageno}`

export const SINGLE_CONTEST = (id) =>  `${BASE_URL}single-contest/${id}`
export const ADD_FAVOURITIES = (id) =>  `${BASE_URL}add-favourite?participant_id=${id}`
export const REMOVE_FAVOURITIES = (id) =>  `${BASE_URL}remove-favourite?participant_id=${id}`
export const GET_PARTICIPANT_VOTES = (id) =>  `${BASE_URL}participants/${id}`
export const GET_CONTEST_BY_COUNTRY = ( countrySlug , type) =>  `${BASE_URL}list-participants?keyword=${countrySlug}&type=${type}`  

export const  GET_COUNTRY = () =>  `${BASE_URL}/location/country?search=''`
