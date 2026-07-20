import React from 'react'

const ContentCard = ({capsuleData , description ,firstTwoWords ,secondLinefirstWord ,highlight}) => {
  return (
    <div className='font-[Yuyu]'>
          <p className="border-2  border-violet-700 w-fit text-black font-bold px-4 py-1 rounded-3xl bg-green-300 mb-4">
            {capsuleData}
          </p>
          <h1 className="text-black text-7xl font-extrabold  tracking-wider ">
            {firstTwoWords}
            <br />
            {secondLinefirstWord} <span className="text-purple-900">{highlight}</span>
          </h1>
          <p className="text-black mt-3.5 font-sans word-wrap">
          {description}
          </p>
        </div>
  )
}

export default ContentCard
