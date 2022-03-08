import React, { useEffect, useState }  from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState()
  useEffect(() => {
    if (!router.isReady) return;
    // console.log('nlog.js')
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then(res => {
      return res.json();
    })
      .then((parsed) => {
        // console.log(parsed);
        setBlog(parsed);
      })
  }, [router.isReady,slug])
  
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

export default slug