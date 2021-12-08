import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <main className="flex-1 px-4 py-4 md:py-6">
        <div className="container mx-auto max-w-7xl">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
