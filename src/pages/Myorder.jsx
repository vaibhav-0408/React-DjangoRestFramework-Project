// import React, { useContext, useEffect, useState } from 'react';
// import Header from '../components/Header';
// import UserContext from '../context/UserContext';

// function Myorder({ fooddata }) {
//     const { food } = useContext(UserContext);
//     const [pass, setpass] = useState(true);
//     const [data, setdata] = useState([]); // Initialize with fooddata or empty array


//     useEffect(() => {
//         setdata(food);
//     }, [food]);

//     console.log("Data from context (food):", data);

//     // Ensure totalprice is calculated safely
//     const totalprice = Array.isArray(data) ? data.reduce((total, item) => total + item.price, 0) : 0; 

//     const cancel = (index) => {
//         const newdata = [...data];
//         newdata.splice(index, 1); // Remove the item at the specified index
//         setdata(newdata); // Update the state
//     };

//     function foodArray(array, size) {
//         const result = [];
//         for (let i = 0; i < array.length; i += size) {
//             result.push(array.slice(i, i + size));
//         }
//         return result;
//     }

//     return (
//         <div>
//             <Header />
//             <h1 className='text-xl text-center text-black mt-5'>
//                 Total items in your cart: {data.length}
//             </h1>

//             {data && foodArray(data, 3).map((row, rowIndex) => (
//                 <div key={rowIndex} className='col-span-12 flex flex-wrap ml-32'>
//                     {row.map((item, index) => (
//                         <div key={index} className='flex-auto max-w-sm p-4'>
//                             <div className='border border-gray-300 rounded-md p-4'>
//                                 <h1>Item name: {item.name}</h1>
//                                 <h1>Price: {item.price}</h1>
//                                 <button onClick={() => cancel(index)} className='btn bg-red-600 text-white rounded-lg px-2'>
//                                     Cancel Order
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ))}

//             <h1 className='text-xl text-center mt-10 text-black font-bold'>
//                 Total price you have to pay: {totalprice}
//             </h1>

//         </div>
//     );
// }

// export default Myorder;

// src/components/Myorder.jsx
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
// import Header from './Header';
import Header from '../components/Header';
import UserContext from '../context/UserContext';


function Myorder() {
    const { food, setdata } = useContext(UserContext);

    const totalprice = food.reduce((total, item) => total + item.price, 0);
    useEffect(() => {
        async function fetchorders() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/menuapi/order/")
                setdata(response.data);
                console.log(response.data);
                
            }catch(error){
                console.log("Error fetching orders")
            }
    
        }
        fetchorders();
    },[])
    // const cancel = (index) => {
    //     const updatedFood = food.filter((_, i) => i !== index);
    //     setdata(updatedFood);
    // };
    const cancel = async(index) => {
        // const newvalue = [...fooddata];
        // newvalue.splice(index, 1);
        // setfooddata(newvalue);
        console.log(index);
        
        try{
            await axios.delete(`http://127.0.0.1:8000/menuapi/order/${index}/`)
            setdata(food.filter((order)=>order.id!==index))
        }catch(error){
            console.log("Error deleting order",error);
            

        }
    };

    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        console.log("result", result)
        return result;

    };

    return (
        <div>
            <Header />
            <h1 className="text-center text-xl text-black mt-5">Total items in your cart: {food.length}</h1>

            {food.length === 0 ? (
                <h2 className="text-center text-gray-500 mt-5">No items in your cart.</h2>
            ) : (
                chunkArray(food, 3).map((row, rowIndex) => (
                    <div key={rowIndex} className="col-span-12 flex flex-wrap ml-32">
                        {/* {console.log(row)} */}
                        {row.map((item, index) => (
                            <div key={index} className="flex-auto max-w-sm p-4">
                                <div className="border border-gray-300 rounded-md p-4">
                                    <h1>Item: {item.item_name}</h1>
                                    <h1>Price: {item.price}</h1>
                                    <button
                                        onClick={() => cancel(item.id)}
                                        className="btn bg-red-600 text-white rounded-lg px-2"
                                    >
                                        Cancel Order
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            )}

            <h1 className="text-center text-xl mt-10 text-black font-bold">
                Total price you have to pay: ${totalprice}
            </h1>
        </div>
    );
}

export default Myorder;
