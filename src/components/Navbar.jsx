import React, { useState, useEffect } from 'react';
import urbantadka from '../images/urbantadka.jpeg';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const navLinks = [
        { id: 1, title: 'トップページ' },
        { id: 2, title: 'お知らせ' },
        { id: 3, title: 'メニュー' },
        { id: 4, title: 'デリバリー' },
        { id: 5, title: '店舗情報' },
    ];

    const [isSecondNavbarFixed, setIsSecondNavbarFixed] = useState(false);

    const [showNavbar, setShowNavBar] = useState(false);

    const handleNavBar = () => {
        setShowNavBar(!showNavbar);
    }

    useEffect(() => {
        console.log(showNavbar);
    }, [showNavbar]);



    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const firstNavbarHeight = document.getElementById('first-navbar').offsetHeight;
            if (scrollPosition >= firstNavbarHeight) {
                setIsSecondNavbarFixed(true);
                setShowNavBar(false); // Hide the links menu when scrolling down
            } else {
                setIsSecondNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className=''>

            <div id="first-navbar" className=' sm:h-[140px] bg-white w-full flex justify-evenly items-center h-[270px] flex-col sm:flex-row'>
                <div className='flex justify-start sm:mt-4 mt-2 sm:mb-2'>
                    <img src={urbantadka} alt="" className='sm:h-[80px] h-[100px] w-auto' />
                </div>

                <div className='lg:hidden flex w-full justify-end items-end mr-20 '>
                    <button onClick={handleNavBar}>

                        <RxHamburgerMenu
                            className='size-[20px]'
                        />
                    </button>

                </div>

                <div className='flex sm:flex-row sm:mt-2 flex-col items-center text-sm'>
                    <div className='flex flex-col mx-10 sm:mb-3'>
                        <h2 className='text-[10px] sm:text-[13px]'>神奈川県横浜市青葉区美しが丘1-11-21</h2>
                        <h2 className='text-[26px] font-semibold text-gray-700'>
                            <span className='sm:text-[16px] text-[10px]'>TEL.</span><span className='text-[22px] sm:text-[30px]'>080-8809-2259</span>
                        </h2>

                    </div>

                    <div className='flex flex-col justify-end text-[10px] sm:text-[12px]'>
                        <h3>ランチタイム：11:00 ～ 16:00</h3>
                        <h3>ディナータイム：16：00～22：00</h3>
                        <h3>(ラストオーダー：21:30）</h3>
                        <h3 className='pb-2'>月曜定休日</h3>
                    </div>

                </div>

            </div>


            <div className=''>
                <div className='hidden h-[65px] w-full sm:flex justify-center items-center shadow-xl'>
                    <ul className='flex justify-center items-center text-[15px]'>
                        {navLinks.map((link) => (
                            <li className='cursor-pointer hover:border-white rounded-md hover:bg-gray-300 p-1 mx-2 gap-3' key={link.id}>{link.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`fixed top-0 left-0 right-0 z-20 bg-white shadow-md transition-all duration-300 ${isSecondNavbarFixed ? 'opacity-100' : 'opacity-0'}`}>

                <div className=' h-[60px] hidden w-full sm:flex justify-center items-center'>
                    <ul className='flex justify-center items-center text-[15px]'>
                        {navLinks.map((link) => (
                            <li className=' cursor-pointer hover:border-white rounded-md hover:bg-gray-300 p-1 mx-2 gap-3' key={link.id}>{link.title}</li>
                        ))}
                    </ul>
                </div>
                <div className='sm:hidden h-[90px] w-full flex justify-center items-center flex-row'>
                    <div className='w-[20%]'>

                    </div>

                    <div className='flex justify-center items-center w-[60%]'>
                        <img src={urbantadka} alt=""
                            className='size-[60px] w-auto'
                        />

                    </div>
                    <div className=' w-[20%] flex justify-end items-end px-7'>
                        <button onClick={handleNavBar}>

                            <RxHamburgerMenu
                                className='size-[25px]'
                            />
                        </button>

                    </div>
                </div>
            </div>


            {showNavbar && (
                <div className='fixed z-30 h-screen w-screen bg-white opacity-90 flex flex-row'>
                    <div className='w-[80%] flex flex-col items-center'>
                        {navLinks.map((link) => (
                            <ul>
                                <li>
                                    {link.title}
                                </li>
                            </ul>
                        ))}

                    </div>
                    <div className='w-[20%] flex justify-center mr-[16px]'>
                        <RxCross2 />

                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
