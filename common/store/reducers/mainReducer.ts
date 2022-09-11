import { Action, Filter, Product, State } from '../../types/@appTypes';
import { storeDataInLocalStorage } from '../../utils/hooks/useLocalStorage';
import { appActions } from '../actions';

const InitialState = {
  products: [],
  dataFetchingState:'loading',
  currentProduct:{} as Product,
  isChatbotOpen:false,
  isDrawerOpen:false,
  darkMode: false,
  cart: { cartItems: [] },
  wishList: [],
  userInfo: null,
  filter: {} as Filter,
};

const mainReducer = (state: State = InitialState, action: Action) => {
  switch (action.type) {
    // -------------------------------------
    case appActions.ADD_PRODUCTS: {
      return { ...state, products: action.payload };
    }

    case appActions.REMOVE_PRODUCT: {
      const newProducts = state.products.filter(
        product => product.id === action.payload
      );
      return { ...state, products: newProducts };
    }
    case appActions.CLEAR_PRODUCTS: {
      return { ...state, products: [] };
    }
    // ------------------------------------------------
    case appActions.DATA_FETCHING_SUCCESS: {
      return { ...state, dataFetchingState: 'success' };
    }

    case appActions.DATA_FETCHING_FAILD: {
      return { ...state, dataFetchingState: 'fail' };
    }
    case appActions.DATA_IS_LOADING: {
      return { ...state, dataFetchingState: 'loading' };
    }

    //----------------------------------------------------
    case appActions.DARK_MODE_ON:
      return { ...state, darkMode: true };
    case appActions.DARK_MODE_OFF:
      return { ...state, darkMode: false };

    // ----------------------------------------------------
    // case appActions.SET_ITEMS_TO_CART: {
    //   const storedItems = action.payload;
    //   return { ...state, cart: { ...state.cart, cartItems: storedItems } };
    // }
    case appActions.ADD_ITEM_TO_CART: {
      const { id,quantity } = action.payload;  
      const productIfExist = state.cart.cartItems.filter(item => item.id===id)[0];
      // const items=state.cart.cartItems.filter(item => item.id!==id);
      const index=state.cart.cartItems.findIndex(item => item.id===id);
      // const items=[...state.cart.cartItems.slice(0,index),productIfExist,...state.cart.cartItems.slice(index+1)];
      let newState = state;
      if (index!==-1) {
        const newProduct={...productIfExist,quantity:(productIfExist.quantity as unknown as number)+quantity }
        const newItems=[...state.cart.cartItems.slice(0,index),newProduct,...state.cart.cartItems.slice(index+1)]
        
        newState = {
          ...state,
          cart: {
            ...state.cart,
            cartItems: newItems,
          },
        };
      }
    
      else{
        newState = {
          ...state,
          cart: {
            ...state.cart,
            cartItems: [...state.cart.cartItems,action.payload],
          },
        };
      }
      storeDataInLocalStorage('cartItems', newState.cart.cartItems);

      return newState;
    }
    case "appActions.ADD_ITEM_TO_CART": {
      const { id,quantity } = action.payload;  
      const productIfExist = state.cart.cartItems.filter(item => item.id===id)[0];
      const items=state.cart.cartItems.filter(item => item.id!==id);
      let newState = state;
      if (productIfExist) {
        const newProduct={...productIfExist,quantity:(productIfExist.quantity as unknown as number)+quantity }
        const newItems=[...items,newProduct]
        
        newState = {
          ...state,
          cart: {
            ...state.cart,
            cartItems: newItems,
          },
        };
      }
      
      else{
        newState = {
          ...state,
          cart: {
            ...state.cart,
            cartItems: [...items,action.payload],
          },
        };
      }
      storeDataInLocalStorage('cartItems', newState.cart.cartItems);

      return newState;
    }
    case appActions.REMOVE_ITEM_FROM_CART: {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      const removeItemState = {
        ...state,
        cart: { ...state.cart, cartItems },
      };
      storeDataInLocalStorage('cartItems', removeItemState.cart.cartItems);
      return removeItemState;
    }

    //  ----------------------------------------

    case appActions.ADD_PRODUCT_TO_WISHLIST: {
      // const ids = state.wishList.map(product => product.id);
      // let newState: State = state;
      // const { id } = action.payload;

      // if (!ids.includes(id)) {
      //   newState = {
      //     ...state,
      //     wishList: [...state.wishList, action.payload],
      //   };
      // }
      
      const { id,quantity } = action.payload;  
      const productIfExist = state.wishList.filter((item) => item.id===id)[0];
      const items=state.wishList.filter((item) => item.id!==id);
      let newState = state;
      if (productIfExist) {
        const newProduct={...productIfExist,quantity:(productIfExist.quantity as unknown as number)+quantity }
        const newItems=[...items,newProduct]
        
        newState = {
          ...state,
            wishList: newItems,
          }
        
      }
      else{
        newState = {
          ...state,
            wishList: [...items,action.payload],
          
        };
      }
      storeDataInLocalStorage('wishList', newState.wishList);

      return newState;
    }
    case appActions.REMOVE_PRODUCT_FROM_WISHLIST: {
      const productWishList = state.wishList.filter(
        product => product.id !== action.payload.id
      );
      const removeItemState = {
        ...state,
        wishList: [...productWishList],
      };
      storeDataInLocalStorage('wishList', removeItemState.wishList);
      return removeItemState;
    }

    case appActions.SET_PRODUCT_TO_WISHLIST: {
      const storedItems = action.payload;

      return { ...state, wishList: storedItems };
    }

    // -------------------------------------------------------------------------
    case appActions.USER_LOGIN: {
      const newUserInfo = action.payload;
      const loginState: State = { ...state, userInfo: newUserInfo };
      return loginState;
    }
    case appActions.USER_LOGOUT: {
      const logoutState: State = {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: '',
          paymentMethod: '',
        },
      };
      return logoutState;
    }

    // ----------------------------------------
    case appActions.ADD_FILTER: {
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      };
    }
    case appActions.REMOVE_FILTER: {
      return { ...state, filter: { ...state.filter, [action.payload]: '' } };
    }
    case appActions.CLEAR_FILTER: {
      return { ...state, filter: {} as Filter };
    }
    // --------------------------
    case appActions.OPEN_DRAWER:
      {
        return {...state,isDrawerOpen:true}
      }
      case appActions.CLOSE_DRAWER:
      {
        return {...state,isDrawerOpen:false}
      }


    // ------------------------------
    case appActions.ADD_REVIEW:
      {
        const {product}=action.payload;
        const {newReview}=action.payload
        
        const newProducts=state.products.filter(_product=>_product.id!==product.id)
        const newReviews=[...product.review,newReview]
        const updatedProduct:Product={...product,review:newReviews}
        return {...state,products:[...newProducts,updatedProduct]}
      }
      case appActions.ADD_RATING:
      {
        const {product,newRating}=action.payload;
        const newProducts=state.products.filter(_product=>_product.id!==product.id)
        const updatedProduct={...product,rating:newRating}
        return {...state,products:[...newProducts,updatedProduct]}
      }


    // ------------------------------
    case appActions.SET_CURRENT_PRODUCT:
      {
        return {...state,currentProduct:action.payload}
      }
      case appActions.CLEAR_CURRENT_PRODUCT:
      {
        return {...state,currentProduct:{} as Product}
      }
// -------------------------------------------------
case appActions.OPEN_CHATBOT:
  {
    return {...state,isChatbotOpen:true}
  }
  case appActions.CLOSE_CHATBOT:
  {
    return {...state,isChatbotOpen:false}
  }

    default:
      return state;
  }
};

export default mainReducer;
