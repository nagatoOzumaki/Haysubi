
import { Action, State,Products } from "../../types/@appTypes";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SET_ITEMS, DARK_MODE_OFF, DARK_MODE_ON, USER_LOGIN, USER_LOGOUT } from "../actions/mainAction";

const InitialState={
    darkMode:false,
    cart: {cartItems:[] },
    userInfo: null
}
 const mainReducer = (
    state:State =InitialState,
    action: Action
  ) => {
    switch (action.type) {
      case DARK_MODE_ON:
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme', JSON.stringify(true));
        }
        return { ...state, darkMode: true };
      case DARK_MODE_OFF:
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme', JSON.stringify(false));
        }
        return { ...state, darkMode: false };
      case CART_SET_ITEMS:{        const storedItems = action.payload;
        return { ...state, cart: { ...state.cart, cartItems: storedItems } };
      }
      case CART_ADD_ITEM:
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
        if (typeof window !== 'undefined') {
          localStorage.setItem(
            'cartItems',
            JSON.stringify(newState.cart.cartItems)
          );
        }
        return newState;}
      case CART_REMOVE_ITEM:{
        const cartItems = state.cart.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        const removeItemState = {
          ...state,
          cart: { ...state.cart, cartItems },
        };
        if (typeof window !== 'undefined') {
          localStorage.setItem(
            'cartItems',
            JSON.stringify(removeItemState.cart.cartItems)
          );
        }
        return removeItemState;}
     
      case USER_LOGIN:
        {
        const newUserInfo = action.payload;
        const loginState: State = { ...state, userInfo: newUserInfo };
        if (typeof window !== 'undefined') {
          localStorage.setItem('userInfo', JSON.stringify(loginState.userInfo));
        }
        return loginState;}
      case USER_LOGOUT:{
        const logoutState: State = {
          ...state,
          userInfo: null,
          cart: {
            cartItems: [],
            shippingAddress: '',
            paymentMethod: '',
          },
        };
        if (typeof window !== 'undefined') {
          localStorage.setItem('userInfo', JSON.stringify(''));
        }
        return logoutState;}
      default:
        return state;
    }
  };

  export default mainReducer;