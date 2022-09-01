import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { addFilter, dataIsLoading } from "../../../../common/store/actions";
import { FilterElement } from "../../../../common/types/@appTypes";

const useFilterStateHandler = (filter: FilterElement) => {
    const dispatch = useDispatch<any>();
    const selectedValues = useRef([] as string[]);
   
    const handleFilter = useCallback(
      (event: React.FormEvent<HTMLInputElement>) => {
        dispatch(dataIsLoading())
        const { checked, value } :any= event.target;
        if (checked) {
          selectedValues.current = [...selectedValues.current, value];
          dispatch(addFilter({ [filter]: selectedValues.current }));
          //  handleRequest()
        } else {
          selectedValues.current = [
            ...selectedValues.current.filter(
              selectedValue => value !== selectedValue
            ),
          ];
          dispatch(addFilter({ [filter]: selectedValues.current }));
          
        }
       
        
      },
      [dispatch, filter]
    );
    return handleFilter;
  };

export default useFilterStateHandler