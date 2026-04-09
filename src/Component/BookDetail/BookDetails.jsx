import React, { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { BookContextProvider } from "../../Context/Context";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();
  const book = Array.isArray(books)
    ? books.find((item) => String(item.bookId) === id)
    : null;
  const {HandleMarkAsReadBtn } = useContext(BookContextProvider);

  if (!book) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6 py-12">
        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 text-center shadow-xl">
          <p className="text-lg font-semibold text-[#111827]">Book not found</p>
          <Link
            to="/"
            className="mt-4 inline-flex rounded-xl bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f2937]"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="md:px-14 md:py-5">
      <div className="overflow-hidden rounded-4xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
        <div className="md:flex">
          <div className="p-5 ">
            <img
              src={book.image}
              alt={book.bookName}
              className="rounded-[28px] w-106 h-141 object-cover shadow-2xl"
            />
          </div>

          <div className="md:w-7/12 p-3 md:p-12 rounded-2xl">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#16A34A]">
                    {book.category}
                  </p>
                  <h1 className="mt-2 text-4xl font-bold text-[#111827] sm:text-5xl">
                    {book.bookName}
                  </h1>
                  <p className="mt-2 text-lg text-[#4B5563]">
                    By{" "}
                    <span className="font-semibold text-[#111827]">
                      {book.author}
                    </span>
                  </p>
                </div>

                <div className="rounded-3xl border border-[#E5E7EB] bg-white px-5 py-3 text-center shadow-sm">
                  <p className="text-2xl font-semibold text-[#111827]">
                    {book.rating}
                  </p>
                  <p className="text-sm uppercase tracking-[0.18em] text-[#6B7280]">
                    Rating
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#D1FAE5] bg-[#ECFDF5] px-4 py-2 text-sm font-semibold text-[#166534]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-[#E5E7EB] bg-[#F8FAFC] p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#6B7280]">
                    Pages
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-[#111827]">
                    {book.totalPages}
                  </p>
                </div>
                <div className="rounded-[28px] border border-[#E5E7EB] bg-[#F8FAFC] p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#6B7280]">
                    Published
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-[#111827]">
                    {book.yearOfPublishing}
                  </p>
                </div>
                <div className="rounded-[28px] border border-[#E5E7EB] bg-[#F8FAFC] p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#6B7280]">
                    Publisher
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-[#111827]">
                    {book.publisher}
                  </p>
                </div>
                <div className="rounded-[28px] border border-[#E5E7EB] bg-[#F8FAFC] p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#6B7280]">
                    Category
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-[#111827]">
                    {book.category}
                  </p>
                </div>
              </div>

              <div className="rounded-4xl border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                <h2 className="text-2xl font-semibold text-[#111827]">
                  Review
                </h2>
                <p className="mt-4 text-base leading-8 text-[#4B5563]">
                  {book.review}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-[#111827] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#1f2937] sm:w-auto cursor-pointer"
                  onClick={() => 
                      HandleMarkAsReadBtn(book)
                  }
                >
                  Mark as Read
                </button>
                <button className="inline-flex w-full items-center justify-center rounded-2xl border border-[#D1D5DB] bg-white px-8 py-4 text-base font-semibold text-[#111827] transition hover:bg-[#F3F4F6] sm:w-auto cursor-pointer">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
