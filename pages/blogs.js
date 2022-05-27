import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs'
import InfiniteScroll from 'react-infinite-scroll-component'

const Blogs = (props) => {
  // console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  const fetchMoreData = async () => {
    let d = await fetch(`/api/blogs?count=${count + 2}`)
    setCount(count + 2)
    let data = await d.json()
    setBlogs(data)
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Latest Blogs</h1>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length}
          next={fetchMoreData}
          hasMore={props.allCont !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((blog) => (
            <div className={styles.blogItem} key={blog.slug}>
              <Link href={`/blogpost/${blog.slug}`}>
                <h3 className={styles.blogItemh3}>{blog.title}</h3>
              </Link>
              <p className={styles.blogItemp}>{blog.metadesc}...</p>
              <Link href={`/blogpost/${blog.slug}`}>
                <button className={styles.btn}>
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </InfiniteScroll>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir(`blogdata`);
  let allCont = data.length
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    // console.log(item)
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    // console.log(myFile);
    allBlogs.push(JSON.parse(myFile));
  }

  return {
    props: { allBlogs, allCont },
  }
}

export default Blogs