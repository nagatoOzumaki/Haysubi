import {cartActions,setItemsToCart,addItemToCart,removeItemFromCart} from './cart.actions'
import  {filterActions, addFilter,removeFilter,clearFilter} from './filter.actions'
import  {userInfoActions,setLogin,setLogout} from './userInfo.actions'
import  {darkModeActions,setDarkMode,setLightMode} from './darkMode.actions'
import  {wishListActions,setProductsToWishList,addProductToWishList,removeProductromWishList} from './wishList.actions'
import  {productsActions, addProductsToStore,removeProductsFromStore,clearProductsToStore,addReview,addRating} from './products.actions'
import {drawerActions,openDrawer,closeDrawer } from './drawer.actions'
import { currentProductActions,setCurrentProduct,clearCurrentProduct } from './currentProduct.actions'

export const appActions= {...currentProductActions,...drawerActions, ...cartActions,...filterActions,...userInfoActions,...darkModeActions,...wishListActions,...productsActions} 

export {
    addItemToCart,removeItemFromCart,setItemsToCart,setLogin,setLogout,setDarkMode,setLightMode,
    setProductsToWishList,addProductToWishList,addProductsToStore,removeProductsFromStore,clearProductsToStore,removeProductromWishList,
    addFilter,removeFilter,clearFilter,closeDrawer,openDrawer,addReview,addRating,setCurrentProduct,clearCurrentProduct
  

}