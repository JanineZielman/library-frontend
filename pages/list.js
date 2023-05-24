import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Image from "../components/image"
import InfiniteScroll from 'react-infinite-scroll-component';
import LazyLoad from 'react-lazyload';
import { useRouter } from 'next/router';

const List = ({ objects, numberOfPosts }) => {
  const [posts, setPosts] = useState(objects);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  const getMorePosts = async () => {
    const res = await fetchAPI(
      `/objects?pagination[start]=${posts.length}&populate=*`
    );
    const newPosts = await res.data;
    setPosts((posts) => [...posts, ...newPosts]);
    filterObject();
  };

  useEffect(() => {
    setHasMore(numberOfPosts > posts.length ? true : false);
  }, [posts]);

  useEffect(() => {
    filterObject()
  }, [router.query])

  function filterObject(){
    if (router.query.year){
      const elements = document.querySelectorAll(`:not(.${router.query.year})`);
      elements.forEach((element) => {
        element.classList.add('non-active');
      });
    }
    if (router.query.designer){
      const elements = document.querySelectorAll(`:not(.${router.query.designer})`);
      elements.forEach((element) => {
        element.classList.add('non-active');
      });
    }
    if (router.query.type){
      const elements = document.querySelectorAll(`:not(.${router.query.type})`);
      elements.forEach((element) => {
        element.classList.add('non-active');
      });
    }
  }

  return (
    <Layout>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <div className="grid">
        
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePosts}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className="list">
            {posts.map((item, i) => {
              return(
                <>
                {item.attributes.cover_image?.data &&
                  <a className={`object ${item.attributes.colorcode1?.data?.attributes.slug}1 ${item.attributes.colorcode2?.data?.attributes.slug}2 ${item.attributes.type?.data?.attributes.slug}`} key={`object${i}`} href={`object/${item.attributes.object_id}`}>
                   
                    <div className="sticky">
                      {i == 0 &&
                      <div className="fixed-list">
                        <span className="small">Object id</span>
                        <span className="small">Type</span>
                        <span className="small">Designer</span>
                        <span className="small">Year</span>
                        <span className="small wide">Title</span>
                      </div>
                      }
                      <div className="content">
                        <span className="small">{item.attributes.object_id}</span>
                        <span className="small">{item.attributes.type.data?.attributes.type}</span>
                        
                        <span className="small color-dot-wrapper">
                          <div className={`color-dot ${item.attributes.colorcode1?.data?.attributes.slug}1`}></div>
                        </span>
                        
                        <span className="small flex color-dot-wrapper">
                          <div className={`color-dot ${item.attributes.colorcode2?.data?.attributes.slug}2`}></div> 
                          <span>{item.attributes.year}</span>
                        </span>
                        <span className="small wide">{item.attributes.title}</span>
                      </div>
                    </div>
                    
                    <div className="desktop-only">
                      {i == 0 &&
                        <div className="fixed-list">
                          <span className="small wide">Language</span>
                          <span className="small wide">Cover</span>
                          <span className="small wide">Binding</span>
                          <span className="small wide">Spine</span>
                          <span className="small wide">Edge</span>
                        </div>
                      }
                      
                      <div className="content">
                        <span className="small wide languages">
                          {item.attributes.languages.data.map((lang, i) =>{
                            return(
                              <span>{lang.attributes.language}</span>
                            )
                          })}
                        </span>
                        <span className="small wide covers">
                          {item.attributes.covers?.data?.map((cover, i) =>{
                            return(
                              <span>{cover.attributes.cover}</span>
                            )
                          })}
                        </span>
                        <span className="small wide bindings">
                          {item.attributes.bindings.data.map((binding, i) =>{
                            return(
                              <span>{binding.attributes.binding}</span>
                            )
                          })}
                        </span>
                        <span className="small wide spines">
                          {item.attributes.spine_types.data.map((spine, i) =>{
                            return(
                              <span>{spine.attributes.spine}</span>
                            )
                          })}
                        </span>
                        <span className="small wide edges">
                          {item.attributes.edges.data.map((edge, i) =>{
                            return(
                              <span>{edge.attributes.edge}</span>
                            )
                          })}
                        </span>
                      </div>
                    </div>
                  </a>
                }
                </>
              )
            })}
          </div>
        </InfiniteScroll>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {

  const [objectRes] = await Promise.all([
    fetchAPI("/objects?populate=*"),
  ])

  const numberOfPosts = objectRes.meta.pagination.total;

  return {
    props: {
      objects: objectRes.data,
      numberOfPosts: +numberOfPosts,
    }
  }
}

export default List
