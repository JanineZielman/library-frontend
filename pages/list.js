import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Image from "../components/image"
import InfiniteScroll from 'react-infinite-scroll-component';
import LazyLoad from 'react-lazyload';

const List = ({ objects, numberOfPosts }) => {
  const [posts, setPosts] = useState(objects);
  const [hasMore, setHasMore] = useState(true);

  const getMorePosts = async () => {
    const res = await fetchAPI(
      `/objects?pagination[start]=${posts.length}&populate=*`
    );
    const newPosts = await res.data;
    setPosts((posts) => [...posts, ...newPosts]);
  };

  useEffect(() => {
    setHasMore(numberOfPosts > posts.length ? true : false);
  }, [posts]);

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
            <div className="object fixed-list">
              <span className="small">Object id</span>
              <span className="small">Type</span>
              <span className="small">Designer</span>
              <span className="small">Year</span>
              <span className="small wide">Title</span>
              <span className="small wide">Language</span>
              <span className="small wide">Cover</span>
              <span className="small wide">Binding</span>
              <span className="small wide">Spine</span>
              <span className="small wide">Edge</span>
            </div>
            {posts.map((item, i) => {
              console.log(item)
              return(
                <>
                {item.attributes.cover_image?.data &&
                  <a className="object" key={`object${i}`} href={`object/${item.attributes.object_id}`}>
                   
                    <span className="small">{item.attributes.object_id}</span>
                    <span className="small">{item.attributes.type.data?.attributes.type}</span>
                    
                    <span className="small">
                      <div className={`color-dot ${item.attributes.colorcode1?.data?.attributes.slug}1`}></div>
                    </span>
                    
                    <span className="small flex">
                      <div className={`color-dot ${item.attributes.colorcode2?.data?.attributes.slug}2`}></div> 
                      {item.attributes.year}
                    </span>
                    <span className="small wide">{item.attributes.title}</span>
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
