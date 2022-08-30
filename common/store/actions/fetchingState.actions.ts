

  export const dataFetchingActions={
    DATA_FETCHING_SUCCESS : 'DATA_FETCHING_SUCCESS', 
    DATA_FETCHING_FAILD: 'DATA_FETCHING_FAILD',
    DATA_IS_LOADING : 'DATA_IS_LOADING',
   
  }

  
   export const fetchingSuccessed =() =>({type:dataFetchingActions.DATA_FETCHING_SUCCESS })
  

 export const fetchingFailed =()=>({ type:dataFetchingActions.DATA_FETCHING_FAILD});


 export const dataIsLoading =() =>( 
    { type: dataFetchingActions.DATA_IS_LOADING }
  );

  export default {
    fetchingFailed,fetchingSuccessed,dataIsLoading,dataFetchingActions
  }