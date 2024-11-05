import React, { useState } from 'react'

function Card() {
    const[drover,setdrover]=useState(false)
  return (
    <div>
        <div className='fixed grid grid-cols-12 w-full bg-indigo-950 h-20'>
            <div className='col-span-3 col-start-3 text-center text-white text-lg'>Home</div>
            <div className=' col-span-1 col-start-12'>
                <h1 className='text-white p-2 bg-black text-center text-lg' onClick={()=>setdrover(!drover)}>=</h1>
            </div>
        </div>
        {drover===true &&<>
        <div className='w-full grid grid-cols-12 h-40  bg-slate-700 justify-items-center'>

        </div>
        </>}
        <div className=' w-full bg-orange-500 h-96 '>

        </div>
      
    </div>
  )
}

export default Card
