import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { setupTags } from "../utils/setupTags"
import SEO from "../components/SEO"

export default function TagsPage({
  data: {
    allContentfulRecipe: { nodes },
  },
}) {
  const tags = setupTags(nodes)

  return (
    <Layout>
      <SEO title="tags" description="All Recipes filtered" />
      <div className="grid max-w-5xl grid-cols-1 mx-auto md:grid-cols-3">
        {tags.map((tag, i) => (
          <div key={i} className="m-3 bg-indigo-500 rounded-lg">
            <Link to={`/tags/${tag[0]}`}>
              <div className="p-3 text-center text-white">
                <h4 className="text-xl font-medium capitalize">{tag[0]}</h4>
                <p>{tag[1]} recipe</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
