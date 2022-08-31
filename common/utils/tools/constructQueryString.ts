import { URLSearchParams } from "url";
import { Filter } from "../../types/@appTypes";

function constructQueryString(filter:Filter) {
 
    // const params = Object.keys(filter).filter((param) => filter[param]);
    // const queryString = params.reduce((a, b) => `${a}&${b}=${encodeURIComponent(filter[b][i)}`, '');
    // return queryString.slice(2)
    const queryParams=new URLSearchParams(filter);
    const queryString=queryParams.toString();
    return queryString
  
}

export default constructQueryString
