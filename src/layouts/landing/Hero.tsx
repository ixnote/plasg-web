import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="h-screen flex items-center justify-center">
          {/* hero content */}
          <div className="m-auto w-[92%] flex justify-between">
            <div className="w-[50%] flex flex-col gap-4 justify-between">
              <div className="flex flex-col gap-4">
                {/* left top */}
                <div className="h-[296px] glass-fx flex flex-col gap-10 text-left p-8">
                  <div className="text-left flex flex-col gap-2">
                    <span className="font-medium text-5xl font-geistsans text-white outline-2">
                      Welcome to{" "}
                    </span>
                    <span className="font-medium text-5xl font-geistsans text-white outline-2">
                      plateaustate.gov.ng
                    </span>
                  </div>
                  <span className="font-normal text-base text-white font-geistsans w-[94%]">
                    Plateau.gov.ng is the official website of Plateau State.
                    Here, you'll find access to online services, valuable
                    resources, and essential information about our beautiful
                    state.
                  </span>
                </div>
                {/* bottom left */}
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Looking for something? Search anything"
                  className="glass-fx h-[74px] flex items-center justify-center p-8 rounded-lg  duration-300 ease-in-out cursor:pointer focus:border-none focus:outline-none hover:bg-[#FCFF45]"
                />
              </div>
            </div>
            {/* right */}
            <div className="w-[50%]"></div>
          </div>
        </div>
    </>
  )
}

export default Hero