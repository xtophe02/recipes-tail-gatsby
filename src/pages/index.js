import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="This is a home page with all recipes" />
      <section>
        <h2>Home</h2>
        <div className="relative">
          <StaticImage
            src="../images/hero_food.jpg"
            alt="A dinosaur"
            // className="w-full h-full "
            // layout="fullWidth"
            className="rounded-md h-80"
            placeholder="blurred"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>{" "}
          <div className="absolute top-0 left-0 w-full text-center ">
            <h1 className="pt-12 text-white capitalize">simple recipes</h1>
            <h3 className="font-medium text-white capitalize">
              no fluff, just recipes
            </h3>
          </div>
        </div>
        <div className="mt-4">
          <AllRecipes />
        </div>
      </section>
    </Layout>
  )
}
