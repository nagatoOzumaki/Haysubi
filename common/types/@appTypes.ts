/* eslint-disable no-undef */
export type ChildrenProps = {
  children: JSX.Element[] | JSX.Element;
};




export type CartItem = {
  id: number;
  name: string;
  price: number;
  rating: number;
  discription: string;
  quantity: number;
  img: string;
  date: Date;
};

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