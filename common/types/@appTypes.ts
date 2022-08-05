
/* eslint-disable no-undef */
export type ChildrenProps = {
  children: JSX.Element[] | JSX.Element;
};





export interface Product  {
   id: string;
   categories: string;
  name: string;
  rating: string;
  description: string;
  price: string;
  image: string[];
  review: string[];
};


export type Products = Product[];
// State management types
export interface CartItem extends Product {
  quantity:number
};

export type Cart= {
  cartItems: CartItem[];
  shippingAddress?: Object;
  paymentMethod?: string;
};
export type UserInfo= {
  token?: string;
  name: string;
  username: string;
  isAdmin: boolean;
} | null
export interface State{ 
  darkMode:boolean;
  cart: Cart;
  userInfo: UserInfo;
};













export interface Action{type:string,payload?:any}

export type ThemeContextType ={}