import React, { use } from "react";
import Books from "../../Books/Books";

const AllBooksPage = ({ BooksPromises }) => {
  const AllBooks = use(BooksPromises);
  return <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
            {
                AllBooks.map(book => <Books key={book.bookId} book={book}></Books>)
            }
        </div>
  </>;
};

export default AllBooksPage;
