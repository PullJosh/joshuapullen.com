import Head from "next/head";
import Link from "next/link";
import Layout from "../../../../components/Layout";
import WebpageEditor from "../../../../components/WebpageEditor";

export default function Part1() {
  return (
    <Layout>
      <Head>
        <title>
          HTML in 10 minutes | Start with HTML and CSS | JavaScript for
          Scratchers | Josh Pullen
        </title>
      </Head>

      <article>
        <div className="prose sm:prose-lg prose-indigo">
          <div>
            <Link href="/tutorials/javascript-for-scratchers">
              <a>JavaScript for Scratchers</a>
            </Link>{" "}
            &bull;{" "}
            <Link href="/tutorials/javascript-for-scratchers/part-2">
              <a>Part 2: Start with HTML and CSS</a>
            </Link>
          </div>
          <h1>HTML in 10 minutes</h1>
          <p>Let's do the fastest introduction to HTML of all time.</p>
          <p>Here's some HTML code, and a preview of its output:</p>
        </div>
        <div className="my-4 w-break-out">
          <div className="w-full max-w-5xl px-8 mx-auto">
            <WebpageEditor
              html={`<h1>Hello, world!</h1>
<p>This is my first HTML page.</p>
<p>I can create headers using the elements h1 to h6.</p>

<h2>Pretty cool, right?</h2>
<p>I sure think so.</p>`}
            />
          </div>
        </div>
        <div className="prose sm:prose-lg prose-indigo">
          <p>
            Try editing the HTML and watch how the output changes. You should
            notice a few things:
          </p>
          <ul>
            <li>
              Changing the text in the HTML changes the text on the page, just
              as you might expect.
            </li>
            <li>
              The HTML is split up into <em>elements</em>. Each element starts
              with something like <code>&lt;h1&gt;</code> or{" "}
              <code>&lt;p&gt;</code> and ends with a corresponding tag like{" "}
              <code>&lt;/h1&gt;</code> or <code>&lt;/p&gt;</code>. These opening
              an closing tags almost always come in matching pairs.
            </li>
            <li>
              Each element does something different. <code>h1</code> stands for
              header 1, and it makes a big header on the page. There are also
              headers <code>h2</code> through <code>h6</code> if you need
              different sizes. <code>p</code> is used for making paragraphs.
            </li>
          </ul>
          <p>
            You really want to make sure you're pairing up your opening and
            closing tags correctly. If you get it wrong, the computer will try
            to guess what you meant, but it won't always do a very good job. So
            save yourself the pain and make it a priority to pair them up
            properly.
          </p>
          <p>
            Alright... Let me show you another HTML example. This is mostly just
            more of the same, but here I'm also showing off how you can have
            elements inside of other elements.
          </p>
        </div>
        <div className="my-4 w-break-out">
          <div className="w-full max-w-5xl px-8 mx-auto">
            <WebpageEditor
              html={`<h1>Elements within elements</h1>
<p>I can create <strong>bold</strong> text and <em>italic</em> text inside of this paragraph.</p>

<h2>Lists</h2>
<p>I can also make lists by putting list items inside of a <code>ul</code> element:</p>
<ul>
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
</ul>
<p>(Try using <code>ol</code> instead of <code>ul</code> for a fun surprise. Make sure you change both the opening and closing tags!)</p>`}
            />
          </div>
        </div>
        <div className="prose sm:prose-lg prose-indigo">
          <p>
            Putting elements inside of other elements is <em>very</em> common in
            HTML.
          </p>
          <AsideBox>
            <div>
              We are going through this <em>really</em> fast, and I don't expect
              you to learn everything all at once. Take your time, experiment,
              and use Google when necessary. You're in charge of your own
              learning here, so do what feels best for you.
            </div>
          </AsideBox>
          <AsideBox>
            <div>
              If your goal is to make websites, then really understanding HTML
              is crucial. But if you're just trying to make games, don't sweat
              it. Just a tiny bit of HTML is all you need. (Most of the hard
              work there happens in JavaScript.)
            </div>
          </AsideBox>
          <p>
            Okay, one more big idea and then that's enough for now. Some
            elements require extra information. For example, if you want to
            create a link to another website, you need to specify which url to
            go to.
          </p>
        </div>
      </article>
    </Layout>
  );
}

function AsideBox({ title = "Side note", children }) {
  return (
    <div className="bg-gray-200 rounded px-5 py-4 my-4 text-base">
      <div className="space-y-2">
        <div className="font-bold text-gray-600 uppercase">{title}</div>
        {children}
      </div>
    </div>
  );
}
