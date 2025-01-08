import React from 'react';
const Segments=()=>{
    return (
        <div className='flex flex-col justify-center items-center mb-[30px] mt-[30px]'>
        <div className="flex items-center bg-gray-200 p-3 rounded-lg w-[90vw] mb-5 h-[64px] ">
          <div className="mr-3"><img src='https://res.cloudinary.com/dhhhojjlp/image/upload/v1736348025/Frame_vjuqvz.png' alt='segment'/></div>
          <span className="font-semibold">Segment</span>
        </div>
        <div className="flex gap-6">
        {/* Card 1 */}
        <div className="w-[408px] h-[368px] bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
             style={{ backgroundImage: `url('https://res.cloudinary.com/dhhhojjlp/image/upload/v1736348026/Group_fst1ni.png')` }}>
        <div className="flex flex-col justify-between items-center h-full bg-gradient-to-t from-black via-transparent to-transparent p-5">
            <h3 className="text-[#030303] text-2xl font-bold">Residential</h3>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg w-[230px] h-[48px]">View More</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[408px] h-[368px] bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
             style={{ backgroundImage: `url('https://res.cloudinary.com/dhhhojjlp/image/upload/v1736348026/Group-1_gr5i28.png')` }}>
           <div className="flex flex-col justify-between items-center h-full bg-gradient-to-t from-black via-transparent to-transparent p-5">
            <h3 className="text-[#030303] text-2xl font-bold">Institutional</h3>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg w-[230px] h-[48px]">View More</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[408px] h-[368px] bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
             style={{ backgroundImage: `url('https://res.cloudinary.com/dhhhojjlp/image/upload/v1736348026/Group-2_mycywc.png')` }}>
           <div className="flex flex-col justify-between items-center h-full bg-gradient-to-t from-black via-transparent to-transparent p-5">
            <h3 className="text-[#030303] text-2xl font-bold">Commercial</h3>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg w-[230px] h-[48px]">View More</button>
          </div>
        </div>
      </div>
        </div>
      );
    }
export default Segments