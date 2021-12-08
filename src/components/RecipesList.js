import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function RecipesList({ recipes = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {recipes.map(recipe => (
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.title
            .trim()
            .toLowerCase()
            .replaceAll(" ", "-")}`}
        >
          <div className="m-3 rounded shadow ">
            <GatsbyImage
              image={getImage(recipe.image)}
              className="w-full rounded h-72"
              alt={recipe.title}
            />
            <div className="p-4">
              <h3>{recipe.title}</h3>
              <p className="font-light">
                Prep:{recipe.prepTime}min | Cook:{recipe.cookTime}min{" "}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
