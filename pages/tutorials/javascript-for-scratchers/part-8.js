import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";

export default function Part8() {
  return (
    <Layout>
      <Head>
        <title>
          Part 8: Making games with &lt;canvas&gt; | JavaScript for Scratchers |
          Josh Pullen
        </title>
      </Head>

      <article className="prose sm:prose-lg prose-indigo">
        <div>
          <Link href="/tutorials/javascript-for-scratchers">
            <a>JavaScript for Scratchers</a>
          </Link>
        </div>
        <h1>Making games with &lt;canvas&gt;</h1>
        <p>
          Alright, now that you have the basics of JavaScript down, let's talk
          about making games.
        </p>
        <p>
          So far we've been adding interactivity to HTML elements on the page.
          That's cool, but none of those elements are really suitable for
          game-making. That's where <code>&lt;canvas&gt;</code> comes in.
        </p>
        <p>
          The HTML canvas element is a rectangular stage where you can draw
          anything you want.
        </p>
      </article>
    </Layout>
  );
}
