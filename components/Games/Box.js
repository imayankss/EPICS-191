import React from 'react'
import Image from 'next/image'

const Box = ({ Name, Link, Photo, Color }) => {
  return (
    Name && (
      <a
        href={Link}
        target="_blank"
        rel="noreferrer"
        className={`${Color} p-2 relative rounded-xl overflow-hidden`}
      >
        <Image
          className="absolute z-0 pt-12 px-12 pb-12"
          src={Photo}
          width={225}
          height={225}
          alt={Name}
        />
        <p className="text-black/80 relative font-productSansBold text-lg md:text-2xl">
          {Name}
        </p>
        {/* <p className="text-white/80 font-productSansBold text-lg -mt-2 md:text-xl">Exercises</p> */}
      </a>
    )
  )
}

export default Box
