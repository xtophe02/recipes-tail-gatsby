import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function ErrorPage() {
  return (
    <Layout>
      <SEO title="Error" />
      <section className="flex flex-col items-center justify-center h-full">
        <div className="text-9xl">404</div>
        <div className="text-5xl capitalize">page not found</div>
      </section>
    </Layout>
  )
}
