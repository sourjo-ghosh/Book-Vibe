import React, {  useState } from "react";
import { BookContextProvider } from "../../Context/Context";
import MarkAsReadBooks from "../../Component/MarkAsReadBookLIst/MarkAsReadBooks";

const BooksPage = () => {
  const [ActiveBtn, setActiveBtn] = useState(true);
  return (
    <>
      <div className="text-center text-3xl font-semibold my-5 bg-[#131313]/5 p-5 rounded-2xl">
        <h1>Books</h1>
      </div>
      <div className="flex border-b border-gray-300">
        <button
          className={`px-6 py-2 font-medium ${
            ActiveBtn
              ? "border border-gray-300 border-b-white bg-white text-black rounded-xl rounded-b-none -mb-px"
              : "text-gray-400"
          }`}
          onClick={() => setActiveBtn(true)}
        >
          Read Books
        </button>

        <button
          className={`px-6 py-2 font-medium  ${
            !ActiveBtn
              ? "border border-gray-300 border-b-white bg-white text-black rounded-xl rounded-b-none -mb-px"
              : "text-gray-400"
          }`}
          onClick={() => setActiveBtn(false)}
        >
          Wishlist Books
        </button>
      </div>
      {
        ActiveBtn ? <MarkAsReadBooks></MarkAsReadBooks> : "jani na "
      }
    </>
  );
};

export default BooksPage;
