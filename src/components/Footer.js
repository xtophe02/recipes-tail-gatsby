import React from "react"

export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-8 text-center text-white bg-black ">
      <p className="text-base sm:text-xl">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-green-500">SimpleRecipes</span> Build with{" "}
        <a href="https://www.gatsbyjs.com/" className="text-purple-500">
          Gatsby
        </a>
      </p>
    </footer>
  )
}
