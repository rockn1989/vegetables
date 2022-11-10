import React from "react"
import "./layout.scss";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="page-main">
      <Header />
      {children}
      <Footer />
    </main>
  )
};