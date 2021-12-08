import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="where you can take contact with the site owner"
      />
      <section className="grid grid-cols-1 gap-8 md:mt-32 sm:grid-cols-2">
        <div className="">
          <h1 className="capitalize">Want to get in touch?</h1>
          <p>
            Tattooed semiotics lumbersexual tofu typewriter. Cliche tumeric
            meggings affogato.
          </p>
          <p>
            90's hammock butcher lomo, roof party selvage keytar mixtape bitters
            8-bit tbh PBR&B tote bag.
          </p>
          <p>
            Taxidermy kitsch actually, beard succulents 3 wolf moon banh mi
            offal hashtag church-key kinfolk.
          </p>
        </div>
        <form
          className="flex flex-col justify-center"
          action="https://formspree.io/f/meqnqorp"
          method="POST"
        >
          <label className="block mb-4">
            <span className="text-gray-700">Your Name</span>
            <input
              type="text"
              name="name"
              required={true}
              className="block w-full px-4 py-3 rounded form-input"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Your Email</span>
            <input
              type="email"
              name="email"
              required={true}
              className="block w-full px-4 py-3 rounded form-input"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Message</span>
            <textarea
              name="message"
              required={true}
              rows="3"
              className="block w-full rounded form-textarea"
            ></textarea>
          </label>
          <button
            type="sumit"
            className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
          >
            Submit
          </button>
        </form>
      </section>
    </Layout>
  )
}
