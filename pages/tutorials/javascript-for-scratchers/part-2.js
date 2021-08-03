import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import WebpageEditor from "../../../components/WebpageEditor";

export default function Part1() {
  return (
    <Layout>
      <Head>
        <title>
          Part 2: Start with HTML and CSS | JavaScript for Scratchers | Josh
          Pullen
        </title>
      </Head>

      <article>
        <div className="prose sm:prose-lg prose-indigo">
          <div>
            <Link href="/tutorials/javascript-for-scratchers">
              <a>JavaScript for Scratchers</a>
            </Link>
          </div>
          <h1>Start with HTML and CSS</h1>
          <p>
            In the{" "}
            <Link href="/tutorials/javascript-for-scratchers/part-1">
              <a>previous part</a>
            </Link>{" "}
            I said that you often use JavaScript while building websites. That
            is true, but JavaScript is not the <em>only</em> programming
            language involved in website-building.
          </p>
          <p>There are two other languages as well: HTML and CSS.</p>

          <h2>Three languages!? Why?</h2>
          <p>
            Yeah, yeah. It's three totally different programming languages that
            all work together just to make a simple website.
          </p>
          <p>It might feel a bit overwhelming at first, but don't fret.</p>
          <div className="bg-gray-200 rounded px-5 py-4 text-base">
            <div className="space-y-2">
              <div className="font-bold text-gray-600 uppercase">Side note</div>
              <div>
                There are plenty of services online, like{" "}
                <a href="https://wordpress.com/">Wordpress</a> and{" "}
                <a href="https://www.wix.com/">Wix</a>, that let you build your
                own website without writing any code at all. If your goal is
                just to make a simple website, you can use one of those tools
                without learning anything else.
              </div>
              <div>
                But if you want to build a site from... ahem... <em>scratch</em>
                , then HTML, CSS, and JavaScript are going to be essential.
              </div>
            </div>
          </div>

          <h3>What do they all do?</h3>
          <p>All three languages work together to form one website:</p>
          <ul>
            <li>
              <strong>HTML</strong> is used to describe the <em>content</em> of
              the web page. Any words that appear on the page go in the HTML,
              along with all your images and videos and buttons and links and
              whatever other content needs to exist.
            </li>
            <li>
              <strong>CSS</strong> is used to <em>style</em> your content. If
              you have some content in your HTML and you want to change its text
              color or background or font size or position it on the screen, all
              of that happens in CSS.
            </li>
            <li>
              <strong>JavaScript</strong> is used to add <em>functionality</em>{" "}
              to your website. If you want a button to do something when
              clicked, or you want to create a game, or anything else that
              involves user interaction or careful computation, JavaScript is
              the tool for the job.
            </li>
          </ul>
          <p>
            To be honest, HTML and CSS are all you really need to build a simple
            website. You can write some content with HTML (maybe a nice blog
            post or a page all about you), make it look pretty with CSS, and
            publish it online!
          </p>
          <p>
            But if you're coming from Scratch, you might want to make games. Or
            at least something more interactive than just a plain web page. And
            that's where JavaScript gets involved.
          </p>

          <h2>HTML in 5 minutes</h2>
          <p>Let's do the fastest introduction to HTML of all time.</p>
          <p>Here's some HTML code, and a preview of its output:</p>
        </div>
        <div className="my-4 w-break-out">
          <div className="w-full max-w-5xl px-8 mx-auto">
            <WebpageEditor
              html={`<h1>Hello, world!</h1>
<p>This is my first HTML page.</p>
<p>It has...</p>
<ul>
  <li>A header</li>
  <li>Two paragraphs</li>
  <li>A list of three things</li>
</ul>`}
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
              header 1, and it makes a big header on the page. <code>p</code>{" "}
              stands for paragraph, <code>ul</code> stands for unordered list,
              and <code>li</code> stands for list item.
            </li>
          </ul>
        </div>
      </article>
    </Layout>
  );
}
