import React, { useState } from "react";
import MarkAsReadBooks from "../../Component/MarkAsReadBookLIst/MarkAsReadBooks";
import WishListBooks from "../../Component/WishListBooks/WishListBooks";

const BooksPage = () => {
  const [ActiveBtn, setActiveBtn] = useState(true);
  const [sortingType, setSortingType] = useState('')
  // console.log(sortingType)
  return (
    <>
      <div className="text-center text-3xl font-semibold my-5 bg-[#131313]/5 p-5 rounded-2xl">
        <h1>Books</h1>
      </div>
      <div className="flex justify-center my-6">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By ⬇️ {sortingType.toUpperCase()}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={()=> setSortingType('pages')}>
              <a>Pages</a>
            </li>
            <li onClick={()=> setSortingType('rating')}>
              <a>Rating</a>
            </li>
            <li onClick={()=> setSortingType('publisher Year')}>
              <a>Publisher Year</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex border-b border-gray-300">
        <button
          className={`px-6 py-2 font-medium cursor-pointer ${
            ActiveBtn
              ? "border border-gray-300 border-b-white bg-white text-black rounded-xl rounded-b-none -mb-px"
              : "text-gray-400"
          }`}
          onClick={() => setActiveBtn(true)}
        >
          Read Books
        </button>

        <button
          className={`px-6 py-2 font-medium cursor-pointer ${
            !ActiveBtn
              ? "border border-gray-300 border-b-white bg-white text-black rounded-xl rounded-b-none -mb-px"
              : "text-gray-400"
          }`}
          onClick={() => setActiveBtn(false)}
        >
          Wishlist Books
        </button>
      </div>
      {ActiveBtn ? (
        <MarkAsReadBooks sortingType={sortingType}></MarkAsReadBooks>
      ) : (
        <WishListBooks sortingType={sortingType}></WishListBooks>
      )}
    </>
  );
};

export default BooksPage;
