import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Image from "../components/image"
import InfiniteScroll from 'react-infinite-scroll-component';
import LazyLoad from 'react-lazyload';
import { useRouter } from 'next/router';

const Home = ({ objects, numberOfPosts }) => {
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
  

  console.log(posts)

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
                    </div>
                  </LazyLoad>
                </a>
               
              }
              </>
            )
          })}
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

export default Home
