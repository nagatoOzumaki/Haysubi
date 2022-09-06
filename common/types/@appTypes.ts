/* eslint-disable import/no-extraneous-dependencies */
import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

/* eslint-disable no-undef */
export type ChildrenProps = {
  children: JSX.Element[] | JSX.Element;
};





export interface Product  {
   id: string;
   categories: string;
  title: string;
  rating: string;
  description: string;
  price: string;
  image: string[];
  review: string[];
  inStock:boolean
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
  products:Products;
  dataFetchingState:string,
  isChatbotOpen:boolean,
  currentProduct:Product,
  isDrawerOpen:boolean;
  darkMode:boolean;
  cart: Cart;
  wishList:CartItem[]
  userInfo: UserInfo;
  filter:Filter
};
// the following interface is used for allowing indexing by string for example in utils/constructQueryString
export interface MapInterface{
  [key:string]:string[]
}
export interface Filter extends MapInterface{
  ram:string[],
  cpu:string[],
  storage:string[],
  screen:string[],
  gpu:string[],
  brand:string[],
  model:string[],
}


export type FilterElement='cpu'|'ram'|'brand'|'model'|'gpu'|'storage'|'screen'
export type AppThunk = ActionCreator<ThunkAction<void, State, null, Action>>;
export interface Action{type:string,payload?:any}
export type ThemeContextType ={}