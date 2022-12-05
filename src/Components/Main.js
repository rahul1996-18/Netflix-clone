import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from './Requests'

const Main = () => {
    const [ movies,setMovies]=useState([])
    const movie =movies[Math.floor(Math.random() * movies.length)]


    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })
    },[])
    // console.log(movie)
    const truncateString=(str, num)=> {
        if (str?.length > num) {
          return str.slice(0,num) + '...'
        }
        else{
            return str
        }
        
      }
      
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full '>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img  className=" w-full h-full object-cover"src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
        </div>
        <div className='absolute  w-full top-[30%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
        <div className='my-8'> 
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
            <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
        </div>
        <p className='text-sm text-gray-300'>Released: {movie?.release_date}</p>
        <p className='text-gray-400 my-4  text-2xl font-bold w-full md:mx-w-[70%] lg:mx-w[50%] xl:mx-w[30%] '> {truncateString(movie?.overview,160)}</p>
        </div>
      
    </div>
  )
}

export default Main
