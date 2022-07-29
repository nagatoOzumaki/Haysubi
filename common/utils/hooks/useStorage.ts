// import { useState, useEffect } from 'react';
// import isSsr from '../isServerSideRendering';

// export const getStorage = (storage: Storage, key: string) =>
//   JSON.parse(storage.getItem(key) as string);

// export const setStorage = (storage: Storage, key: string, newValue: Object) =>
//   storage.setItem(key, JSON.stringify(newValue));

// const UseStorage = (storageType: string, key: any, initialValue: Object) => {
//   if (isSsr) return [initialValue];

//   const storageName = `${storageType}Storage`;
//   const storage: Storage = window[storageName];

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [value, setValue] = useState(getStorage(storage, key) || initialValue);

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   useEffect(() => {
//     setStorage(storage, key, value);
//   }, [value]);

//   return [value, setValue];
// };

// export default UseStorage;
// // https://dev.to/danielbellmas/custom-usestorage-hook-in-nextjs-382b for more details
export default {};
