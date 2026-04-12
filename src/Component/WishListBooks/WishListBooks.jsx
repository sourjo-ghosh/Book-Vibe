import React, { useContext,  useMemo } from "react";
import { BookContext } from "../../Context/Context";
import { NavLink } from "react-router";
import { MapPin, StickyNote, UserRound } from "lucide-react";
const WishListBooks = ({sortingType}) => {
  const { storeWishList } = useContext(BookContext);
  const filteredData = useMemo(()=>{
    if(sortingType === 'pages'){
      return [...storeWishList].sort((a,b)=> a.totalPages - b.totalPages)
    } else if(sortingType === 'rating'){
      return [...storeWishList].sort((a,b)=> b.rating - a.rating)
    } else if(sortingType === 'publisher Year'){
      return [...storeWishList].sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing)
    } else{
      return storeWishList
    }
  } , [sortingType, storeWishList])
  if (filteredData.length === 0) {
    return (
      <div className="my-10 bg-[#1E1E1E]/5 p-15 rounded-2xl flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">
          You Don't Have Added Any Book To Your List
        </h1>
        <p className="my-2 text-[#1E1E1E]/80">Your list is Empty</p>
        <NavLink
          to={"/"}
          className="my-5 bg-[#23BE0A] text-[#FFFFFF] p-4 rounded-2xl"
        >
          Go To Home
        </NavLink>
      </div>
    );
  }
  return (
    <>
      <>
        {filteredData.map((book) => {
          return (
            <div className="p-5 mt-10 border border-[#1E1E1E]/15 rounded-2xl md:flex lg:flex  gap-3">
              <div className="p-4 bg-[#131313]/5 rounded-2xl flex justify-center items-center">
                <img src={book.image} alt="" className="w-50 h-62 rounded-2xl" />
              </div>
              <div className="my-2">
                <h1 className="font-bold text-2xl">{book.bookName}</h1>
                <p className="text-[#1E1E1E]/80 my-3">
                  By{" "}
                  <span className="text-[#1E1E1E] text-[18px]">
                    {book.author}
                  </span>
                </p>
                <div className="my-2 md:flex lg:flex md:justify-center lg:justify-center md:items-center lg:items-center gap-2">
                  <h1 className="font-bold text-xl">Tags</h1>
                  {book.tags.map((tag) => (
                    <p className="text-[#23BE0A] bg-[#23BE0A]/5 my-2 px-2 py-1 rounded-2xl text-center">
                      {tag}
                    </p>
                  ))}
                  <p className="text-[#131313]/80 flex gap-1 my-2">
                    <MapPin></MapPin> Year of Publishing:{" "}
                    {book.yearOfPublishing}
                  </p>
                </div>
                <div className="space-y-2 md:flex md:gap-2 lg:flex lg:gap-2 my-3">
                  <p className="text-[#131313]/60 flex gap-1">
                    <UserRound></UserRound>
                    Publisher - {book.publisher}
                  </p>
                  <p className="text-[#131313]/60 flex gap-1">
                    <StickyNote></StickyNote>
                    Pages - {book.totalPages}
                  </p>
                </div>
                <div className="flex gap-2 border-t pt-6 border-[#131313]/15 my-4">
                  <p className="p-2 text-[#328EFF] bg-[#328EFF]/15 rounded-2xl">
                    Category : {book.category}
                  </p>
                  <p className="p-2 text-[#FFAC33] bg-[#FFAC33]/15 rounded-2xl">
                    rating : {book.rating}
                  </p>
                  <p className="p-2 text-white font-bold bg-[#23BE0A] rounded-2xl">
                    View Detail
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    </>
  );
};

export default WishListBooks;
