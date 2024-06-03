const ProductReducer = (state ,action) => {

    switch (action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true,
            };

        case "SET_API_DATA":
            const featureData= action.payload.filter((curEle)=>{
                return curEle.featured === true;
            });
            return{
                ...state,
                isLoading:false,
                products: action.payload,
                featuredProducts: featureData,
            }

        case "SET_SINGLE_LOADING":
            return{
                ...state,
                isSingleLoading: true
            }

        case "SET_SINGLE_PRODUCT":
            return{
                ...state,
                isSingleLoading:false,
                singleproduct: action.payload
            }

        case "SET_SINGLE_ERROR":
            return{
                ...state,
                isSingleLoading:false,
                isError:true,
            }

        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError: true,
            };

        default:
            return state;
    }
    
};

export default ProductReducer