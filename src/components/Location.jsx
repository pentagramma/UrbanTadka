import React from 'react'
import MapImage from '../images/GoogleMap/staticmap.jpeg'
import { FaInstagram } from "react-icons/fa";



const Location = () => {
    const details = [
        {
            first: '店名',
            second: 'URBAN TADKA たまプラーザ店'
        },
        {
            first: '住所',
            second: '神奈川県 横浜市青葉区美しが丘1-11-21'
        },
        {
            first: '最寄り駅',
            second: 'たまプラーザ駅（東急田園都市線）'
        },
        {
            first: '道順,',
            second: 'たまプラーザ駅 北口を左折して徒歩5分'
        },
        {
            first: '電話番号',
            second: '080-8809-2259'
        },
        {
            first: '営業時間',
            second: '11:00 ～ 22:00'
        },
        {
            first: 'ランチタイム',
            second: '11:00 ～ 16:00'
        },
        {
            first: 'ラストオーダー',
            second: '21:30'
        },
        {
            first: '定休日',
            second: '月曜定休日'
        },
        {
            first: 'クレジットカード',
            second: 'JCB, Masters, Visa, etc'
        },
        {
            first: '禁煙席',
            second: '喫煙席なし'
        },
        {
            first: '駐車場',
            second: '駐車場なし'
        },
        {
            first: '平均予算',
            second: '1000～2000円'
        },
        {
            first: '設備・サービス',
            second:

                `◆お近くのタイムズパーキング使用の場合 (2,000円以上お召し上がりの場合) 駐車券をご提示で、駐車料金200円を返金させていただきます！
                ◆クレジットカード、電子マネー、QRコード決済も対応しています`
        },
        {
            first: '設備・サービス',
            second: `レストランのお席、テイクアウトのご予約は【お電話】か【LINE】にて承ります。
                デリバリーは【Uber Eats】【出前館】などで承ります。`
        },

    ]


    return (
        <div className='flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center py-20 sm:py-[100px] h-full w-full border border-white border-b-black border-dotted'>
                <div className='flex-col '>
                    <div className='relative overflow-hidden mx-[50px]'>
                        <a href='https://www.google.com/maps?q=35.5777503,139.5552194'
                            className='flex items-center justify-center'
                            target='_blank' rel='noopener noreferrer'>
                            <img
                                src={MapImage}
                                className='h-[230px] w-[250px] sm:h-[450px] sm:w-[920px] sm:scale-[1] scale-[3] object-cover cursor-pointer sm:justify-center sm:items-center'
                                alt="Map Image"
                            />
                        </a>

                        <div className='absolute inset-0 flex justify-end items-end sm:px-[307px] sm:pb-2 p-1'>
                            <ul>
                                <li className='text-black p-1 bg-white rounded-sm shadow-sm text-sm'>
                                    Googleマップを表示
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='h-[50px]'>

                    </div>

                    {details.map((detail, index) => (
                        <div
                            key={index}
                            className='flex flex-row text-[12px] mx-20 sm:mx-[12cm] sm:text-[15px]'>
                            <div className={`flex flex-col w-[40%] justify-center border border-dotted border-gray-400  items-center ${index < details.length - 1 ? 'border-t-0 border-l-0 ' : 'border-b-0 border-l-0 border-t-0'}`}>
                                <p className='py-3 sm:py-4'>
                                    {detail.first}

                                </p>
                            </div>
                            <div className={`flex flex-col w-[60%] items-start pl-2 sm:pl-3 border border-dotted border-gray-400 border-x-0 border-t-0 justify-center ${index < details.length - 1 ? 'border-t-0 border-r-0 ' : 'border-b-0 border-r-0 border-t-0'}`}>

                                <p className='py-1 sm:py-2'>
                                    {detail.second}


                                </p>

                            </div>
                        </div>
                    ))}



                </div>
            </div>
            <div className='h-[200px] flex items-center justify-center m flex-col'>
                <FaInstagram
                    className='size-7'
                />
                <h1 className='text-[25px] font-medium'>
                    URBAN TADKA たまプラーザ店
                </h1>
                <h3 className='text-[13px] font-light'>
                    ©2024 URBAN TADKA たまプラーザ店. All Rights Reserved.
                </h3>
            </div>
        </div>
    );
}

export default Location
