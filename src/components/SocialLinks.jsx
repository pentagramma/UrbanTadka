import React from 'react'
import instagramUrbanTadka from '../images/instagramUrbanTadka.jpg'
import LineUrbanTadka from '../images/lineUrbanTadka.jpeg'

const SocialLinks = () => {
    return (
        <div className='relative'>
            <div className='flex justify-center items-center h-[12cm] border border-b-black border-dotted border-t-0'>
                <div className='flex items-center
          sm:pt-20 pt-5  justify-center h-[11cm] flex-col sm:flex-row'>
                    <div className='mt-10 text-black h-full sm:w-[60%] flex flex-row justify-center md:text-xl sm:text-sm text-lg'>
                        <div className='w-[450px]'>
                            <span className='font-extralight'>
                                たまプラーザの本格インド料理店
                            </span>
                            <span className='font-semibold'>
                                URBAN TADKA
                            </span>
                            <span className='font-extralight'>
                                (アーバンタルカ)です！
                            </span>

                            <h3 className=''>

                                2023年3月10日で３周年を迎えました!
                            </h3>
                            <h3 className='font-extralight'>
                                <span className='font-semibold'>

                                    LINE
                                </span>
                                から、レストランのお席のご予約も承ります。
                            </h3>
                        </div>

                    </div>
                    <div className='size-13 sm:size-48 sm:h-[70px] flex flex-col justify-around gap-4 mx-[170px] mb-20 sm:flex-row'>
                        <img src={instagramUrbanTadka} alt=""
                            className=''
                        />

                        <img src={LineUrbanTadka} alt=""
                            className=''
                        />
                    </div>
                </div>

            </div>
            <div className='absolute z-15 flex justify-center items-center w-full h-0'>

                <h2 className='text-black bg-white px-10 py-2 text-3xl font-extralightlight'>
                    お知らせ
                </h2>
            </div>
        </div>

    )
}
export default SocialLinks
