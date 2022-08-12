import { Filter } from "../../types/@appTypes";

function constructQueryString(filter:Filter) {
      
    const params = Object.keys(filter).filter((param) => filter[param]);
    const queryString = params.reduce((a, b) => `${a}&${b}=${encodeURIComponent(filter[b])}`, '');
    return queryString.slice(2)
}

export default constructQueryString
