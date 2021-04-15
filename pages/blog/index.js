import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

import { getAllPosts } from "../../lib/getPosts";

import ReactMarkdown from "react-markdown";

export default function Blog({ posts }) {
  return (
    <Layout activeTab="blog">
      <Head>
        <title>Blog | Josh Pullen</title>
        <meta
          name="description"
          content="Thoughts on education and technology."
        />
      </Head>
      {posts.map((post) => {
        return (
          <Link href={`/blog/${post.slug}`}>
            <a className="block px-5 py-4 mb-8 -mx-5 -my-4 rounded-lg hover:bg-gray-200">
              <time
                className="text-gray-700"
                dateTime={new Date(post.data.date).toISOString()}
              >
                {new Date(post.data.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mb-2 text-3xl font-bold leading-tight text-gray-900">
                {post.data.title}
              </h2>
              <div className="typography">
                <ReactMarkdown components={{ a: ({ children }) => children }}>
                  {`${post.excerpt}...`}
                </ReactMarkdown>
              </div>
            </a>
          </Link>
        );
      })}
      {/* <div className="flex items-center ContentArea">
        <span className="w-1/3 text-left">
          {false && (
            <Link
              className="text-indigo-700"
              to={
                data.allMdx.pageInfo.currentPage - 1 === 1
                  ? `/blog/`
                  : `/blog/page/${data.allMdx.pageInfo.currentPage - 1}/`
              }
            >
              ← Newer posts
            </Link>
          )}
        </span>
        <span className="w-1/3 text-sm text-center text-gray-600">
          Page {1} of {3}
        </span>
        <span className="w-1/3 text-right">
          {false && (
            <Link
              className="text-indigo-700"
              to={`/blog/page/${data.allMdx.pageInfo.currentPage + 1}/`}
            >
              Older posts →
            </Link>
          )}
        </span>
      </div> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}
