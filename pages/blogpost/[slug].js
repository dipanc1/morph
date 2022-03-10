import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs'

const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c }
  }

  const [blog, setBlog] = useState(props.myBlog)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>
          {blog && blog.title}
        </h1>
        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
        }
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'future' } },
      { params: { slug: 'how-i-started' } },
      { params: { slug: 'coding-and-me' } },
      { params: { slug: 'how-it-is-going' } },
      { params: { slug: 'it-is-difficult' } },
      { params: { slug: 'meeting-love-of-myl-ife' } },
      { params: { slug: 'changing-my-feild' } },
    ],
    fallback: true
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf8')
  return {
    props: { myBlog: JSON.parse(myBlog) },
  }
}

export default Slug