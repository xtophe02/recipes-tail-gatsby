import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

export default function AboutPage({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) {
  return (
    <Layout>
      <SEO
        title="About"
        description="This is a about page were you can find out what's about"
      />
      <h2>About Page</h2>

      <section className="grid grid-cols-1 space-y-7 sm:grid-cols-2 sm:space-x-7 sm:space-y-0">
        <div>
          <p className="py-2 text-xl font-medium">
            I'm baby farm-to-table next level raclette pabst poutine enamel pin.
          </p>
          <p className="py-2 text-xl font-medium">
            Mustache tousled hoodie squid.
          </p>
          <p className="py-2 text-xl font-medium">
            Food truck authentic semiotics farm-to-table, church-key viral
            try-hard drinking vinegar readymade meggings poke.{" "}
          </p>
        </div>
        <div className="">
          <StaticImage
            src="../images/about_img.jpg"
            alt="About Image"
            // className="w-full h-full "
            // layout="fullWidth"

            className="h-full bg-gray-500 rounded-md "
            // placeholder="blurred"
          />
        </div>
      </section>
      <div className="my-12">
        <h2 className="text-center capitalize">Look at this awesomesouce!</h2>
        <RecipesList recipes={recipes} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        prepTime
        cookTime
        id
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`
