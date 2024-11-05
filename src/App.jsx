import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './components/Header'; // Assuming your Header component is in a separate file
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-12' style={{ paddingTop: '30px' }}>
        <img src='/images/front3.jpg' className='col-span-12 h-auto w-full' alt='front' />
      </div>
      <div className='grid grid-cols-6 mt-20 gap-20'>
        <div className='col-start-2 col-span-2'>
          <h1 className='text-black text-2xl font-serif text-center'>WELCOME TO HARMONY SUITES</h1>
          <h1 className='text-slate-400 text-xl text-center font-serif'>Book Your Dream Getaway</h1>
          <h1 className='text-slate-600 text-center'>Nestled in the vibrant heart of Secaucus, New Jersey, Harmony 
          Suites welcomes you to a world of refined indulgence. Immerse yourself in the pinnacle of comfort,
           just moments away from the iconic American Dream Mall, where shopping fantasies
            come to life. Feel the exhilaration of being near the legendary MetLife Stadium,
             home to unforgettable events. Our lavish accommodations and personalized service promise a
              stay beyond compare. Embrace the perfect blend of convenience and luxury, where every moment is a 
              cherished memory in the making. Your journey to opulence begins at Harmony Suites. Book your escape today!</h1>
              <button className='mt-10 justify-center btn bg-indigo-900 rounded-lg text-white w-40 px-4 h-12'>EXPLORE YOUR HOTEL</button>
        </div>
        <div className='col-span-2'>
          <img src='/images/hotel-images.jpg' alt='images' />
        </div>
      </div>
      <Footer />
     
      
    </div>
  );
}

export default App;
