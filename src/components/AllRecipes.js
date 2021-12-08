import React from "react"

import RecipesList from "./RecipesList"
import TagList from "./TagList"
import { graphql, useStaticQuery } from "gatsby"

export default function AllRecipes() {
  const {
    data: { nodes },
  } = useStaticQuery(query)

  return (
    <>
      <h2>All Recipes</h2>
      <section className="flex flex-col md:flex-row">
        <div className="py-4 md:w-40 md:py-0">
          <TagList recipes={nodes} />
        </div>

        <div className="flex-1">
          <RecipesList recipes={nodes} />
        </div>
      </section>
    </>
  )
}

const query = graphql`
  {
    data: allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        title
        prepTime
        cookTime
        id
        featured
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        content {
          tags
        }
      }
    }
  }
`
