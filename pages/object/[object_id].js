import React, {useEffect, useState} from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import Image from "../../components/image"
import InfiniteScroll from 'react-infinite-scroll-component';
import LazyLoad from 'react-lazyload';

const Object = ({ object }) => {
  console.log(object)
  return (
    <Layout>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <div className="object-page">
        <h1>{object.title}</h1>
        {object.subtitle &&<p className="small">{object.subtitle}</p>}
        <span className="small">Year: {object.year}</span>
        {object.cover_image.data &&
          <div className="cover-image">
            <Image image={object.cover_image.data}/>
          </div>
        }
      </div>
    </Layout>
  )
}

export async function getServerSideProps({params}) {
  
    const objectRes = await fetchAPI(`/objects?&filters[object_id][$eq]=${params.object_id}&populate=*`);
    
  
    return {
      props: { 
        object: objectRes.data[0]?.attributes
      },
    };
  }

export default Object
