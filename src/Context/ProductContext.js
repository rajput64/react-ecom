import axios from "axios";
import reducer from "../reducer/Productreducer";
import { createContext, useContext, useEffect, useReducer } from "react";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialState = {
    loading: false,
    isError:false,
    products: [],
    featuredProducts: [],
    isSingleLoading: false,
    singleproduct:{},
}

const AppProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer, initialState);

    const getProducts = async(url)=>{
        dispatch({type: "SET_LOADING"});
        try{
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({type: "SET_API_DATA", payload:products});
        }catch(error){
            dispatch({type: "API_ERROR"});
        }
    };

    //api call for single product
    const getSingleProduct = async(url)=>{
        dispatch({type:"SET_SINGLE_LOADING"})
        try{
            const res = await axios.get(url);
            const singleproduct = await res.data;
            dispatch({type:"SET_SINGLE_PRODUCT",payload:singleproduct})
        }catch(err){
            dispatch({type:"SET_SINGLE error"})
        }
    }

    useEffect(()=>{
        getProducts(API);
    },[]);

    return<AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
};


//custom hook
const useProductContext = () =>{
    return useContext(AppContext);
}


export {AppProvider, AppContext,useProductContext};