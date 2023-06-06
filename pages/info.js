import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Image from "../components/image"
import ReactMarkdown from "react-markdown"


const List = ({ global }) => {  
  console.log(global)
  return (
    <Layout>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <div className="landing">
        <div className="description">
          <span className="small">
            <ReactMarkdown 
              children= {global.attributes.description}
            />
          </span>
        </div>
        <img className="hug" src="hug.svg"/>
      </div>
      <span className="small footer-text">
        The New Library is a project from Graphic Design department of ArtEZ Arnhem. 
        Initiated by Joris Maltha and Remco van Bladel, designed by Doğa Deniz Gönüllü, Polina Titova and Janine Zielman, coded by Janine Zielman. 
        Typefaces: Avara and Jet Brains Mono.
      </span>
    </Layout>
  )
}

export async function getServerSideProps() {

  const [globalRes] = await Promise.all([
    fetchAPI("/global?populate=*"),
  ])


  return {
    props: {
      global: globalRes.data,
    }
  }
}

export default List
