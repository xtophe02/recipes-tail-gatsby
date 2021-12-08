import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function RecipesPage() {
  return (
    <Layout>
      <SEO title="All Recipes" description="All Recipes" />
      <AllRecipes />
    </Layout>
  )
}
