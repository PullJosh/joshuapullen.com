import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import AsideBox from "../../../components/AsideBox";

export default function Part2() {
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
          <AsideBox>
            <div>
              There are plenty of services online, like{" "}
              <a href="https://wordpress.com/">Wordpress</a> and{" "}
              <a href="https://www.wix.com/">Wix</a>, that let you build your
              own website without writing any code at all. If your goal is just
              to make a simple website, you can use one of those tools without
              learning anything else.
            </div>
            <div>
              But if you want to build a site from... ahem... <em>scratch</em>,
              then HTML, CSS, and JavaScript are going to be essential.
            </div>
          </AsideBox>

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

          <h2>HTML and CSS, as briefly as possible.</h2>
          <p>I have two different mini tutorials for you:</p>
          <ul>
            <li>
              <Link href="/tutorials/html-in-10-minutes">
                <a>HTML in 10 minutes</a>
              </Link>
            </li>
            <li>
              <Link href="/tutorials/css-in-10-minutes">
                <a>CSS in 10 minutes</a>
              </Link>
            </li>
          </ul>
          <p>
            Start with HTML, then do CSS. Feel free to skip anything you already
            know.
          </p>
          <p>
            The goal of these lessons is not to teach you everything. They are
            just a quick overview so you can get comfortable with the big ideas.
            After that, you should be able to search for anything else you want
            to know.
          </p>
        </div>
      </article>
    </Layout>
  );
}
