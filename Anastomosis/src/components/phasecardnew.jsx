import React from 'react'

const phasecardnew = ({highlight, step1, step2, step3, reverse=false}) => {
  return (
    <div className="w-full transparent">
  <div className="">
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="p-8 md:p-12 lg:p-16">
        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 right-0 top-5 h-0.5 bg-blue-300 hidden md:block w-[90%]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Highlight Box */}
            <div className="relative z-10">
              <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl md:text-base xl:text-2xl  text-center lg:text-left font-bold leading-tight">
                  {highlight}
                </h3>
              </div>
            </div>

            {/* Step 1 */}
            <div className="relative flex flex-col items-center justify-center md:text-left">
              <div className="w-12 h-12 bg-blue-600 rounded-lg hidden lg:block mx-auto md:mx-0 mb-6"></div>
              <p className="text-gray-800 text-center text-base xl:text-lg font-medium leading-relaxed">
                {step1}
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center justify-center  md:text-left">
              <div className="w-12 h-12 bg-blue-600 rounded-lg hidden lg:block mx-auto md:mx-0 mb-6"></div>
              <p className="text-gray-800 text-center text-base xl:text-lg font-medium leading-relaxed">
                {step2}
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center justify-center   md:text-left">
              <div className="w-12 h-12 bg-blue-600 rounded-lg hidden lg:block mx-auto md:mx-0 mb-6"></div>
              <p className="text-gray-800 text-center text-base xl:text-lg font-medium leading-relaxed">
                {step3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default phasecardnew