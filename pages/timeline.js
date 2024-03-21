import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Image from "../components/image"
import InfiniteScroll from 'react-infinite-scroll-component';
import LazyLoad from 'react-lazyload';
import { useRouter } from 'next/router';

const Timeline = ({ objects, numberOfPosts, languages, covers, binding, inside, edge, spine }) => {
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
      ${type ? `&filters[type][slug][$eq]=${type}` : ``}
      &populate=*&sort=createdAt:desc`
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
      ${type ? `&filters[type][slug][$eq]=${type}` : ``}
      &populate=*&sort=createdAt:desc`
    );
    const newPosts = await res.data;
    setPosts((posts) => [...posts, ...newPosts]);
  };

  useEffect(() => {
    setHasMore(amountPosts > posts.length ? true : false);
  }, [posts]);

  return (
    <Layout languages={languages} covers={covers} binding={binding} inside={inside} edge={edge} spine={spine}>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <div className="grid">
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePosts}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className="timeline-item">
            {posts.map((item, i) => {
              return(
                <>
                {item.attributes.cover_image?.data &&
                  <a className={`object ${item.attributes.colorcode1?.data?.attributes.slug}1 ${item.attributes.colorcode2?.data?.attributes.slug}2 ${item.attributes.type?.data?.attributes.slug}`} key={`object${i}`} href={`object/${item.attributes.object_id}`}>
                    <LazyLoad>
                      <div className="info-book">
                        <div className={`color-dot ${item.attributes.colorcode1?.data?.attributes.slug}1`}></div>
                        <div className={`color-dot ${item.attributes.colorcode2?.data?.attributes.slug}2`}></div>
                        <span className="small">{item.attributes.object_id}</span>
                      </div>
                      <div className="image-wrapper">
                        <Image image={item.attributes.cover_image.data} quality={10}/>
                        {item.attributes.content?.data?.map((elem, i) =>{
                            return(
                              <Image image={elem} quality={10}/>
                            )
                          })}
                          {item.attributes.colophon?.data?.map((elem, i) =>{
                            return(
                              <Image image={elem} quality={10}/>
                            )
                          })}
                        <Image image={item.attributes.back_cover.data} quality={10}/>
                      </div>
                      <div class="all-info">
                        {item.attributes.title &&<div><span className="small">Title: {item.attributes.title}</span></div>}
                        {item.attributes.year &&<div><span className="small">Year: {item.attributes.year}</span></div>}
                        {item.attributes.type?.data?.attributes.type && <div><span className="small">Type: {item.attributes.type.data.attributes.type}</span></div>}
                        {item.attributes.languages.data.length > 0 && <div><span className="small wide">Languages: {item.attributes.languages.data.map((lang, i) =>{
                            return(
                              <span>{lang.attributes.language}</span>
                            )
                          })}
                        </span></div>}
                        {item.attributes.covers.data.length > 0 &&<div><span className="small wide">Cover: {item.attributes.covers?.data?.map((cover, i) =>{
                            return(
                              <span>{cover.attributes.cover}</span>
                            )
                          })}
                        </span></div>}
                        {item.attributes.bindings.data.length > 0 &&<div><span className="small wide">Binding: {item.attributes.bindings.data.map((binding, i) =>{
                            return(
                              <span>{binding.attributes.binding}</span>
                            )
                          })}
                        </span></div>}
                        {item.attributes.spine_types.data.length > 0 &&<div><span className="small wide">Spine: {item.attributes.spine_types.data.map((spine, i) =>{
                            return(
                              <span>{spine.attributes.spine}</span>
                            )
                          })}
                        </span></div>}
                        {item.attributes.edges.data.length > 0 &&<div><span className="small wide">Edge: {item.attributes.edges.data.map((edge, i) =>{
                            return(
                              <span>{edge.attributes.edge}</span>
                            )
                          })}
                        </span></div>}
                      </div>
                    </LazyLoad>
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

  const [objectRes, languagesRes, coversRes, bindingRes, spineRes, insideRes, edgeRes] = await Promise.all([
    fetchAPI("/objects?populate=*&sort=createdAt:desc"),
    fetchAPI("/languages?populate=*"),
    fetchAPI("/covers?populate=*"),
    fetchAPI("/bindings?populate=*"),
    fetchAPI("/spines?populate=*"),
    fetchAPI("/insides?populate=*"),
    fetchAPI("/edges?populate=*"),
  ])

  const numberOfPosts = objectRes.meta.pagination.total;

  return {
    props: {
      objects: objectRes.data,
      languages: languagesRes.data,
      covers: coversRes.data,
      binding: bindingRes.data,
      spine: spineRes.data,
      inside: insideRes.data,
      edge: edgeRes.data,
      numberOfPosts: +numberOfPosts,
    }
  }
}

export default Timeline
