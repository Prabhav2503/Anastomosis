import React from 'react'

const phasecardnew = ({highlight, step1, step2, step3, reverse=false}) => {
  return (
    <div className="w-full transparent">
  <div className="">
    <div className="bg-white rounded-3xl overflow-hidden">
      <div className="p-8 md:p-12 lg:p-16">
        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-3 md:left-4 lg:left-[15%] right-0 top-5 h-[70%] lg:h-0.5 bg-blue-300 hidden sm:block w-0.5 lg:w-[70%]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            

            {/* Step 1 */}
            <div className="relative max-w-3xl lg:max-w-2xl flex lg:flex-col items-center justofy-start  lg:justify-center gap-3 lg:gap-0 md:text-left">
              <div className="size-10 lg:size-12 bg-blue-600 rounded-lg block mx-auto md:mx-0 mb-6 hidden sm:block"></div>
              <p className="text-gray-800 text-center text-base xl:text-lg font-medium leading-relaxed w-200 lg:w-full">
                {step1}
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative max-w-3xl lg:max-w-2xl flex lg:flex-col items-center justify-start lg:justify-center gap-3 lg:gap-0  md:text-left">
              <div className="size-10 lg:size-12 bg-blue-600 rounded-lg block mx-auto md:mx-0 mb-6 hidden sm:block"></div>
              <p className="text-gray-800 text-center text-base xl:text-lg font-medium leading-relaxed w-200 lg:w-full">
                {step2}
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative max-w-3xl gap-3 lg:gap-0 lg:max-w-2xl flex lg:flex-col items-center justify-start lg:justify-center   md:text-left">
              <div className="size-10 lg:size-12 bg-blue-600 rounded-lg block mx-auto md:mx-0 mb-6 hidden sm:block"></div>
              <p className="text-gray-800 text-center text-base xl:text-lg font-medium leading-relaxed w-200 lg:w-full">
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