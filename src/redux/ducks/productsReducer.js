import axios from "axios"


const GET_PRODUCTS = "GET_PRODUCTS"
const GET_TOPS = "GET_TOPS"
const GET_BOTTOMS = "GET_BOTTOMS"
const GET_ACESSORYS = "GET_ACESSORYS";


export function getProducts(){
    return{
        type:GET_PRODUCTS,
        payload:axios.get("/api/products")
    }
}
export function getTops(){
    return{
        type:GET_TOPS,
        payload:axios.get("/api/tops")
    }
}
export function getBottoms(){
    return{
        type:GET_BOTTOMS,
        payload:axios.get("/api/bottoms")
    }
}
export function getAcessorys(){
    return{
        type:GET_ACESSORYS,
        payload:axios.get("/api/acessorys")
    }
}

const intialState ={
    products:[],
    tops:[],
    bottoms:[],
    acessorys:[]
}
export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCTS_PENDING":
        return { ...state, isLoading: true };
      case "GET_PRODUCTS_FULFILLED":
        return { ...state, isLoading: false, items: action.payload.data };
      case "GET_PRODUCTS_REJECTED":
        return { ...state, isLoading: true, error: action.payload };




        case "GET_TOPS_PENDING":
        return { ...state, isLoading: true };
      case "GET_TOPS_FULFILLED":
        return { ...state, isLoading: false, items: action.payload.data };
      case "GET_TOPS_REJECTED":
        return { ...state, isLoading: true, error: action.payload };


        case "GET_BOTTOMS_PENDING":
        return { ...state, isLoading: true };
      case "GET_BOTTOMS_FULFILLED":
        return { ...state, isLoading: false, items: action.payload.data };
  
      case "GET_BOTTOMS_REJECTED":
        return { ...state, isLoading: true, error: action.payload };
  

        case "GET_ACESSORY_PENDING":
        return { ...state, isLoading: true };
      case "GET_ACESSORY_FULFILLED":
        return { ...state, isLoading: false, items: action.payload.data };
  
      case "GET_ACESSORY_REJECTED":
        return { ...state, isLoading: true, error: action.payload };
  

        default:
        return state;
    }}