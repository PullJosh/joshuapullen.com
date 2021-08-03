import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";

export default function JavascriptForScatchers() {
  return (
    <Layout current="tutorials">
      <Head>
        <title>JavaScript for Scratchers | Josh Pullen</title>
      </Head>

      <article className="prose sm:prose-lg prose-indigo">
        <h1>JavaScript for Scratchers</h1>
        <p>
          If you already know{" "}
          <a href="https://scratch.mit.edu/" target="_blank" rel="noreferrer">
            Scratch
          </a>
          , but want to learn JavaScript, this is the tutorial for you.
        </p>
        <p>
          In this tutorial, I will <em>not</em> be teaching you all the
          specifics of the JavaScript language. There's way too much to learn,
          and it would be impossible for me to cover it all.
        </p>
        <p>
          Instead, I will give a big-picture overview of how JavaScript is
          different from Scratch. We'll talk about what JavaScript is, how to
          write it, and some of the extra features it has compared to Scratch.
        </p>
        <p>
          Hopefully after this quick primer, you'll be well-equipped to venture
          out on your own and figure out the rest for yourself.
        </p>

        <h2>Contents</h2>
        <ul>
          <li>
            <strong>Part 1:</strong>{" "}
            <Link href="/tutorials/javascript-for-scratchers/part-1">
              <a>What is JavaScript, and what can it do?</a>
            </Link>
          </li>
          <li>
            <strong>Part 2:</strong>{" "}
            <Link href="/tutorials/javascript-for-scratchers/part-2">
              <a>Start with HTML and CSS</a>
            </Link>
            <ul>
              <li>
                <Link href="/tutorials/javascript-for-scratchers/part-2/html-in-10-minutes">
                  <a>HTML in 10 minutes</a>
                </Link>
              </li>
              <li>
                <Link href="/tutorials/javascript-for-scratchers/part-2/css-in-10-minutes">
                  <a>CSS in 10 minutes</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </article>
    </Layout>
  );
}
