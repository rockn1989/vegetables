import React from 'react'

interface ArrowRightIconProps {
  width: number,
  height: number
};


export const ArrowRight = ({ width, height }: ArrowRightIconProps) => {
  return (
    <svg width={`${width}px`} height={`${height}px`} viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.7071 8.67586C33.0976 8.28533 33.0976 7.65217 32.7071 7.26164L26.3431 0.897682C25.9526 0.507158 25.3195 0.507158 24.9289 0.897682C24.5384 1.28821 24.5384 1.92137 24.9289 2.3119L30.5858 7.96875L24.9289 13.6256C24.5384 14.0161 24.5384 14.6493 24.9289 15.0398C25.3195 15.4303 25.9526 15.4303 26.3431 15.0398L32.7071 8.67586ZM0 8.96875H32V6.96875H0V8.96875Z" fill="currentColor" />
    </svg>
  )
};