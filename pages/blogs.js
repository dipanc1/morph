import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import styles from '../styles/Blog.module.css'

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
            <p className={styles.blogItemp}>{blog.content.substr(0, 140)}...</p>
          </div>
        ))}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  let  data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json() 
  // .then(res => {
  //   return res.json();
  // })
  //   .then((parsed) => {
  //     // console.log(parsed);
  //     setBlogs(parsed);
  //   })
  // console.log(allBlogs)
  return {
    props: {allBlogs},
  }
}

export default Blogs