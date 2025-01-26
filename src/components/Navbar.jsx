import React, { useState } from 'react'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import avatarImg from "..//assets/avatar.png"
import { useSelector } from 'react-redux';




const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/Orders" },
    { name: "card Page", href: "/card" },
    { name: "check Out", href: "/checkout" },
]





const Navbar = () => {
   
   
    const [isddo, setisddo] = useState(false)
    const currentuser = true
    const cardItems=useSelector(state=>state.card.cardItems);
   
   
   

    return (
        <div className=''>
            <header className='max-w-screen-2xl  mx-auto px-4 py-4 flex justify-between'>
                <div className="left flex justify-center md:gap-[5vw] md:mx-[10vw]">
                    <div className="logo">
                        <Link><HiBars3CenterLeft className='size-10' /></Link>
                    </div>
                    <div className="search flex relative w-full max-w-sm">
                        <IoMdSearch className='size-6 absolute left-3 top-[15%] inline-block ' />

                        <input type="text" placeholder=' Search here ' className='bg-[#EAEAEA] rounded-md md:w-full w-[35vw] py-1 md:px-8 px-6 focus:outline-none  pl-10 pr-4 text-sm md:text-base  ' />
                    </div>
                </div>
                <div className="right flex relative items-center md:space-x-3 space-x-2 md:pr-[10vw]">
        
                    <div className="profile relative">
                        {
                            currentuser ? <>
                                <button onClick={() => setisddo(!isddo)} >
                                    <img
                                        src={avatarImg}
                                        alt="avatar"
                                        className={`size-7 mt-2 rounded-full ${currentuser ? 'ring-2 ring-blue-500' : ''}`}
                                    />
                                </button>
                                {
                                    isddo && (
                                        <div className='absolute  mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                                            <ul className='py-2'>
                                                {
                                                    navigation.map((items) => (
                                                        <li key={items.name} className='hover:bg-gray-100' onClick={() => { setisddo(false) }}>
                                                            <Link to={items.href} className='bolck px-4 py-2 text-sm  '>{items.name}</Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    )
                                }

                            </> : <Link to="/login"> <HiOutlineUser className='size-7' /></Link>
                        }

                    </div>

                    <button className='hidden sm:block'><FiHeart className='size-7' /></button>

                    <Link to="/cart" className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>
                        <MdOutlineShoppingCart />
                        <span>{cardItems.length}</span>

                    </Link></div>

            </header>
        </div>
    )
}

export default Navbar
