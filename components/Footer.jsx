import React from 'react'
import{
    CheckCircleIcon,
} from "@heroicons/react/outline"
import {
    BsGithub
}from "react-icons/bs"

function Footer() {
  return (
    <div className='mt-20 text-center'>
        
        <CheckCircleIcon className='w-8 h-8 inline'/>
        <h1 id='hire-me' className='font-bold text-2xl inline'>استخدام من</h1>
        <p className='font-bold'>با من در ارتباط باشید</p>
        <div className='ml-44 grid mt-10 grid-cols-3 grid-rows-2'>
            <a href='#' className='rounded-xl w-44 h-44 border-white border-2 flex justify-center shadow-xl shadow-white active:shadow-none'>
               <BsGithub size={100} className="mt-3"/>
            </a >
            <a href='#' className='rounded-xl w-44 h-44 border-white border-2 flex justify-center shadow-xl shadow-white active:shadow-none'>
                <CheckCircleIcon size={100} className="mt-3"/>
            </a >
            <a  href='#' className='rounded-xl w-44 h-44 border-white border-2 flex justify-center shadow-xl shadow-white active:shadow-none'>
                <CheckCircleIcon size={100} className="mt-3"/>
            </a >
            <a href='#' className='rounded-xl w-44 h-44 mt-10 border-white border-2 flex justify-center shadow-xl shadow-white active:shadow-none'>
                <CheckCircleIcon size={100} className="mt-3"/>
            </a >
            <a href='#' className='rounded-xl w-44 h-44 mt-10 border-white border-2 flex justify-center shadow-xl shadow-white active:shadow-none'>
                <CheckCircleIcon size={100} className="mt-3"/>
            </a >
            <a href='#' className='rounded-xl w-44 h-44 mt-10 mb-5 border-white border-2 flex justify-center shadow-xl shadow-white active:shadow-none'>
                <CheckCircleIcon size={100} className="mt-3"/>
            </a >
        </div>
        <div className='grid grid-cols-2 border-white w-fit border-4 m-auto rounded-xl mt-20'>
            <div className='mt-10 text-left ml-20 w-96 h-auto'>
                <label htmlFor="#" className='font-bold'>نام</label>
                <input type="text" className='mb-10 w-96 h-10 bg-black rounded-lg border-x-4 border-y-2  border-white text-white font-bold p-5'/>
                <label htmlFor="#" className='font-bold'>ایمیل</label>
                <input type="text" className='mb-10 w-96 h-10 bg-black rounded-lg border-x-4 border-y-2  border-white text-white font-bold p-5'/>
                <label htmlFor="#" className='font-bold'>پیام</label>
                <textarea className='w-96 h-32 bg-black rounded-lg border-x-4 border-y-2  border-white text-white font-bold pb-24 pl-5'/>
                <button className='w-32 h-12 font-extrabold mt-10 mb-5 ml-32 p- rounded-xl border-white border-4 hover:bg-white hover:text-black'>ارسال</button>
            </div>
            <div className='mt-24'>
                <div className='font-bold text-xl'>
                    <p>ایمیل من:</p>
                    <a href="mailto:amiralighasemi@yahoo.com" className=' text-cyan-600'>
                        amiralighasemi@yahoo.com
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer