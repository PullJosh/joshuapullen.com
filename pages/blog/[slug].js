import Head from "next/head";
import ReactMarkdown, { ReactMarkdownOptions } from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import markdownToTxt from "markdown-to-txt";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Layout from "../../components/Layout";
import { getPostSlugs, getPostBySlug } from "../../lib/getPosts";

/** @type {ReactMarkdownOptions["components"]} */
const components = {
  h1: function H2({ children, id }) {
    return <h2 id={id}>{children}</h2>;
  },
  h2: function H3({ children, id }) {
    return <h3 id={id}>{children}</h3>;
  },
  h3: function H4({ children, id }) {
    return <h4 id={id}>{children}</h4>;
  },
  h4: function H5({ children, id }) {
    return <h5 id={id}>{children}</h5>;
  },
  h5: function H6({ children, id }) {
    return <h6 id={id}>{children}</h6>;
  },
  h6: function H6({ children, id }) {
    return <h6 id={id}>{children}</h6>;
  },
  pre: function Pre({ children }) {
    return <>{children}</>;
  },
  code: function Code({ children, inline, node, className, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter style={theme} language={match[1]} {...props}>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default function BlogPost({ slug, description, post }) {
  return (
    <Layout current="blog">
      <Head>
        <title>{post.data.title} | Josh Pullen</title>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={post.data.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://joshuapullen.com/blog/${slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="PullJosh" />
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
          <ReactMarkdown
            rehypePlugins={[rehypeRaw, rehypeSlug]}
            components={components}
          >
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
  const description = markdownToTxt(post.excerpt.split("\n").join(""));

  return {
    props: { slug: params.slug, description, post },
  };
}
