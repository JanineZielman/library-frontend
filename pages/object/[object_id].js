import React, {useEffect, useState} from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import Image from "../../components/image"
import InfiniteScroll from 'react-infinite-scroll-component';
import LazyLoad from 'react-lazyload';

const Object = ({ object }) => {
  console.log(object)
  let relations = [];
  for (let i = 0; i < object.Relations.length; i++) { 
    relations.push(object.Relations[i].person_role.data.attributes.role)
  }
  let filtered = [...new Set(relations)]
  return (
    <Layout>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <div className="object-page">
        <div className="flex">
          <div className="main-info">
            <span className="small">{object.object_id}</span>
            <h1>{object.title}</h1>
            {object.subtitle &&<h3>{object.subtitle}</h3>}
            <div className="small-info">
              {object.year &&<span className="small">Year: {object.year}</span>}
              {object.type &&<span className="small">Type: {object.type.data.attributes.type}</span>}
              {filtered?.map((role, i) => {
                return(
                  <>
                    <span className="small role">{role}:
                      {object.Relations.filter(rel => rel.person_role.data.attributes.role === role).map((item, i) => {
                        return(
                          <>
                            {item.first_name &&
                              <span> {item.first_name} {item.last_name}</span>
                            }
                            {item.organisation &&
                              <span>{item.organisation}</span>
                            }
                          </>
                        )
                      })}
                    </span>
                  </>
                )
              })}
            </div>
          </div>
          <div className="image">
            {object.cover_image.data &&
              <div className="cover-image">
                <Image image={object.cover_image.data}/>
              </div>
            }
          </div>
        </div>
        <div className="scroll">
          {object.content?.data?.map((item, i) =>{
            return(
              <div className='image'>
                <Image image={item}/>
              </div>
            )
          })}
          {object.colophon?.data?.map((item, i) =>{
            return(
              <div className='image'>
                <Image image={item}/>
              </div>
            )
          })}
          {object.spines?.data?.map((item, i) =>{
            return(
              <div className='image'>
                <Image image={item}/>
              </div>
            )
          })}
          {object.back_cover.data && <div className='image back-cover'><Image image={object.back_cover.data}/></div>}
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({params}) {
  
    const objectRes = await fetchAPI(`/objects?&filters[object_id][$eq]=${params.object_id}&populate[Relations][populate]=*&populate[cover_image][populate]=*&populate[back_cover][populate]=*&populate[spines][populate]=*&populate[colophon][populate]=*&populate[content][populate]=*&populate=*`);
    
  
    return {
      props: { 
        object: objectRes.data[0]?.attributes
      },
    };
  }

export default Object
