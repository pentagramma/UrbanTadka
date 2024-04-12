import React from 'react';
import i1 from '../images/Notice/i1.jpeg';
import i2 from '../images/Notice/i2.jpeg';
import i3 from '../images/Notice/i3.jpeg';
import i4 from '../images/Notice/i4.jpeg';
import { MdNavigateNext } from 'react-icons/md';

const Notice = () => {
    const links = [
        {
            id: 1,
            link: i1,
            heading: '2024 / 01 / 04',
            text: '【１月８日（月・祝）】臨時営業いたします'
        },
        {
            id: 2,
            link: i2,
            heading: '2024 / 01 / 01',
            text: '2024 あけましておめでとうございます'
        },
        {
            id: 3,
            link: i3,
            heading: '2023 / 12 / 24',
            text: '【シャルマchef企画】ひよこ豆のカレーとガーリックナンセット（～2024年1月末まで）'
        },
        {
            id: 4,
            link: i4,
            heading: '2023 / 10 / 28',
            text: '【10月28日スタート】 土・日限定！ パニールのビリヤニ　'
        },
    ];

    return (
        <div className='relative pt-10'>
            <div className='flex justify-center items-center h-[720px] sm:h-[479px] border border-b-black border-dotted border-t-0 flex-col z-20'>
                <div className='my-20 sm:mx-60 mx-6'>
                    <div className='grid justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-1'>
                        {links.map((link) => (
                            <div key={link.id} className='h-[150px] flex flex-row justify-start py-2 my-0 text-[13px] sm:text-[15px]'>
                                <div className='w-[140px] sm:w-[120px] lg:w-[140px]'>
                                    <img
                                        src={link.link}
                                        alt=''
                                        className='w-full h-[150px] sm:h-[120px] lg:h-[150px] object-cover rounded-md py-2 px-1'
                                    />
                                </div>
                                <div className='sm:w-[160px] w-[250px] ml-2'>
                                    <h2 className='my-1 text-sm sm:text-xl font-medium' key={`text-${link.id}`}>
                                        {link.heading}
                                    </h2>
                                    <p>{link.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-5 flex justify-end items-center '>
                        <ul>
                            <li className='p-1 hover:bg-gray-300 rounded-md' key='key1'>
                                もっと見る <MdNavigateNext />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='absolute z-15 flex justify-center items-center w-full h-0'>
                <h2 className='text-black bg-white flex justify-center items-center text-3xl px-10 py-2 font-extralight'>店舗情報</h2>
            </div>
        </div>
    );
};

export default Notice;
