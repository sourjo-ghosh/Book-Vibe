import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContextProvider = createContext();
const Context = ({ children }) => {
const [storeRead, setStoreRead] = useState([]);
const HandleMarkAsReadBtn = (book) => {
    const IsBookExist = storeRead.find((item) => item.bookId === book.bookId);
    if (IsBookExist) {
        toast.error(`${book.bookName} Is Already Added To Your List`);
    } else {
        setStoreRead([...storeRead, book]);
        toast.success(`${book.bookName} Added To Your List`)
    }
    console.log(storeRead);
};
  const BookContext = {
    storeRead,
    HandleMarkAsReadBtn,
    setStoreRead
  };
  return (
    <BookContextProvider.Provider value={BookContext}>
      {children}
    </BookContextProvider.Provider>
  );
};

export default Context;
