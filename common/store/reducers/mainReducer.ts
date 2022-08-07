import { Action, State } from "../../types/@appTypes";
import { storeDataInLocalStorage } from "../../utils/hooks/useLocalStorage";
import { appActions } from "../actions/mainAction";

const InitialState={
    darkMode:false,
    cart: {cartItems:[]},
    wishList:[],
    userInfo: null
}
 const mainReducer = (
    state:State =InitialState,
    action: Action
  ) => {
    switch (action.type) {
      case appActions.DARK_MODE_ON:
        return { ...state, darkMode: true };
      case appActions.DARK_MODE_OFF:
        return { ...state, darkMode: false };

    // ----------------------------------------------------
      case appActions.SET_ITEMS_TO_CART:{      
        const storedItems = action.payload;
        return { ...state, cart: { ...state.cart, cartItems: storedItems } };
      }
      case appActions.ADD_ITEM_TO_CART:
        {
        const ids = state.cart.cartItems.map((item) => item.id);
        let newState = state;
        const {id}=action.payload

        if (!ids.includes(id)) {
            newState = {
            ...state,
            cart: {
              ...state.cart,
              cartItems: [...state.cart.cartItems, action.payload ],
            },
          };
        }
        storeDataInLocalStorage('cartItems',newState.cart.cartItems);

        return newState;
        }
      case appActions.REMOVE_ITEM_FROM_CART:{
        const cartItems = state.cart.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        const removeItemState = {
          ...state,
          cart: { ...state.cart, cartItems },
        };
        
        return removeItemState;}


  //  ----------------------------------------


    case appActions.ADD_PRODUCT_TO_WISHLIST:
      {
      const ids = state.wishList.map((product) => product.id);
      let newState:State = state;
      const {id}=action.payload

      if (!ids.includes(id)) {
          newState = {
          ...state,
            wishList: [...state.wishList, action.payload ],
         
        };
      }
      storeDataInLocalStorage('wishList',newState.wishList);

      return newState;
      }
    case appActions.REMOVE_PRODUCT_FROM_WISHLIST:{
      const productWishList = state.wishList.filter(
        (product) => product.id !== action.payload.id
      );
      const removeItemState = {
        ...state,
        wishList:[ ...state.wishList, productWishList ],
      };
      
      return removeItemState;
    }

    case appActions.SET_PRODUCT_TO_WISHLIST:{      
        const storedItems = action.payload;
        return { ...state, wishList: storedItems  };
      }
















        // -------------------------------------------------------------------------
      case appActions.USER_LOGIN:
        {
        const newUserInfo = action.payload;
        const loginState: State = { ...state, userInfo: newUserInfo };
        return loginState;
      }
      case appActions.USER_LOGOUT:{
        const logoutState: State = {
          ...state,
          userInfo: null,
          cart: {
            cartItems: [],
            shippingAddress: '',
            paymentMethod: '',
          },
        };
        return logoutState;}
      default:
        return state;
    }
  };

  export default mainReducer;