import React, { useState, useContext, useEffect } from 'react';
import Header from '../components/Header';
import { data } from '../components/data';
import Myorder from './Myorder';
import Footer from '../components/Footer';
import UserContext from '../context/UserContext';
import axios from 'axios';

function Menu() {
    const [fooddata, setfooddata] = useState([]);
    const [display, setdisplay] = useState(true);
    const {food,setdata} = useContext(UserContext);


    useEffect(() => {
        console.log("context api fooddata:", food);
    }, [food]); 

    // const add = (id, name, price) => {
    //     const value = { id, name, price };
        
        
    //     setdata((prevFoodData) => [...prevFoodData, value]);
    //     async function adddata(food) {
    //         const res=await axios.post("http://127.0.0.1:8000/menuapi/order/",food)
            
    //     }

    //     alert("Your order will be placed soon");
    // };
    const add = (id, item_name, price) => {
        const value = { id, item_name, price };
        
        // Update the context data
        setdata((prevFoodData) => [...prevFoodData, value]);
    
        // Call the adddata function to send data to the backend
        async function adddata(food) {
            try {
                console.log("sendind order data",food)
                const res = await axios.post("http://127.0.0.1:8000/menuapi/order/", food);
                console.log("Order placed:", res.data);
            } catch (error) {
                console.error("Error placing order:", error);
            }
        }
    
        adddata(value); // Call adddata with the current food item
        alert("Your order will be placed soon");
    };
    

    

    const totalprice = fooddata.reduce((total, item) => total + item.price, 0);

    function chunkArray(array, chunkSize) {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    }

    function foodArray(array, size) {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }
    

    return (
        <div className='flex-grow-0'>
            <Header />
            <div className='grid grid-cols-12'>
                <div className='col-span-4 col-start-4'>
                    <h1
                        className='text-center text-2xl text-orange-600 mt-10 hover:cursor-pointer'
                        onClick={() => setdisplay(!display)}
                    >
                        Our Favourite Menus
                    </h1>
                </div>
                <div className='col-start-11 col-span-1'>
                    {/* <h1
                        className='btn hover:cursor-pointer mt-10 bg-red-500 text-center rounded lg py-2 text-white'
                        onClick={() => setdisplay(!display)}
                    >
                        My Order
                    </h1> */}
                </div>
            </div>

            {display ? (
                <div className='grid grid-cols-12 gap-10'>
                    {chunkArray(data, 4).map((row, rowIndex) => (
                        <div key={rowIndex} className='col-span-12 flex flex-wrap'>
                            {row.map((item, index) => (
                                <div key={index} className='flex-auto max-w-sm p-4'>
                                    <div className='border border-gray-300 rounded-md p-4'>
                                        <h1>{item.id}</h1>
                                        <h1>Item name : {item.item}</h1>
                                        <h1>Price : {item.price}</h1>
                                        <button
                                            className='btn bg-green-400 text-white p-2 w-20 h-10'
                                            onClick={() => add(item.id, item.item, item.price)}
                                        >
                                            Order
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    {foodArray(fooddata, 3).map((row, rowIndex) => (
                        <div key={rowIndex} className='col-span-12 flex flex-wrap ml-32'>
                            {row.map((item, index) => (
                                <div key={index} className='flex-auto max-w-sm p-4'>
                                    <div className='border border-gray-300 rounded-md p-4'>
                                        <h1>Item name : {item.name}</h1>
                                        <h1>Price : {item.price}</h1>
                                        <button
                                            onClick={() => cancel(index)}
                                            className='btn bg-red-600 text-white rounded-lg px-2'
                                        >
                                            Cancel Order
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                    <h1 className='text-xl text-center mt-10 text-black font-bold'>
                        Total price you have to pay: {totalprice}
                    </h1>
                </>
            )}
            {/* <Myorder data={fooddata} /> */}
            {/* <div className='flex-shrink-0 mt-20'>
                <Footer />
            </div> */}
        </div>
    );
}

export default Menu;
