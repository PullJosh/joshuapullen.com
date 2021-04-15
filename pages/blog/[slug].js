import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Layout from "../../components/Layout";
import { getPostSlugs, getPostBySlug } from "../../lib/getPosts";

export default function BlogPost({ post }) {
  return (
    <Layout activeTab="blog">
      <Head>
        <title>{post.data.title} | Josh Pullen</title>
        <meta name="description" content={post.excerpt.split("\n").join("")} />
      </Head>

      <article className="typography mb-8">
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
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: (props) => <h3 {...props} />,
            h2: (props) => <h4 {...props} />,
            h3: (props) => <h5 {...props} />,
            h4: (props) => <h6 {...props} />,
            h5: (props) => <h6 {...props} />,
            h6: (props) => <h6 {...props} />,
          }}
        >
          {post.content}
        </ReactMarkdown>
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
