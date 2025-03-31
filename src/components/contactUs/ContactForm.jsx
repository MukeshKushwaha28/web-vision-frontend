import React from 'react'

export const ContactForm = () => {
  return (
    <div className='container mx-auto px-4 md:px-20  items-center pb-24  pt-10 md:pt-14'>
        <div className=' w-[ 95%] bg-gray-100 rounded-2xl'>
             <form action="" className=' px-4 md"px-12 py-10 md:py-20'>

                <div  className=' flex  flex-wrap gap-10'>
                <input type="text" name="" id="" placeholder='First Name *' className=' bg-white border-none rounded-2xl px-9 py-2 w-full md:w-[31%]'/>
                 <input type="text" name="" id="" placeholder='Last Name *' className=' bg-white border-none rounded-2xl px-9 py-2 w-full md:w-[31%]'/>
                 <input type="email" name="" id="" placeholder='Email *' className=' bg-white border-none rounded-2xl px-9 py-2 w-full md:w-[31%]'/>
                 <input type="text" name="" id="" placeholder='Phone *' className=' bg-white border-none rounded-2xl px-9 py-2 w-full md:w-[31%]'/>
                 <input type="text" name="" id=""  placeholder='Subject *' className=' bg-white border-none rounded-2xl px-9 py-2 w-full md:w-[31%]'/>
                <select name="" id="" className=' bg-white border-none rounded-2xl px-9 py-2 w-full md:w-[31%]'>
                    <option value="">Intrest in ?</option> 
                </select>
                </div>
                
                <textarea name="" id="" placeholder='Message *' className=' w-full h-[300px] bg-white border-none rounded-2xl px-9 py-2 mt-10'></textarea>
             </form>
        </div>
    </div>
  )
}
