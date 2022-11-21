import React from 'react'

interface FacebookIconProps {
  width: number,
  height: number
};

const FacebookIcon = ({ width, height }: FacebookIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}px`} height={`${height}px`} fill="currentColor" viewBox="0.1 0.79 24 24">
      <g clipPath="url(#clip0_1_75)">
        <path d="M13.6006 9.03955V6.03955C13.6006 5.21155 14.2726 4.53955 15.1006 4.53955H16.6006V0.789551H13.6006C11.1151 0.789551 9.10059 2.80405 9.10059 5.28955V9.03955H6.10059V12.7896H9.10059V24.7896H13.6006V12.7896H16.6006L18.1006 9.03955H13.6006Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_1_75">
          <rect width="24" height="24" fill="currentColor" transform="translate(0.100586 0.789551)" />
        </clipPath>
      </defs>
    </svg>
  )
};

export { FacebookIcon };