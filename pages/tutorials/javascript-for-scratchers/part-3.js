import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";

export default function Part3() {
  return (
    <Layout>
      <Head>
        <title>
          Part 3: Where to write JavaScript code | JavaScript for Scratchers |
          Josh Pullen
        </title>
      </Head>

      <article className="prose sm:prose-lg prose-indigo">
        <div>
          <Link href="/tutorials/javascript-for-scratchers">
            <a>JavaScript for Scratchers</a>
          </Link>
        </div>
        <h1>Where to write JavaScript code</h1>
        <p>
          Getting started with Scratch is super easy. Just go to the Scratch
          website and click create! There's an entire Scratch project editor,
          and publishing your project just takes the click of a button.
        </p>
        <p>It's not quite so simple with JavaScript.</p>
        <p>
          The main reason for the complexity is that, as mentioned before, there
          isn't just one place to share JavaScript projects. Instead, JavaScript
          can run within any website on the internet. So publishing JavaScript
          code is necessarily connected to publishing websites, which can be a
          complicated process.
        </p>
        <h2>Online JavaScript project editors</h2>
        <p>
          Fortunately, some wonderful people have created websites which allow
          you to create and publish HTML, CSS, and JavaScript projects, just
          like you're used to with Scratch.
        </p>
        <p>
          I personally recommend <a href="https://codepen.io/">Codepen</a>. It
          is free, pleasant to use, and has the best community of all the online
          editors. (You might have noticed the "open on Codepen" button in the
          built-in code editor I'm using for these posts.)
        </p>
        <p>
          But if <a href="https://codepen.io/">Codepen</a> isn't for you, there
          are a bunch of other options out there:
        </p>
        <ul>
          <li>
            <a href="https://codepen.io/">Glitch</a> seems quite nice, and is
            clearly reminiscent of Scratch, but I haven't used it much myself
          </li>
          <li>
            <a href="https://codepen.io/">JSFiddle</a> is simple and easy-to-use
          </li>
          <li>
            <a href="https://codepen.io/">Codesandbox</a> has more powerful
            features, in case you ever need them
          </li>
          <li>
            <a href="https://codepen.io/">Repl.it</a> works with a bunch of
            different programming languages, not just JavaScript
          </li>
        </ul>

        <h2>Writing HTML/CSS/JavaScript code on your own computer</h2>
        <p>
          Since HTML, CSS, and JavaScript are all created by typing rather than
          dragging blocks, you can type up JavaScript code anywhere and save it
          as a file on your computer.
        </p>
        <p>
          There are many programs you can download that are made specifically
          for typing code. I personally use{" "}
          <a href="https://code.visualstudio.com/">VSCode</a>. It is quite
          powerful, pleasant to use, and really good at dealing with
          HTML/CSS/JavaScript.
        </p>
        <p>
          But it can be a bit heavy/slow if your computer isn't powerful enough.
          So if <a href="https://code.visualstudio.com/">VSCode</a> isn't for
          you, there are other options available:
        </p>
        <ul>
          <li>
            <a href="https://www.sublimetext.com/">Sublime Text</a> has existed
            forever and is very fast
          </li>
          <li>
            <a href="https://notepad-plus-plus.org/">Notepad++</a> is simple and
            quick
          </li>
        </ul>
        <p>
          Once you have your code editor, you can use it to create code files.
          You will always need to create an HTML file, which has the{" "}
          <code>.html</code> file extension.
        </p>
        <p>Here's an example of an HTML file:</p>
        <pre>
          <code>{`<html>
  <head>
    <title>This title will not show up on the page, but it will appear as the name of the website in the tab bar</title>
  </head>
  <body>
    <h1>My page title!</h1>
    <p>And this is a paragraph...</p>
  </body>
</html>`}</code>
        </pre>
        <p>
          You could save this as <code>my-test-file.html</code> on your
          computer. Then, open that file directly in your web browser to preview
          it.
        </p>
        <p>
          Notice that is has some additional HTML elements,{" "}
          <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and{" "}
          <code>&lt;body&gt;</code> (as well as <code>&lt;title&gt;</code>),
          that we aren't used to seeing.
        </p>
        <p>
          Every single HTML file you write should begin with an{" "}
          <code>&lt;html&gt;</code> element with a <code>&lt;head&gt;</code> and
          a <code>&lt;body&gt;</code> inside. (When you use an online editor,
          you are only writing the stuff that goes in the{" "}
          <code>&lt;body&gt;</code>. The editor inserts the rest for you.)
        </p>
        <h3>Including CSS and JavaScript in your HTML file</h3>
      </article>
    </Layout>
  );
}
