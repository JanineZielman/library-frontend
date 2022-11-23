import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ objects }) => {
  console.log(objects)
  return (
    <Layout>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      {objects.map((item, i) => {
        return(
          <div className="object" key={`object${i}`}>
            <span>{item.attributes.object_id}</span>
            <h2>{item.attributes.title}</h2>
            {/* <p>{item.attributes.year?.data?.attributes.year}</p> */}
            {/* <p>{item.attributes.size?.data?.attributes.width}x{item.attributes.size.data.attributes.height}cm</p> */}
          </div>
        )
      })}
    </Layout>
  )
}

export async function getStaticProps() {

  const [objectRes] = await Promise.all([
    fetchAPI("/objects", { populate: "*" }),
  ])

  return {
    props: {
      objects: objectRes.data,
    },
    revalidate: 1,
  }
}

export default Home
