import React from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from 'react';

const Movie = ({item}) => {
    const [like, setLike] = useState(false);
  return (
    
       <div className="w-[160px] md:w-[180px] lg:w-[220px] xl:w-[280px] cursor-pointer inline-block relative mx-4 md:mx-[4] ">
                <img
                  classname=" w-full h-auto block px-4"
                  src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                  alt={item.title}
                />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white  ">
                  <p className="flex  justify-center items-center text-center h-full white-space-normal text-xs md:text-sm font-bold">
                    {item?.title}
                  </p>
                  <p className="absolute top-4 left-4">
                    {like ? <FaHeart /> : <FaRegHeart />}
                  </p>
                  <p className="absolute top-3 left-3 text-white">
                    {item?.genre}
                  </p>
                </div>
              </div>
    
  )
}

export default Movie
