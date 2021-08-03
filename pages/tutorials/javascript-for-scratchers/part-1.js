import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";

export default function Part1() {
  return (
    <Layout>
      <Head>
        <title>
          Part 1: What is JavaScript, and what can it do? | JavaScript for
          Scratchers | Josh Pullen
        </title>
      </Head>

      <article className="prose sm:prose-lg prose-indigo">
        <div>
          <Link href="/tutorials/javascript-for-scratchers">
            <a>JavaScript for Scratchers</a>
          </Link>
        </div>
        <h1>What is JavaScript, and what can it do?</h1>
        <p>
          JavaScript is a programming language, just like Scratch. So a lot of
          what you know about creating Scratch projects will also apply when
          writing JavaScript. However, there are also some <em>major</em>{" "}
          differences.
        </p>
        <p>
          <strong>You write JavaScript by typing, not dragging blocks.</strong>{" "}
          This makes it harder to get started, but once you get the hang of it,
          it's actually much faster.
        </p>
        <p>
          <strong>
            There isn't one community where all JavaScript projects are
            published.
          </strong>{" "}
          Scratch projects are always created on published on the Scratch
          website. But JavaScript code can be written anywhere, and run
          anywhere.
        </p>
        <p>
          <strong>There's no such thing as a JavaScript "project".</strong> On
          Scratch, your entire world fits inside a 480x360 pixel grid, and you
          can never break out of that box.
        </p>
        <p>
          JavaScript is different. Code written in JavaScript can be run in many
          places. The most common use of JavaScript is when you're building your
          own website.
        </p>
        <p>For example, this button is powered by JavaScript:</p>
        <div className="text-center">
          <button
            className="bg-indigo-700 text-white px-6 py-3 rounded"
            onClick={() => {
              alert("Hello!");
            }}
          >
            Click me!
          </button>
        </div>
        <p>
          When you click it, a message should pop up on your screen that says
          "Hello!". I created that using JavaScript.
        </p>
        <p>Here's what that code looks like:</p>
        <pre>
          <code>
            {`document.querySelector("button")\n  .addEventListener("click", () => {\n    alert("Hello!");\n  });`}
          </code>
        </pre>
        <p>
          Not quite as pretty as Scratch, right? But if you look closely, you
          might be able to make sense of it.
        </p>
        <ol>
          <li>
            First, we are searching on the web page for the button. That's what{" "}
            <code>document.querySelector("button")</code> does.
          </li>
          <li>
            Then we're listening for when that button is clicked using{" "}
            <code>.addEventListener("click", ...)</code>.
          </li>
          <li>
            Finally, when the button is clicked, we're showing the popup message
            with <code>alert("Hello!");</code>.
          </li>
        </ol>
        <p>
          Code like that exists all over the internet, and it powers almost
          everything interactive that you see on websites. And it's all
          JavaScript.
        </p>
      </article>
    </Layout>
  );
}