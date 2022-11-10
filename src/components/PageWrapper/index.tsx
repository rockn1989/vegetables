import React from 'react'
import './page-wrapper.scss';

type PageWrapperProps = {
  children: React.ReactNode
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="page-wrapper">
      {children}
    </div>
  )
};

export { PageWrapper };