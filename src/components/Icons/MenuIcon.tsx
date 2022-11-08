import React from 'react'

interface MenuIconProps {
  width: number,
  height: number
};

export const MenuIcon = ({ width, height }: MenuIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}px`} height={`${height}px`} fill="currentColor" viewBox="3 6 18 12">
      <path fillRule="evenodd" clipRule="evenodd" d="M21 7H3V6H21V7ZM21 12.5H3V11.5H21V12.5ZM3 18H21V17H3V18Z" fill="currentColor" />
    </svg>
  )
};