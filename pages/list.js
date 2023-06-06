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
  const [amountPosts, setAmountPosts] = useState(numberOfPosts)
  const router = useRouter();

  const [designer, setDesigner] = useState(router.query.designer ? router.query.designer : null);
  const [year, setYear] = useState(router.query.year ? router.query.year : null);
  const [type, setType] = useState(router.query.type ? router.query.type : null);
  const [search, setSearch] = useState(router.query.search ? router.query.search : null);

  const filterPosts = async () => {
    const res = await fetchAPI(
      `/objects?
      ${search ? `&filters[$or][0][object_id][$eq]=${search}` : ``}
      ${search ? `&filters[$or][1][title][$eq]=${search}` : ``}
      ${search ? `&filters[$or][2][year][$eq]=${search}` : ``}
      ${search ? `&filters[$or][3][type][slug][$eq]=${search}` : ``}
      ${designer ? `&filters[colorcode1][slug][$eq]=${designer}` : ``}
      ${year ? `&filters[colorcode2][slug][$eq]=${year}` : ``}
      ${type ? `&filters[colorcode2][slug][$eq]=${type}` : ``}
      &populate=*`
    );
    setAmountPosts(res.meta.pagination.total);
    console.log(res.meta.pagination.total)
    const newPosts = await res.data;
    setPosts(newPosts)
  };

  useEffect(() => {
    filterPosts();
  }, [router.query])

  const getMorePosts = async () => {
    const res = await fetchAPI(
      `/objects?
      &pagination[start]=${posts.length}
      ${search ? `&filters[$or][0][object_id][$eq]=${search}` : ``}
      ${search ? `&filters[$or][1][title][$eq]=${search}` : ``}
      ${search ? `&filters[$or][2][year][$eq]=${search}` : ``}
      ${search ? `&filters[$or][3][type][slug][$eq]=${search}` : ``}
      ${designer ? `&filters[colorcode1][slug][$eq]=${designer}` : ``}
      ${year ? `&filters[colorcode2][slug][$eq]=${year}` : ``}
      ${type ? `&filters[colorcode2][slug][$eq]=${type}` : ``}
      &populate=*`
    );
    const newPosts = await res.data;
    setPosts((posts) => [...posts, ...newPosts]);
  };

  useEffect(() => {
    setHasMore(amountPosts > posts.length ? true : false);
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
