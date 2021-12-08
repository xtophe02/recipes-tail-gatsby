export const setupTags = recipes => {
  const tags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.reduce((acc, val) => {
      if (!acc.hasOwnProperty(val)) {
        acc[val] = 1
      } else {
        acc[val] = Number(acc[val]) + 1
      }

      return acc
    }, tags)
  })

  return Object.entries(tags).sort((x, y) => x[0].localeCompare(y[0]))
}
