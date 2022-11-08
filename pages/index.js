import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ }) => {
  return (
    <Layout>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <h1>hello world</h1>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  // const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
  //   fetchAPI("/articles", { populate: "*" }),
  //   fetchAPI("/categories", { populate: "*" }),
  //   fetchAPI("/homepage", {
  //     populate: {
  //       hero: "*",
  //       seo: { populate: "*" },
  //     },
  //   }),
  // ])

  return {
    props: {

    },
    revalidate: 1,
  }
}

export default Home
