import { DarkMode } from "@mui/icons-material";
import { userInfo } from "os";
import { boolean } from "yup";

/* eslint-disable no-undef */
export type ChildrenProps = {
  children: JSX.Element[] | JSX.Element;
};




// export type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   rating: number;
//   discription: string;
//   quantity: number;
//   img: string;
//   date: Date;
// };

export type Product = {
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
export type Cart= {
  cartItems: Products;
  shippingAddress?: Object;
  paymentMethod?: string;
};
export type UserInfo= {
  json?: string;
  name: string;
  username: string;
  isAdmin: boolean;
} | null
export type State={ 
  darkMode:boolean;
  cart: Cart;
  userInfo: UserInfo;
};
export type Action={type:string,payload?:any}

export type ThemeContextType ={}