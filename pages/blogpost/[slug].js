import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const slug = (props) => {

  const [blog, setBlog] = useState(props.myBlog)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>
          {blog && blog.title}
        </h1>
        <div>
          <p>{blog && blog.content}</p>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // const router = useRouter();
  const { slug } = context.query;
  // console.log('nlog.js')
  const data  = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json()
  return {
    props: { myBlog },
  }
}

export default slug