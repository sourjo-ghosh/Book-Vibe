import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Books = ({ book }) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 w-96 p-5 border border-[#131313]/15">
      <figure className="bg-[#F3F3F3]  rounded-2xl">
        <img src={book.image} alt="books" className="h-62.5 p-5 rounded-[28px] object-cover"/>
      </figure>
      <div className="my-5 flex gap-2">
        {book.tags.map((tags) => (
          <p
            className="text-[18px] font-medium text-[#23BE0A] bg-[#23BE0A]/5 text-center rounded-2xl p-2 "
            key={tags}
          >
            {tags}
          </p>
        ))}
      </div>
      <div className="">
        <p className="font-bold text-2xl text-[#131313]">{book.bookName}</p>
        <p className="font-medium text-[16px] text-[#131313]/70 mt-3">
          By <span>{book.author}</span>
        </p>
        <div className="border-t border-dashed border-gray-300 p-4 flex justify-between items-center font-medium text-[16px] text-[#131313]/80 mt-3">
          <p className="">
            {book.category}
          </p>
          <p className="flex justify-center items-center gap-2">{book.rating}<Star></Star> </p>
        </div>
      </div>
    </Link>
  );
};

export default Books;
