import { useState } from "react";
import FloaterForm from "./FloaterForm";

function Features() {
   const [isFormVisible, setIsFormVisible] = useState(false);
  
    const toggleFormVisibility = () => {
      setIsFormVisible((prev) => !prev);
    };
  return (
    <div>
      {/* Take the Call section */}
      <div className='flex flex-col items-center mt-20 w-auto'>
        {/* Text and svg */}
        <div className='flex flex-row'>
          <div  onClick={toggleFormVisibility} className='w-[8.375rem] h-[1.23625rem] text-center text-[#313338] font-pSans text-[1.293rem] font-semibold leading-[114%] tracking-[-0.02588rem]'>Take The Call</div>
          <div className='text-center mt-[0.15rem] ml-2'>
          <svg
          width="42"
          height="43"
          viewBox="0 0 42 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition ease-in-out duration-500 group-hover:-rotate-12 w-[1.05631rem] h-[1.08413rem]"
        >
          <g id="Cup Icon">
            <path
              id="Vector"
              d="M28 15C28.5304 15 29.0391 15.2107 29.4142 15.5858C29.7893 15.9609 30 16.4696 30 17V33C30 35.1217 29.1571 37.1566 27.6569 38.6569C26.1566 40.1571 24.1217 41 22 41H10C7.87827 41 5.84344 40.1571 4.34315 38.6569C2.84285 37.1566 2 35.1217 2 33V17C2 16.4696 2.21071 15.9609 2.58579 15.5858C2.96086 15.2107 3.46957 15 4 15H32C34.1217 15 36.1566 15.8429 37.6569 17.3431C39.1571 18.8434 40 20.8783 40 23C40 25.1217 39.1571 27.1566 37.6569 28.6569C36.1566 30.1571 34.1217 31 32 31H30"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M16 2V6"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_3"
              d="M24 2V6"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_4"
              d="M8 2V6"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
          </div>
        </div>
        {/* Tea or Coffee */}
        <div className='flex justify-center w-[11rem] h-[0.8125rem] mt-2'>
          <div className='text-center font-inter text-[0.625rem] font-medium leading-[0.44994rem] text-[#F97316]'>TEA OR COFFEE?</div>
        </div>
      </div>

        {/* Overlay and Form */}
        {isFormVisible && (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      {/* Form Container */}
      <div className="relative p-6 rounded-md w-[95%] max-w-sm max-h-[95%] overflow-y-auto no-scrollbar">
        {/* Close Button */}
        <button
          className="absolute top-0 right-6 text-gray-500 hover:text-gray-700"
          onClick={toggleFormVisibility}
        >
          ✖
        </button>
        <FloaterForm />
      </div>
    </div>
    
      )}

      


      {/* Know About Us Section */}
      <a href="">
      <div className='flex flex-col items-center mt-14 w-auto'>
        {/* SVG and Text */}
        <div className='flex flex-row'>
            <div className='text-center mt-[0.15rem] mr-2'>
                <svg width="19" height="19" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 42V38C32 35.8783 31.1571 33.8434 29.6569 32.3431C28.1566 30.8429 26.1217 30 24 30H12C9.87827 30 7.84344 30.8429 6.34315 32.3431C4.84285 33.8434 4 35.8783 4 38V42" stroke="#F97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 22C22.4183 22 26 18.4183 26 14C26 9.58172 22.4183 6 18 6C13.5817 6 10 9.58172 10 14C10 18.4183 13.5817 22 18 22Z" stroke="#F97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M44 42V38C43.9987 36.2275 43.4087 34.5056 42.3227 33.1046C41.2368 31.7037 39.7163 30.7031 38 30.26" stroke="#F97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M32 6.26001C33.7208 6.70061 35.2461 7.70141 36.3353 9.10463C37.4245 10.5078 38.0157 12.2337 38.0157 14.01C38.0157 15.7864 37.4245 17.5122 36.3353 18.9154C35.2461 20.3186 33.7208 21.3194 32 21.76" stroke="#F97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <a href="https://bio.site/thebrightlayers"><div className='w-[9.25rem] h-[1.1875rem] text-[#313338] font-pSans text-center text-[1.293rem] font-semibold leading-[114%] tracking-[-0.02588rem]'>Know About Us</div>
            </a>
        </div>
        {/* Who Are We */}
        <div className='flex justify-center mt-2 w-[9.19175rem] h-[0.72863rem]'>
          <div className='text-[#F97316] text-center font-inter text-[0.625rem] font-medium leading-[0.46919rem]'>WHO ARE WE?</div>
        </div>
      </div>
      </a>
      
    </div>
  )
}

export default Features