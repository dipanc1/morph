import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs'

const Blogs = (props) => {
  console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {

  // }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blog) => (
          <div className={styles.blogItem} key={blog.slug}>
            <Link href={`/blogpost/${blog.slug}`}>
              <h3 className={styles.blogItemh3}>{blog.title}</h3>
            </Link>
            <p className={styles.blogItemp}>{blog.metadesc}...</p>
          </div>
        ))}
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir(`blogdata`);
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    // console.log(item)
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    // console.log(myFile);
    allBlogs.push(JSON.parse(myFile));
  }

  return {
    props: { allBlogs },
  }
}

export default Blogs