import Link from 'next/link'
import React from 'react'
import styles from '../styles/Blog.module.css'

const Blogs = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogItem}>
          <Link href={'/blogpost/changing-my-career'}>
            <h3>changing my career path</h3>
          </Link>
            <p>how i switched from mechanical engineering to software development</p>
        </div>
        <div className={styles.blogItem}>
          <h3>changing my career path</h3>
          <p>how i switched from mechanical engineering to software development</p>
        </div>
        <div className={styles.blogItem}>
          <h3>changing my career path</h3>
          <p>how i switched from mechanical engineering to software development</p>
        </div>
        <div className={styles.blogItem}>
          <h3>changing my career path</h3>
          <p>how i switched from mechanical engineering to software development</p>
        </div>
      </main>
    </div>
  )
}

export default Blogs