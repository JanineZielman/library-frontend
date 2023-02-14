import React, {useEffect, useState} from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import Image from "../../components/image"

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
        <div className="top-bar">
          <h1>{object.title}</h1>
          {object.subtitle &&<h3>{object.subtitle}</h3>}
          <div className="info-book">
            <div className={`color-dot ${object.colorcode1?.data?.attributes.slug}1`}></div>
            <div className={`color-dot ${object.colorcode2?.data?.attributes.slug}2`}></div>
            <span className="small">{object.object_id}</span>
          </div>
        </div>
        <div className="flex">
          <div className="main-info">
            <div className="small-info">
              {object.year &&<span className="small">Year: {object.year}</span>}
              {object.type &&<span className="small">Type: {object.type.data.attributes.type}</span>}
              {filtered?.map((role, i) => {
                return(
                  <>
                    <span className="small role">{role}:&nbsp;
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
              {object.languages.data[0] &&
                <span className="small">Language:&nbsp;
                  {object.languages?.data?.map((item, i) => {
                    return(
                      <span>{item.attributes.language}</span>
                    )
                  })}
                </span>
              }
              {object.bindings.data[0] &&
                <span className="small">Binding:&nbsp;
                  {object.bindings?.data?.map((item, i) => {
                    return(
                      <span>{item.attributes.binding}</span>
                    )
                  })}
                </span>
              }
              {object.edges.data[0] &&
                <span className="small">Edge:&nbsp;
                  {object.edges?.data?.map((item, i) => {
                    return(
                      <span>{item.attributes.edge}</span>
                    )
                  })}
                </span>
              }
              {object.spine_types.data[0] &&
                <span className="small">Spine:&nbsp;
                  {object.spine_types?.data?.map((item, i) => {
                    return(
                      <span>{item.attributes.spine}</span>
                    )
                  })}
                </span>
              }
              {object.insides.data[0] &&
                <span className="small">Inside:&nbsp;
                  {object.insides?.data?.map((item, i) => {
                    return(
                      <span>{item.attributes.inside}</span>
                    )
                  })}
                </span>
              }
              {object.covers.data[0] &&
                <span className="small">Cover:&nbsp;
                  {object.covers?.data?.map((item, i) => {
                    return(
                      <span>{item.attributes.cover}</span>
                    )
                  })}
                </span>
              }
            </div>
          </div>
          <div className="image-scroll">
            {object.cover_image.data &&
              <div className="image cover-image">
                <Image image={object.cover_image.data}/>
              </div>
            }
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
      </div>
    </Layout>
  )
}

export async function getServerSideProps({params}) {
  
    const objectRes = await fetchAPI(`/objects?&filters[object_id][$eq]=${params.object_id}&populate[Relations][populate]=*&populate[cover_image][populate]=*&populate[back_cover][populate]=*&populate[spines][populate]=*&populate[colophon][populate]=*&populate[content][populate]=*&populate[bindings][populate]=*&populate[covers][populate]=*&populate[edges][populate]=*&populate[spine_types][populate]=*&populate[insides][populate]=*&populate[languages][populate]=*&populate[colorcode1][populate]=*&populate[colorcode2][populate]=*&populate=*`);
    
  
    return {
      props: { 
        object: objectRes.data[0]?.attributes
      },
    };
  }

export default Object
