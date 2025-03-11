import React from 'react';
import winningData from '../../assets/data/winningData';

export default function Winner() {
  return (
    <div className="w-full text-white text-center pt-10 lg:pt-20 mt-10 lg:mt-20  relative px-4 backMd">
      <h2 className="text-2xl   sm:text-3xl md:text-4xl font-bold">
        Who’s <span className="text-blue-500">Winning in Crypto?</span>
      </h2>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">
        See the Real Movers & Shakers
      </h2>
      <p className="md:text-lg text-sm  mt-4 max-w-2xl mx-auto">
        {winningData.description}
      </p>

      {/* Cards Section */}
      <div className="flex justify-center gap-6 lg:space-y-0 space-y-24 md:gap-10 mt-10 flex-wrap">
        {winningData.winners.map((winner, index) => (
          <div
            key={index}
            className="relative rounded-4xl p-4 md:p-2 shadow-lg w-full sm:w-72 text-center overflow-visible bg-[#00182D]"

          >
            <div className='dd rounded-4xl p-5'
              style={{
                border: "4px solid transparent",
                borderImageSource: "linear-gradient(90deg, #26DDFF, #004DF4)",
                WebkitMaskImage: "radial-gradient(circle, white 100%, transparent 100%)"
              }}
            >

              <div className="relative">
                <img src={winner.image} alt={winner.name} className="w-full  rounded-lg object-cover" />
              </div>

              <h3 className="my-4 text-base sm:text-xl font-semibold uppercase text-white">{winner.name}</h3>
              <div className="flex justify-around mt-2  text-xs sm:text-sm text-gray-300">
                <p className='flex items-center justify-center' >Points &nbsp;&nbsp;<span className="bg-blue-500 h-8 w-8 flex items-center justify-center rounded-full text-white"> {winner.points}</span></p>
                <p className='flex items-center justify-center' >Rank &nbsp;&nbsp;<span className="bg-blue-500 h-8 w-8 flex items-center justify-center rounded-full text-white"> {winner.rank}</span></p>
              </div>


            </div>

            <div className="absolute -bottom-20 sm:-bottom-24 left-1/2 transform -translate-x-1/2 w-24 h-24">
              <img src={winningData.bottomImages[index]} alt={`Bottom Image ${index}`} className="w-full h-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-32 md:mt-38 bg-blue-500 text-white px-8 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-lg font-semibold hover:bg-blue-600 transition">
        Dominate the Ranks
      </button>
    </div>
  );
}
