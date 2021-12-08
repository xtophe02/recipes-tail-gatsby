import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import Seo from "../components/SEO"

export default function TagPage({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
  pageContext: { tag },
}) {
  return (
    <Layout>
      <Seo title={tag} />
      <section>
        <h2 className="capitalize">{tag}</h2>
        <RecipesList recipes={recipes} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeTag($tag: String) {
    allContentfulRecipe(filter: { content: { tags: { eq: $tag } } }) {
      nodes {
        title
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        prepTime
        cookTime
      }
    }
  }
`
