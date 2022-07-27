/* eslint-disable no-undef */
export type ChildrenProps = {
  children: JSX.Element[] | JSX.Element;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
export type Products = Product[];
