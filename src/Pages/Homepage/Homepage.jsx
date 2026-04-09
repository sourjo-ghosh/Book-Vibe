import React, { Suspense } from "react";
import Banner from "../../Component/HomePage/Banner/Banner";
import AllBooksPage from "../../Component/HomePage/AllBooksPage/AllBooksPage";
import Skeleton from "../../Component/Skeleton/Skeleton";
const BooksPromises = fetch("/booksData.json").then((res) => res.json());
const Homepage = () => {
  return (
    <>
      <Banner></Banner>
      <h1 className="my-10 text-3xl font-bold text-center">All Books</h1>
      <Suspense fallback={<Skeleton></Skeleton>}>
      <AllBooksPage BooksPromises={BooksPromises}></AllBooksPage>
      </Suspense>
    </>
  );
};

export default Homepage;
