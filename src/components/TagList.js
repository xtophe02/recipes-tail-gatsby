import { Link } from "gatsby"
import React from "react"
import { setupTags } from "../utils/setupTags"

export default function TagList({ recipes }) {
  const tags = setupTags(recipes)

  return (
    <div className="grid w-full grid-cols-3 md:grid-cols-1">
      {tags.map((tag, i) => (
        <p
          className="block pl-4 font-light text-gray-500 capitalize cursor-pointer hover:text-blue-800"
          key={i}
        >
          <Link to={`/tags/${tag[0].trim().toLowerCase().replace(" ", "-")}`}>
            {tag[0]} ({tag[1]}){" "}
          </Link>
        </p>
      ))}
    </div>
  )
}
