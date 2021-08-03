import Head from "next/head";
import Layout from "../../../components/Layout";

export default function JavascriptForScatchers() {
  return (
    <Layout current="tutorials">
      <Head>
        <title>JavaScript for Scratchers | Josh Pullen</title>
      </Head>

      <article>
        <h1 className="mb-6 text-2xl sm:text-4xl font-bold leading-tight text-gray-900">
          JavaScript for Scratchers
        </h1>
        <div className="prose sm:prose-lg prose-indigo">
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
            Instead, I will guide you through the main differences between
            Scratch and JavaScript, and help you navigate the surprises you will
            likely encounter along the way.
          </p>
          <h2>Why use JavaScript?</h2>
          <p>
            First things first... What is JavaScript, and why might you use it
            instead of Scratch?
          </p>
          <p>
            Like Scratch, JavaScript is a programming language. But there are a
            lot of differences.
          </p>
          <p>
            <strong>
              You write JavaScript by typing, not dragging blocks.
            </strong>{" "}
            This makes it harder to get started, but once you get the hang of
            it, it's actually much faster.
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
            And unlike Scratch, in JavaScript there isn't really such a thing as
            a "project". JavaScript is something you use when you're making a
            website using the programming languages HTML and CSS. If you're
            creating a website with HTML and CSS but you want to make things
            interactive, you can sprinkle in a little JavaScript to do just
            that.
          </p>
          <p>
            For example, the website you're reading this on is mostly made with
            HTML and CSS, but this button is powered by JavaScript code:
          </p>
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
            "Hello!". That functionality was created using JavaScript.
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
              First, we are searching on the web page for the button. That's
              what <code>document.querySelector("button")</code> does.
            </li>
            <li>
              Then we're listening for when that button is clicked using{" "}
              <code>.addEventListener("click", ...)</code>.
            </li>
            <li>
              Finally, when the button is clicked, we're showing the popup
              message with <code>alert("Hello!");</code>.
            </li>
          </ol>
          <p>
            Code like that exists all over the internet, and it powers almost
            everything interactive that you see on websites. And it's all
            JavaScript.
          </p>
        </div>
      </article>
    </Layout>
  );
}
