exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query GetRecipeTag {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)
  data.allContentfulRecipe.nodes.forEach(node => {
    node.content.tags.forEach(tag => {
      actions.createPage({
        path: `/tags/${tag.trim().toLowerCase().replace(" ", "-")}`,
        component: require.resolve(`./src/templates/tag-template.js`),
        context: { tag },
      })
    })
  })
}
