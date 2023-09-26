import React from 'react'

const MovieList = ({movies}) => {
  return (
    <>
    <div className='relative overflow-x-auto'>

     <table className="table w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {/* <thread className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '> */}
            <tr className=' bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='col' className='px-6 py-3  '>Title</th>
                <th scope='col' className='px-6 py-3 sm:hidden'>Tagline</th>
                <th scope='col' className='px-6 py-3 sm:hidden'>Vote Average</th>
                <th scope='col' className='px-6 py-3 sm:hidden'>Explore</th>
            </tr>
        {/* </thread> */}
        <tbody>
          
            { movies.map(movie=>(

                <tr className='grid justify-between content-between bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                    <td className=' grid-cols-1 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{movie.original_title}</td>
                    <td className=' grid-cols-2 px-6 py-4 sm:hidden'>{movie.tagline}</td>
                    <td className=' grid-cols-3 px-6 py-4 sm:hidden'>{movie.vote_average}</td>
                    <td className='grid-cols-4 px-6 py-4  sm:hidden'>click Here</td>
                </tr>
                ))
            }
            
        </tbody>
     </table>
            </div>
    
    </>
  )
}

export default MovieList