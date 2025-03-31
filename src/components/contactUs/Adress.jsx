import React from 'react'
import Button from '../button/Button'

export const Adress = () => {
    return (
        <div className='container mx-auto px-4 md:px-20  items-center pb-24  pt-10 md:pt-24'>
            <div className=' flex flex-col md:flex-row gap-4'>
                <div className=' w-full md:w-[55%]'>
                    <div className="  ">
                        <Button text={"GET IN TOUCH"} />

                        <h2 className="font-bold text-6xl text-black text-left pt-4 pb-10">
                            Main Office {" "}
                            <span className="bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
                                Location
                            </span>{" "}

                        </h2>
                    </div>


                    <div className=' flex flex-wrap gap-6'>
                        <div className='w-full  md:w-[40%] flex gap-2'>

                            <div className=' w-[20%]'>
                                <div className='flex items-center justify-center w-[60px] h-[60px]  rounded-full bg-gradient-to-b from-pink-500 to-purple-600'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 3.86 4.37 8.97 6.69 11.49a1.4 1.4 0 0 0 2.15 0C14.63 17.97 19 12.86 19 9c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>


                            <div className=' w-[80%]'>
                                <h4 className=' text-black text-2xl font-bold'>Our Address</h4>
                                <p className=' text-black'>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                            </div>

                        </div>

                        <div className='w-full  md:w-[40%] flex gap-2'>

                            <div className=' w-[20%]'>
                                <div className='flex items-center justify-center w-[60px] h-[60px]  rounded-full bg-gradient-to-b from-pink-500 to-purple-600'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path fill-rule="evenodd" d="M6.6 2.7a1.5 1.5 0 0 1 2.05-.45l3 2a1.5 1.5 0 0 1 .6 1.75l-.72 2.14a10.5 10.5 0 0 0 4.78 4.78l2.14-.72a1.5 1.5 0 0 1 1.75.6l2 3a1.5 1.5 0 0 1-.45 2.05l-2.25 1.5c-1.46.97-3.35 1.03-4.9.15a18 18 0 0 1-8.12-8.13c-.88-1.55-.82-3.44.15-4.9l1.5-2.25Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>


                            <div className=' w-[80%]'>
                                <h4 className=' text-black text-2xl font-bold'>Contact Us</h4>

                                <p className=' text-black'>898-767-6869</p>
                                <p className=' text-black'>898-767-6869</p>
                            </div>

                        </div>




                        <div className='w-full  md:w-[40%] flex gap-2'>

                            <div className=' w-[20%]'>
                                <div className='flex items-center justify-center w-[60px] h-[60px]  rounded-full bg-gradient-to-b from-pink-500 to-purple-600'>
                                <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6.6 2.7a1.5 1.5 0 0 1 2.05-.45l3 2a1.5 1.5 0 0 1 .6 1.75l-.72 2.14a10.5 10.5 0 0 0 4.78 4.78l2.14-.72a1.5 1.5 0 0 1 1.75.6l2 3a1.5 1.5 0 0 1-.45 2.05l-2.25 1.5c-1.46.97-3.35 1.03-4.9.15a18 18 0 0 1-8.12-8.13c-.88-1.55-.82-3.44.15-4.9l1.5-2.25Z" />
        <path d="M15 6.5a.75.75 0 0 1 1.06 0 4 4 0 0 1 0 5.66.75.75 0 1 1-1.06-1.06 2.5 2.5 0 0 0 0-3.54.75.75 0 0 1 0-1.06Z" />
      </svg>
                                </div>
                            </div>


                            <div className=' w-[80%]'>
                                <h4 className=' text-black text-2xl font-bold'>Our Website</h4>


                                <p className=' text-black'>Our Website
                                    www.conchoexample.com</p>
                            </div>

                        </div>


                        <div className='w-full  md:w-[40%] flex gap-2'>

                            <div className=' w-[20%]'>
                                <div className='flex items-center justify-center w-[60px] h-[60px]  rounded-full bg-gradient-to-b from-pink-500 to-purple-600'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-white"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 4A2.5 2.5 0 0 0 2 6.5v11A2.5 2.5 0 0 0 4.5 20h15a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 19.5 4h-15Zm15 2H4.5c-.28 0-.5.22-.5.5v.14l8 4.8 8-4.8V6.5c0-.28-.22-.5-.5-.5Zm.5 3.78-7.64 4.58a1 1 0 0 1-1.72 0L4 9.78V17.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5V9.78Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>


                            <div className=' w-[80%]'>
                                <h4 className=' text-black text-2xl font-bold'>Contact Support</h4>

                                <p className=' text-black'>info@example.com</p>
                                <p className=' text-black'>898-767-6869</p>
                            </div>

                        </div>






                    </div>


                    <div className=" pt-8 ">
                        <Button text={"Contact Us"} />

                        <h2 className="font-bold text-6xl text-black text-left pt-4 pb-10">

                            <span className="bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
                                Connect {" "}
                            </span>{" "}

                            with Our Team

                        </h2>

                        <p className=' text-black  '>Donec elementum, sapien quis viverra laoreet, mauris lorem gravida ipsum, eu vehicula magna ligula sit amet lectus. Pellentesque faucibus dignissim urna eu dignissim. Nunc quis lorem posuere urna faucibus fringilla.</p>
                    </div>

                </div>
                <div className=' w-full md:w-[45%]'>
                    <img src="/images/adress.png" alt="" className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    )
}
