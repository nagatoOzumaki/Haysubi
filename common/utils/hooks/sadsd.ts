// import { useState, useEffect } from 'react';
// import isSsr from '../isServerSideRendering';

// export const getStorage = (key: string) =>
//   JSON.parse(localStorage.getItem(key) as string);

// export const setStorage = ( key: string, newValue: Object) =>
//   localStorage.setItem(key, JSON.stringify(newValue));

// const UseStorage = (key: any, initialValue: Object) => {
//   if (isSsr) return [initialValue];

//   const storage = window.localStorage;

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [value, setValue] = useState(getStorage(key) || initialValue);

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   useEffect(() => {
//     setStorage( key, value);
//   }, [value]);

//   return [value, setValue];
// };

export default {};
// https://dev.to/danielbellmas/custom-usestorage-hook-in-nextjs-382b for more details

