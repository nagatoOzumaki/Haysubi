import { CartItem, UserInfo,Products } from '../../types/@appTypes';
import isSsr from '../isServerSideRendering';

const getDataFromLocalStorage=(key:string) =>{
  if(key==='userInfo')getUserInfoFromLocalStorage();
  if(!isSsr){
  if (localStorage.getItem(key))
  return JSON.parse(localStorage.getItem(key) || '');

    localStorage.setItem(key, JSON.stringify([]));
 }
  return [];
}

const storeDataInLocalStorage=(key:string,value:CartItem[]|Products|UserInfo)=> {

  if(!isSsr)localStorage.setItem(key, JSON.stringify(value));
}
// --------------------------

const getUserInfoFromLocalStorage=()=> {
  if(!isSsr){
    const storedUserInfo=localStorage.getItem('userInfo')
    if (storedUserInfo) {return   JSON.parse(storedUserInfo)};
    localStorage.setItem('userInfo', JSON.stringify(null));
   }
    return null;
}


export {
  getDataFromLocalStorage,
  storeDataInLocalStorage,
  

};






  // addItemToCart,
  // removeItemFromCart,
  // addItemQuantity,
  // reduceItemQuantity,
  // getOrders,
  // addOrderItem,
  // addOrderArr,
  // getWishlist,
  // addItemToWishlist,
  // removeItemFromWishlist,
  // itemPresentInWishlist,






























// function removeItemFromCart(id: number) {
//   const cart = JSON.parse(localStorage.getItem('cartItems') || '');
//   const tempCart = cart.filter((item: CartItem) => item.id !== id);
//   localStorage.setItem('cartItems', JSON.stringify(tempCart));
// }

// function reduceItemQuantity(id: number) {
//   const cart = JSON.parse(localStorage.getItem('cartItems') || '');
//   const tempCart = cart.map((item: CartItem) => {
//     let newItem;
//     if (item.id === id && item.quantity > 1) {
//       newItem = { ...item, quantity: item.quantity - 1 };
//     }

//     return newItem;
//   });
//   localStorage.setItem('cartItems', JSON.stringify(tempCart));
// }

// function addItemQuantity(id: number) {
//   const cart = JSON.parse(localStorage.getItem('cartItems') || '');
//   const tempCart = cart.map((item: CartItem) => {
//     let newItem;
//     if (item.id === id) {
//       newItem = { ...item, quantity: item.quantity + 1 };
//     }
//     return newItem;
//   });
//   localStorage.setItem('cartItems', JSON.stringify(tempCart));
// }

// function getOrders() {
//   if (localStorage.getItem('orderItems')) {
//     return JSON.parse(localStorage.getItem('orderItems') || '');
//   }
//   return null;
// }

// function addOrderItem({
//   id,
//   name,
//   price,
//   rating,
//   discription,
//   quantity,
//   img,
//   date,
// }: CartItem) {
//   const orders = JSON.parse(localStorage.getItem('orderItems') || '') || [];

//   let flag = true;

//   // eslint-disable-next-line array-callback-return
//   orders.map((item: CartItem) => {
//     if (item.id === id) flag = false;
//   });

//   if (flag) {
//     orders.push({ id, name, price, rating, discription, quantity, img, date });
//     localStorage.setItem('orderItems', JSON.stringify(orders));
//   }
// }

// function addOrderArr(arr: any) {
//   const orders = JSON.parse(localStorage.getItem('orderItems') || '') || [];
//   orders.push(...arr);
//   localStorage.setItem('orderItems', JSON.stringify(orders));
// }

// function getWishlist() {
//   if (localStorage.getItem('wishlist'))
//     return JSON.parse(localStorage.getItem('wishlist') || '');

//   localStorage.setItem('wishlist', JSON.stringify([]));
//   return [];
// }

// function addItemToWishlist({ id, name, price, img, rating }: CartItem) {
//   const list = getWishlist();

//   let flag = true;

//   //   console.log({ id, name, price, img, rating });

//   // eslint-disable-next-line array-callback-return
//   list.map((item: CartItem) => {
//     if (item?.id === id) {
//       flag = false;
//     }
//   });

//   if (flag) return;
//   list.push({ id, name, price, img, rating });

//   localStorage.setItem('wishlist', JSON.stringify(list));
// }

// function removeItemFromWishlist(id: number) {
//   const list = getWishlist();
//   const tempList = list.filter((item: CartItem) => item?.id !== id);
//   localStorage.setItem('wishlist', JSON.stringify(tempList));
// }

// function itemPresentInWishlist(id: number) {
//   const list = getWishlist();
//   let flag = false;

//   // eslint-disable-next-line array-callback-return
//   list.map((item: CartItem) => {
//     if (item?.id === id) flag = true;
//   });

//   return flag;
// }