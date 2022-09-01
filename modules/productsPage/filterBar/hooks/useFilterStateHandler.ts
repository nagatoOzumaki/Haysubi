import { useRouter } from "next/router";
import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { addFilter, dataIsLoading } from "../../../../common/store/actions";
import { useFilter } from "../../../../common/store/Store";
import { FilterElement } from "../../../../common/types/@appTypes";

const useFilterStateHandler = (filter: FilterElement) => {
    const dispatch = useDispatch<any>();
    const selectedValues = useRef([] as string[]);
    const router = useRouter();
    const currentFilter = useFilter();
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
        router.push(
          {
            pathname: `/products`,
            query: { ...currentFilter },
          },
          undefined,
          { shallow: true }
        );
        
      },
      [dispatch, filter]
    );
    return handleFilter;
  };

export default useFilterStateHandler