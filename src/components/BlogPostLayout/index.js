import React from 'react'
import { Link, useCurrentRoute, useView } from 'react-navi'
import { MDXProvider } from '@mdx-js/react'

// import siteMetadata from '../../siteMetadata'
import ArticleMeta from '../ArticleMeta'
// import Bio from './Bio'
import styles from './BlogPostLayout.module.css'

function BlogPostLayout ({ blogRoot }) {
  const { title, data, url } = useCurrentRoute()
  const { connect, content, head } = useView()
  const { MDXComponent, readingTime } = content

  return connect(
    <>
      {head}
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            <Link href={url.pathname}>{title}</Link>
          </h1>
          <ArticleMeta
            blogRoot={blogRoot}
            meta={data}
            readingTime={readingTime}
          />
        </header>
        <MDXProvider components={{
          a: Link,
          wrapper: ({ children }) => <div className={styles.content}>{ children }</div>
        }}>
          <MDXComponent />
        </MDXProvider>
        <footer className={styles.footer}>
          { /* <Bio className={styles.bio} /> */ }
          <section className={styles.links}>
            {
              data.previousDetails &&
              <Link className={styles.previous} href={data.previousDetails.href}>
                ← {data.previousDetails.title}
              </Link>
            }
            {
              data.nextDetails &&
              <Link className={styles.next} href={data.nextDetails.href}>
                {data.nextDetails.title} →
              </Link>
            }
          </section>
        </footer>
      </article>
    </>
  )
}

export default BlogPostLayout
