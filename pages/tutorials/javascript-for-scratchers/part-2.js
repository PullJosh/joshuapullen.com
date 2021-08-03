import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";

export default function Part1() {
  return (
    <Layout>
      <Head>
        <title>
          Part 2: Start with HTML and CSS | JavaScript for Scratchers | Josh
          Pullen
        </title>
      </Head>

      <article className="prose sm:prose-lg prose-indigo">
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
          I said that you often use JavaScript while building websites. That is
          true, but JavaScript is not the <em>only</em> programming language
          involved in website-building.
        </p>
        <p>There are two other languages as well: HTML and CSS.</p>
        <p>
          By the way, I should clarify something: If you want to build a
          website, you don't <em>need</em> these languages. There are plenty of
          services online, like <a href="https://wordpress.com/">Wordpress</a>{" "}
          and <a href="https://www.wix.com/">Wix</a>, that let you build your
          own website without writing any code at all. But if you want to do it
          from... ahem... <em>scratch</em>, then HTML, CSS, and JavaScript are
          going to be essential.
        </p>

        <h2>Three languages!? Why?</h2>
        <p>
          Yeah, yeah. It's three totally different programming languages that
          all work together just to make a simple website.
        </p>
        <p>It might feel a bit overwhelming at first, but don't fret.</p>
        <p>
          You can get the hang of HTML and CSS first, and even without writing
          any JavaScript, you can build some awesome websites. Just tackling
          those two alone will grant you some awesome superpowers.
        </p>
      </article>
    </Layout>
  );
}
