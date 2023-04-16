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

  function back(){
    history.back()
  }
  
  return (
    <Layout>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <div className="object-page">
        <div className="close" onClick={back}>x</div>
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
              {object.year &&
                <span className="small">
                  <div className="ident">Year:</div> 
                  <div className="info">{object.year}</div>
                </span>
              }
              {object.type &&
                <span className="small">
                  <div className="ident">Type:</div> 
                  <div className="info">{object.type.data.attributes.type}</div>
                </span>
              }
              {filtered?.map((role, i) => {
                return(
                  <>
                    <span className="small role">
                      <div className="ident">{role}:&nbsp;</div>
                      <div className="info">
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
                      </div>
                    </span>
                  </>
                )
              })}
              {object.languages.data[0] &&
                <span className="small">
                  <div className="ident">Language:&nbsp;</div>
                  <div className="info">
                    {object.languages?.data?.map((item, i) => {
                      return(
                        <span>{item.attributes.language}</span>
                      )
                    })}
                  </div>
                </span>
              }
              {object.bindings.data[0] &&
                <span className="small">
                  <div className="ident">Binding:&nbsp;</div>
                  <div className="info">
                    {object.bindings?.data?.map((item, i) => {
                      return(
                        <span>{item.attributes.binding}</span>
                      )
                    })}
                  </div>
                </span>
              }
              {object.edges.data[0] &&
                <span className="small">
                  <div className="ident">Edge:&nbsp;</div>
                  <div className="info">
                    {object.edges?.data?.map((item, i) => {
                      return(
                        <span>{item.attributes.edge}</span>
                      )
                    })}
                  </div>
                </span>
              }
              {object.spine_types.data[0] &&
                <span className="small">
                  <div className="ident">Spine:&nbsp;</div>
                  <div className="info">
                    {object.spine_types?.data?.map((item, i) => {
                      return(
                        <span>{item.attributes.spine}</span>
                      )
                    })}
                  </div>
                </span>
              }
              {object.insides.data[0] &&
                <span className="small">
                  <div className="ident">Inside:&nbsp;</div>
                  <div className="info">
                    {object.insides?.data?.map((item, i) => {
                      return(
                        <span>{item.attributes.inside}</span>
                      )
                    })}
                  </div>
                </span>
              }
              {object.covers.data[0] &&
                <span className="small">
                  <div className="ident">Cover:&nbsp;</div>
                  <div className="info">
                    {object.covers?.data?.map((item, i) => {
                      return(
                        <span>{item.attributes.cover}</span>
                      )
                    })}
                  </div>
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
            {object.back_cover.data && <div className='image back-cover'><Image image={object.back_cover.data}/></div>}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({params}) {
  
    const objectRes = await fetchAPI(`/objects?&filters[object_id][$eq]=${params.object_id}&populate[Relations][populate]=*&populate[cover_image][populate]=*&populate[back_cover][populate]=*&populate[type][populate]=*&populate[colophon][populate]=*&populate[content][populate]=*&populate[bindings][populate]=*&populate[covers][populate]=*&populate[edges][populate]=*&populate[spine_types][populate]=*&populate[insides][populate]=*&populate[languages][populate]=*&populate[colorcode1][populate]=*&populate[colorcode2][populate]=*&populate=*`);
    
  
    return {
      props: { 
        object: objectRes.data[0]?.attributes
      },
    };
  }

export default Object
