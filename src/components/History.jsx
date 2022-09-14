import React from 'react'
import real1956 from '../assets/real1956.jpg';
import stadium1956 from '../assets/stadium1956.jpg'
import real19562 from '../assets/real19562.jpg'
import real19563 from '../assets/real19563.jpg'
import real19564 from '../assets/real19564.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>HISTORY </h1>
        <p className='py-4'>After receiving reports from his journalists over the highly successful South American Championship of Champions of 1948, Gabriel Hanot, editor of L'Équipe, began proposing the creation of a continent-wide tournament. In interviews, Jacques Ferran (one of the founders of the European Champions Cup, together with Gabriel Hanot), said that the South American Championship of Champions was the inspiration for the European Champions Cup. After Stan Cullis declared Wolverhampton Wanderers "Champions of the World" following a successful run of friendlies in the 1950s, in particular a 3–2 friendly victory against Budapest Honvéd, Hanot finally managed to convince UEFA to put into practice such a tournament. It was conceived in Paris in 1955 as the European Champion Clubs' Cup.</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={real1956} alt="/" />
            <img className='w-full h-full object-cover' src={stadium1956} alt="/" />
            <img className='w-full h-full object-cover' src={real19562} alt="/" />
            <img className='w-full h-full object-cover' src={real19563} alt="/" />
            <img className='w-full h-full object-cover' src={real19564} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations