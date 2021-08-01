import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Layout from "../../components/Layout";
import { getPostSlugs, getPostBySlug } from "../../lib/getPosts";

const components = {
  h1: ({ children }) => <h2>{children}</h2>,
  h2: ({ children }) => <h3>{children}</h3>,
  h3: ({ children }) => <h4>{children}</h4>,
  h4: ({ children }) => <h5>{children}</h5>,
  h5: ({ children }) => <h6>{children}</h6>,
  h6: ({ children }) => <h6>{children}</h6>,
};

export default function BlogPost({ post }) {
  return (
    <Layout current="blog">
      <Head>
        <title>{post.data.title} | Josh Pullen</title>
        <meta name="description" content={post.excerpt.split("\n").join("")} />
      </Head>

      <article>
        <time
          className="text-gray-700 sm:text-xl"
          dateTime={new Date(post.data.date).toISOString()}
        >
          {new Date(post.data.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="mb-6 text-2xl sm:text-4xl font-bold leading-tight text-gray-900">
          {post.data.title}
        </h1>
        <div className="prose sm:prose-lg prose-indigo">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: getPostSlugs().map((slug) => `/blog/${slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  return {
    props: { post },
  };
}
