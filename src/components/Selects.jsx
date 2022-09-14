import React from 'react'
import cr7ro from '../assets/cr7ro.jpg'
import messi from '../assets/messi.jpg'
import raul from '../assets/raul.jpg'
import lewan from '../assets/lewan.jpg'
import benzema from '../assets/benzema.jpeg'
import vanis from '../assets/vanis.jpg';
import SelectsCard from './SelectsCard';
import { Fragment } from 'react';

const Selects = () => {
  return (
  <Fragment>
    <h1 className='text-center pt-6'>BEST PLAYER</h1>
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    <SelectsCard bg={cr7ro} text='Cristiano Ronaldo' />
    <SelectsCard bg={messi} text='Lionel Messi' />
    <SelectsCard bg={raul} text='Raul Gonzalez' />
    <SelectsCard bg={lewan} text='Robert Lewandowski' />
    <SelectsCard bg={benzema} text='Karim Benzema' />
    <SelectsCard bg={vanis} text='Ruud Van Nistelrooy' />
    </div>
  </Fragment>
   
  )
}

export default Selects