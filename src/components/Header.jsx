import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='w-full bg-white'>
      <div className='grid grid-cols-12'>
        <img src='/images/logo.png' className='col-span-3 col-start-6' alt='logo' />
      </div>
      <div className='grid grid-cols-12 bg-white gap-10'>
        <div className='col-start-4 col-span-2'>
          <NavLink to="/" className={({isActive})=>(isActive ? "text-orange-500 text-xl underline border-b-4 py-2 border-orange-600":"text-slate-600 text-xl ") }>Home</NavLink>
        </div>
        <div className=' col-span-2'>
          <NavLink to="/menu" className={({isActive})=>(isActive ? "text-orange-500 text-xl underline border-b-4 py-2 border-orange-600":"text-slate-600 text-xl") }>Menu Card</NavLink>
        </div>
        <div className=' col-span-2'>
          <NavLink to="/myorder" className={({isActive})=>(isActive ? "text-orange-500 text-xl underline border-b-4 py-2 border-orange-600":"text-slate-600 text-xl ") }>My Orders</NavLink>
        </div>
        <div className='col-span-2 col-start-11'>
          <button className=' btn bg-orange-400 text-white rounded-lg w-28 h-10'>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
