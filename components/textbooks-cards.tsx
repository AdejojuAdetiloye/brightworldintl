/* eslint-disable @next/next/no-img-element */
import React from 'react'

const TextBooksCards = () => {
  return (
    
      <div className='w-[200px] h-[400px] shadow-lg rounded-lg'>
        <img src="static/books-logo.png" alt="book thumbnail"  className='w-[180px] h-[200px] object-cover'/>
        <h2 className='font-bold font-serif text-center text-blue-900'>Book Title</h2>
        <p className=' break-words text-gray p-2 font-cursive font-nornal mb-2 mt-1'>This is the description of the book. is is done so that...</p>
        <h5 className='font-extrabold text-blue-950 float-right pr-2'>#10000</h5>
        <button className='bg-green-500  p-2 ml-1 text-white w-[150px]'>Buy Now</button>

      </div>
    
  )
}

export default TextBooksCards
