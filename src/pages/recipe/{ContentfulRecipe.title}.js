import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../../components/Layout"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import SEO from "../../components/SEO"

export default function RecipePage({ data: { contentfulRecipe: recipe } }) {
  return (
    <Layout>
      <SEO title={recipe.title} description={recipe.description.description} />
      <section>
        <div className="grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-2 md:space-x-12">
          <GatsbyImage
            image={getImage(recipe.image)}
            alt={recipe.title}
            className="rounded"
          />
          <div className="flex flex-col justify-around">
            <h2 className="my-0">{recipe.title}</h2>
            <p className="text-xl font-light">
              {recipe.description.description}
            </p>
            <div className="grid grid-cols-3 py-6 md:py-0">
              <div className="flex flex-col items-center">
                <BsClock size={30} className="mb-3 text-blue-500" />
                <span>Prep Time</span>
                <span className="font-light">{recipe.prepTime}min</span>
              </div>
              <div className="flex flex-col items-center">
                <BsClockHistory size={30} className="mb-3 text-red-500" />
                <span>Cook Time</span>
                <span className="font-light">{recipe.cookTime}</span>
              </div>
              <div className="flex flex-col items-center">
                <BsPeople size={30} className="mb-3 text-green-500" />
                <span>Servings</span>
                <span className="font-light">{recipe.servings}</span>
              </div>
            </div>
            <div className="flex">
              Tags:
              {recipe.content.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 mx-2 font-light text-white capitalize transition bg-indigo-500 rounded hover:bg-indigo-900"
                >
                  {" "}
                  <Link to={`/tag/${tag}`}>{tag}</Link>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 pt-6 md:grid-cols-3 md:space-x-8">
          <div className="flex flex-col col-span-2">
            <h4 className="py-3 text-2xl text-indigo-500 capitalize">
              Instructions
            </h4>
            {recipe.content.instructions.map((instruction, i) => (
              <div key={i + 1000} className="pb-4">
                <span className="text-indigo-800 uppercase">step {i + 1}</span>
                <p className="font-light tracking-wider text-justify">
                  {instruction}
                </p>
                <hr />
              </div>
            ))}
          </div>
          <div className="row-start-1 pb-6 md:col-start-3">
            <h4 className="py-3 text-2xl text-indigo-500 capitalize ">
              Ingredients
            </h4>
            <ul className="list-disc list-inside">
              {recipe.content.ingredients.map((instruction, i) => (
                <li
                  key={i}
                  className="font-light tracking-wider md:py-1 md:text-lg "
                >
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query getSingleRecipe($id: String) {
    contentfulRecipe(id: { eq: $id }) {
      cookTime
      prepTime
      title
      servings
      description {
        description
      }
      content {
        instructions
        ingredients
        tags
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`
