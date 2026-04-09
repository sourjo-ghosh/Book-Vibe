import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();
const Context = ({ children }) => {
  const [storeRead, setStoreRead] = useState([]);
  const [storeWishList, setStoreWishList] = useState([]);
  const HandleMarkAsReadBtn = (book) => {
    const IsBookExistInWishList = storeWishList.find(
      (item) => item.bookId === book.bookId,
    );
    if (IsBookExistInWishList) {
      toast.error(`${book.bookName} Is Already In Your Wish List`);
      return;
    }
    const IsBookExist = storeRead.find((item) => item.bookId === book.bookId);
    if (IsBookExist) {
      toast.error(`${book.bookName} Is Already Added To Your Read List`);
    } else {
      setStoreRead([...storeRead, book]);
      toast.success(`${book.bookName} Added To Your List`);
    }
    console.log(storeRead);
  };
  const HandleWishListBtn = (book) => {
    const isExit = storeRead.find((item) => item.bookId === book.bookId);
    if (isExit) {
      toast.error(`${book.bookName} Is already In a Read List`);
      return;
    }
    const IsBookExist = storeWishList.find(
      (item) => item.bookId === book.bookId,
    );
    if (IsBookExist) {
      toast.error(`${book.bookName} Is Already Added To Your wish List`);
      return;
    } else {
      setStoreWishList([...storeWishList, book]);
      toast.success(`${book.bookName} Added To Your Wish List`);
    }
  };
  const BookContextValue = {
    storeRead,
    HandleMarkAsReadBtn,
    setStoreRead,
    HandleWishListBtn,
    storeWishList,
  };
  return (
    <BookContext.Provider value={BookContextValue}>
      {children}
    </BookContext.Provider>
  );
};

export default Context;
