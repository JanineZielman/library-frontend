import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Image from "../components/image"

const Home = ({ objects }) => {
  // console.log(objects)
  return (
    <Layout>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <div className="grid">
        {objects.map((item, i) => {
          return(
            <div className="object" key={`object${i}`}>
              <span>{item.attributes.object_id}</span>
              <h2>{item.attributes.title}</h2>
              <div className="cover-image">
                {item.attributes.cover_image.data &&<Image image={item.attributes.cover_image}/>}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {

  const [objectRes] = await Promise.all([
    fetchAPI("/objects?pagination[limit]=100&populate=*"),
  ])

  return {
    props: {
      objects: objectRes.data,
    }
  }
}

export default Home
