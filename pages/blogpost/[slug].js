import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}> 
      <main className={styles.main}>
        <h1>
          Title of the page {slug}
        </h1>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus eveniet ex ducimus omnis perferendis recusandae eius ullam saepe iure? Esse, nobis qui!</p>
        </div>
      </main>
    </div>
  )
}

export default slug