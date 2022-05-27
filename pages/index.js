import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>morph</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="blog, blogs, morph blog, morpg blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          morph!
        </h1>
        <div className={styles.imageWrapper}>
          <Image className={styles.headerImg} src='/headerImg.jpg' alt='img' height={256} width={400} />
        </div>
        <p className={styles.description}>
          a noob trying to make his first blog website!
        </p>

        <div className={styles.blogs}>
          <h2 className={styles.h2}>Popular Blogs</h2>
          <div className="blogItem">
            <h3 className={styles.h3}>changing my career path</h3>
            <p>how i switched from mechanical engineering to software development</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className="blogItem">
            <h3 className={styles.h3}>changing my career path</h3>
            <p>how i switched from mechanical engineering to software development</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className="blogItem">
            <h3 className={styles.h3}>changing my career path</h3>
            <p>how i switched from mechanical engineering to software development</p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </main>
    </div>
  )
}
