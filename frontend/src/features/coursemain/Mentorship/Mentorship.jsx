import React from 'react'

export default function Mentorship() {
  return (
    <div>
      <div className="bg-white h-12 flex justify-between items-center">
        <ul className='flex justify-start py-2'>
          <li className='text-gray-500 mx-2'>Book a Session</li>
          <li className='text-gray-500 mx-2'> Manage Bookings</li>
          <li className='text-gray-500 mx-2'> Previous Bookings</li>
        </ul>
        <div className='bg-blue-300 text-blue-600 rounded-md p-2 w-24 md:mr-24'>Guidelines</div>
      </div>
      <div className='bg-gray-100'>
        <h1 className='text-center my-5 font-bold text-gray-600'>Book a session</h1>
        <div className='bg-white w-[700px] p-4 ml-10'>
          <div className='w-[100px]'> <img src="https://ab-user-files-prod.s3.ap-south-1.amazonaws.com/public/themeIcon/a1bb4971-9301-480a-a85d-259b8435fc32.jpeg" alt="" /> </div>
          <h3 className='text-gray-900 text-xl mt-4'>Data Science Professional Guidance</h3>
          <p className='w-[90%] text-gray-600'>Supercharge your career journey with our transformative session, designed to elevate your understanding of foundation learning and capstone projects. Gain valuable guidance on applying your knowledge, enhancing skills, and curating an impressive resume and portfolio. Master the art of interviews through personalized career guidance and unlock the confidence to land your dream job successfully.</p>
          <button style={{ background: "rgba(19,79,92,1)" }} className='text-white px-5 py-2 rounded-md mt-5'>Book Now</button>
        </div>
      </div>
      <div className='bg-gray-100 h-[700px] flex mt-20'>
        <div className='flex justify-center items-center h-full w-4/5'>
          <div className='text-center'>
            <img src="https://grow.almabetter.com/static/media/desertImg.0be9f5b6.png" alt="" className='w-32 mx-auto' />
            <h3 className='my-4 font-bold '>No Booking Found</h3>
            <button style={{ background: "rgba(19,79,92,1)" }} className='text-white px-3 py-2 rounded-md'>Create another Booking</button>
          </div>
        </div>
        <div className='w-1/5 mt-10 mr-10'>
          <div className='border-2 border-gray-400 rounded-md'>
            <div className='bg-gray-300 text-xl p-3 '>FILTER</div>
            <div className='bg-white border-1 border-gray-400 text-lg p-3 '>Status</div>
            <div className='bg-white border-1 border-gray-400 text-lg p-3 '>Session Type</div>
          </div>
          <div className='border-2 border-gray-400 rounded-md mt-10'>
            <div className='bg-gray-300 text-xl p-3 '>SORT</div>
            <div className='bg-white text-lg p-3 '>Sort By Dates</div>
            <div className='bg-white text-lg p-3 '><input type="checkbox" name="" id="" /> Latest First</div>
            <div className='bg-white text-lg p-3 '><input type="checkbox" name="" id="" /> Earliest First</div>
          </div>
        </div>
      </div>
      <div className='bg-gray-100'>
      </div>
    </div>
  )
}

