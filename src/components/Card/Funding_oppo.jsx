import React from 'react'

const Funding_oppo = ({ imgurl }) => {
    return (
  

        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <div className='relative'>
                <img src={imgurl}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                <p className="absolute top-9 left-0 right-0 bg-green-500 text-white mx-5 flex justify-center">
                    Accepting Applications
                </p>
                <p className="absolute bottom-0 left-0 right-0 text-white mx-5 pb-10 text-[29px] text-justify">
                    Renewable Energy Systems and Energy Efficiency Improvements Program
                </p>
            </div>
            <div class="px-4 py-3 w-72">
                <div class="flex items-center justify-center">
                    <button
                        type="button"
                        className=" h-[38px] w-[103px] bg-blue-default text-white hover:bg-blue-light">
                        View
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Funding_oppo