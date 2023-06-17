import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

import { getAllPosts } from "../../lib/getPosts";

import ReactMarkdown from "react-markdown";

export default function Blog({ posts }) {
  return (
    <Layout current="blog">
      <Head>
        <title>Blog | Josh Pullen</title>
        <meta
          name="description"
          content="Thoughts on education and technology."
        />
      </Head>
      <div className="-my-4">
        {posts.map((post) => {
          return (
            (<Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="block px-5 -mx-5 py-4 rounded-lg hover:bg-gray-200">

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
              <h2 className="mb-2 text-xl sm:text-3xl font-bold leading-tight text-gray-900">
                {post.data.title}
              </h2>
              <div className="prose sm:prose-lg prose-indigo">
                <ReactMarkdown
                  components={{
                    a: ({ children }) => children,
                    img: () => null,
                  }}
                >
                  {`${post.excerpt}...`}
                </ReactMarkdown>
              </div>

            </Link>)
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}
