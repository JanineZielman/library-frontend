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
            {posts.map((item, i) => {
              console.log(item)
              return(
                <>
                {item.attributes.cover_image?.data &&
                  <a className="object" key={`object${i}`} href={`object/${item.attributes.object_id}`}>
                   
                    <span className="small">{item.attributes.type.data?.attributes.type}</span>
                    <span className="small">{item.attributes.object_id}</span>
                    <div className={`color-dot ${item.attributes.colorcode1?.data?.attributes.slug}1`}></div>
                    <div className={`color-dot ${item.attributes.colorcode2?.data?.attributes.slug}2`}></div>
                    <span className="small">{item.attributes.year}</span>
                    <span className="small">{item.attributes.title}</span>
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
