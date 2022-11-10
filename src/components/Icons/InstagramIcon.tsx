import React from 'react'

interface InstagramIconProps {
  width: number,
  height: number
};

const InstagramIcon = ({ width, height }: InstagramIconProps) => {
  return (
    <svg width={`${width}px`} height={`${height}px`} viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_83)">
        <path d="M24.0772 7.84562C24.021 6.5704 23.8148 5.69371 23.5194 4.93404C23.2146 4.12767 22.7458 3.40572 22.1315 2.80557C21.5314 2.19608 20.8047 1.72247 20.0077 1.42249C19.2436 1.12708 18.3715 0.920863 17.0963 0.864639C15.8115 0.803653 15.4037 0.789551 12.1452 0.789551C8.88678 0.789551 8.47892 0.803653 7.19895 0.859877C5.92373 0.916101 5.04704 1.1225 4.28755 1.41773C3.481 1.72247 2.75906 2.19131 2.1589 2.80557C1.54941 3.40572 1.07599 4.13243 0.775819 4.92946C0.480413 5.69371 0.274196 6.56564 0.217971 7.84085C0.156985 9.12559 0.142883 9.53345 0.142883 12.7919C0.142883 16.0503 0.156985 16.4582 0.21321 17.7382C0.269434 19.0134 0.475834 19.8901 0.771241 20.6498C1.07599 21.4561 1.54941 22.1781 2.1589 22.7782C2.75906 23.3877 3.48576 23.8613 4.28279 24.1613C5.04704 24.4567 5.91897 24.6629 7.19437 24.7192C8.47416 24.7756 8.8822 24.7895 12.1406 24.7895C15.3991 24.7895 15.8069 24.7756 17.0869 24.7192C18.3621 24.6629 19.2388 24.4567 19.9983 24.1613C21.6112 23.5377 22.8865 22.2625 23.51 20.6498C23.8053 19.8855 24.0117 19.0134 24.0679 17.7382C24.1241 16.4582 24.1382 16.0503 24.1382 12.7919C24.1382 9.53345 24.1335 9.12559 24.0772 7.84562ZM21.916 17.6444C21.8643 18.8165 21.6675 19.4494 21.5034 19.8714C21.1001 20.917 20.2703 21.7468 19.2247 22.15C18.8028 22.3141 18.1653 22.511 16.9977 22.5625C15.7319 22.6189 15.3522 22.6328 12.15 22.6328C8.94776 22.6328 8.56335 22.6189 7.30206 22.5625C6.12995 22.511 5.49702 22.3141 5.07506 22.15C4.55475 21.9577 4.08115 21.653 3.69674 21.2545C3.29822 20.8653 2.99348 20.3965 2.80118 19.8762C2.63708 19.4542 2.44021 18.8165 2.38874 17.6492C2.33234 16.3833 2.31842 16.0035 2.31842 12.8012C2.31842 9.59901 2.33234 9.2146 2.38874 7.95349C2.44021 6.78138 2.63708 6.14845 2.80118 5.72649C2.99348 5.206 3.29822 4.73258 3.7015 4.34799C4.09049 3.94947 4.55933 3.64472 5.07982 3.45261C5.50178 3.28851 6.13947 3.09164 7.30682 3.03999C8.57269 2.98377 8.95252 2.96966 12.1546 2.96966C15.3615 2.96966 15.7412 2.98377 17.0025 3.03999C18.1746 3.09164 18.8075 3.28851 19.2295 3.45261C19.7498 3.64472 20.2234 3.94947 20.6078 4.34799C21.0063 4.73716 21.3111 5.206 21.5034 5.72649C21.6675 6.14845 21.8643 6.78596 21.916 7.95349C21.9722 9.21936 21.9863 9.59901 21.9863 12.8012C21.9863 16.0035 21.9722 16.3785 21.916 17.6444Z" fill="currentColor" />
        <path d="M12.1452 6.62646C8.74157 6.62646 5.97998 9.38787 5.97998 12.7917C5.97998 16.1956 8.74157 18.957 12.1452 18.957C15.5491 18.957 18.3105 16.1956 18.3105 12.7917C18.3105 9.38787 15.5491 6.62646 12.1452 6.62646ZM12.1452 16.791C9.93711 16.791 8.14599 15 8.14599 12.7917C8.14599 10.5834 9.93711 8.79248 12.1452 8.79248C14.3536 8.79248 16.1445 10.5834 16.1445 12.7917C16.1445 15 14.3536 16.791 12.1452 16.791Z" fill="currentColor" />
        <path d="M19.9938 6.38291C19.9938 7.17775 19.3493 7.82222 18.5543 7.82222C17.7595 7.82222 17.115 7.17775 17.115 6.38291C17.115 5.58789 17.7595 4.9436 18.5543 4.9436C19.3493 4.9436 19.9938 5.58789 19.9938 6.38291Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_1_83">
          <rect width="24" height="24" fill="currentColor" transform="translate(0.100708 0.789551)" />
        </clipPath>
      </defs>
    </svg>

  )
};

export { InstagramIcon };