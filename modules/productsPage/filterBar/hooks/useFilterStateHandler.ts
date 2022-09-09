import { useRouter } from "next/router";
import React, {  useRef } from "react";
import { useDispatch } from "react-redux";
import { addFilter, dataIsLoading } from "../../../../common/store/actions";
import { useFilter } from "../../../../common/store/Store";
import { FilterElement } from "../../../../common/types/@appTypes";

const useFilterStateHandler = (filter: FilterElement) => {
    const dispatch = useDispatch<any>();
    const selectedValues = useRef([] as string[]);
    const router = useRouter();
    const currentFilter = useFilter();
    const handleFilter = 
      (event: React.FormEvent<HTMLInputElement>) => {
        dispatch(dataIsLoading())
        const { checked, value } :any= event.target;
        if (checked) {
          selectedValues.current = [...selectedValues.current, value];
          dispatch(addFilter({ [filter]: selectedValues.current }));
        } else {
          selectedValues.current = [
            ...selectedValues.current.filter(
              selectedValue => value !== selectedValue
            ),
          ];
          dispatch(addFilter({ [filter]: selectedValues.current }));
          
        }
        
        router.replace(
          {
            pathname: `/products`,
            query: { ...currentFilter ,[filter]: selectedValues.current },
          },
          undefined
         
        );
        
      }
    
    return handleFilter;
  };

export default useFilterStateHandler