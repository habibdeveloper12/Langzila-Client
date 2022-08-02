import React from 'react';
import { useNavigate } from 'react-router-dom';
import Quizimg from '../../../assets/QuizImg/Quiz2.png'
// import Quizimg from '../../../assect/QuizBG1Cover.png'


const Easy = () => {



    const navigate = useNavigate();




    return (
        <div className=' max-w-7xl mx-auto my-10'>
            <div className=' pt-10 grid xl:grid-cols-3 grid-cols-2 gap-10 justify-center'>

                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-orange-500'>1</span></h1>
                        <button onClick={() => navigate('/quiz/easyquiz1')} className=' py-[5px] px-4 rounded-3xl text-yellow-300 border bg-black hover:border hover:border-black hover:bg-transparent hover:text-black text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                </div>

                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-orange-500'>2</span></h1>
                        <button className=' py-[5px] px-4 rounded-3xl text-yellow-300 border bg-black hover:border hover:border-black hover:bg-transparent hover:text-black text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                </div>


                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-orange-500'>3</span></h1>
                        <button className=' py-[5px] px-4 rounded-3xl text-yellow-300 border bg-black hover:border hover:border-black hover:bg-transparent hover:text-black text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                </div>


                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-orange-500'>4</span></h1>
                        <button className=' py-[5px] px-4 rounded-3xl text-yellow-300 border bg-black hover:border hover:border-black hover:bg-transparent hover:text-black text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                </div>


                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-orange-500'>5</span></h1>
                        <button className=' py-[5px] px-4 rounded-3xl text-yellow-300 border bg-black hover:border hover:border-black hover:bg-transparent hover:text-black text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                </div>


                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden relative'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-orange-500'>6</span></h1>
                        <button className=' py-[5px] px-4 rounded-3xl text-yellow-300 border bg-black hover:border hover:border-black hover:bg-transparent hover:text-black text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                    <div className='h-full w-full bg-black bg-opacity-60 absolute top-0 left-0 bottom-0 right-0'>
                        <h1 className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-3xl text-yellow-300'>UpComing</h1>
                    </div>
                </div>


                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden relative'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-orange-500'>7</span></h1>
                        <button className=' py-[5px] px-4 rounded-3xl text-yellow-300 border bg-black hover:border hover:border-black hover:bg-transparent hover:text-black text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                    <div className='h-full w-full bg-black bg-opacity-60 absolute top-0 left-0 bottom-0 right-0'>
                        <h1 className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-3xl text-yellow-300'>UpComing</h1>
                    </div>
                </div>


                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden relative'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-orange-500'>8</span></h1>
                        <button className=' py-[5px] px-4 rounded-3xl text-yellow-300 border bg-black hover:border hover:border-black hover:bg-transparent hover:text-black text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                    <div className='h-full w-full bg-black bg-opacity-60 absolute top-0 left-0 bottom-0 right-0'>
                        <h1 className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-3xl text-yellow-300'>UpComing</h1>
                    </div>
                </div>


                <div className=' h-40 w-[80] bg-yellow-300 shadow rounded-md flex items-center overflow-hidden relative'>
                    <div className=' w-full'>
                        <h1 className='w-full uppercase  font-semibold text-3xl text-gray-700'>Quiz <span className=' text-5xl text-orange-500'>9</span></h1>
                        <button className=' py-[5px] px-4 rounded-3xl text-yellow-300 border bg-black hover:border hover:border-black hover:bg-transparent hover:text-black text-md font-semibold mt-3 '>Start Now</button>
                    </div>
                    <img className=' w-[180px] h-full mt-7' src={Quizimg} alt="Quizimg" />
                    <div className='h-full w-full bg-black bg-opacity-60 absolute top-0 left-0 bottom-0 right-0'>
                        <h1 className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-3xl text-yellow-300'>UpComing</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Easy;