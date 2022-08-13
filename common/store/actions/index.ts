import {cartActions,setItemsToCart,addItemToCart,removeItemFromCart} from './cart.actions'
import  {filterActions, addFilter,removeFilter,clearFilter} from './filter.actions'
import  {userInfoActions,setLogin,setLogout} from './userInfo.actions'
import  {darkModeActions,setDarkMode,setLightMode} from './darkMode.actions'
import  {wishListActions,setProductsToWishList,addProductToWishList,removeProductromWishList} from './wishList.actions'
import  {productsActions, addProductsToStore,removeProductsFromStore,clearProductsToStore} from './products.actions'
import {drawerActions,openDrawer,closeDrawer } from './drawer.actions'

export const appActions= {...drawerActions, ...cartActions,...filterActions,...userInfoActions,...darkModeActions,...wishListActions,...productsActions} 

export {
    addItemToCart,removeItemFromCart,setItemsToCart,setLogin,setLogout,setDarkMode,setLightMode,
    setProductsToWishList,addProductToWishList,addProductsToStore,removeProductsFromStore,clearProductsToStore,removeProductromWishList,
    addFilter,removeFilter,clearFilter,closeDrawer,openDrawer
  

}