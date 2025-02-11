import React from 'react'

function Landing() {
  return (
    <div className='mainlanding w-full h-screen bg-[#FFD800] relative overflow-y-hidden'>

      <div className='hidden lg:block vid absolute right-5 top-[15%]'>
          <img className='w-[700px] h-[700px] object-cover' src="/tenor.gif" alt = "Landing"></img>
      </div>

      <div className='w-full px-5 lg:px-10 py-5 flex items-center justify-between'>

        <h1 className='logo text-[30px] lg:text-[50px] font-bold text-sky-500'>SurveyScape</h1>

        <div className='hidden lg:flex text-[20px] lg:text-[30px] gap-5 font-bold text-sky-400 '>
          <h2>Contact</h2>
          <h2>About Us</h2>
          <h2>Help</h2>
        </div>

        <div className='lg:hidden text-[35px] px-5 text-sky-500' ><i class="ri-menu-5-line"></i></div>

      </div>

      <div className='mt-[90px] lg:mt-[200px] w-[100%] lg:w-[40%] lg:p-10 p-5'>
        <h1 className='text-orange-700 text-4xl lg:text-6xl font-bold mb-4'>
          Create Surveys That Make an Impact
        </h1>
        <p className='text-sky-800 text-xl lg:text-2xl mb-6'>
          Design, distribute, and analyze surveys with ease. Get meaningful insights from your audience with our powerful survey management platform.
        </p>
        <button className='bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors'>
          Get Started Free
        </button>
      </div>

      {/* <div className='absolute right-[35%] top-1/3 z-[1]'>
        <div className='bg-sky-100 rounded-lg p-6 shadow-lg transform rotate-3'>
          <div className='w-[300px] h-[200px] bg-white rounded-md mb-4'></div>
          <div className='w-[200px] h-4 bg-sky-200 rounded-full mb-2'></div>
          <div className='w-[250px] h-4 bg-sky-200 rounded-full'></div>   
        </div>
      </div> */}

    </div>
  )
}

export default Landing