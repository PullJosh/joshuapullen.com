import Head from "next/head";
import Link from "next/link";
import AsideBox from "../../../components/AsideBox";
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
          If you've mastered <a href="https://scratch.mit.edu/">Scratch</a>, it
          might be time to try something new.
        </p>
        <p>
          For your next step, I recommend JavaScript. It gives you more power
          and more publishing options for the things you create, and it's{" "}
          <a href="https://insights.stackoverflow.com/survey/2021#most-popular-technologies-language">
            the most popular programming language in the world
          </a>
          .
        </p>
        <p>
          Scratch and JavaScript share many similarities, but there are some
          fundamental differences between them. If you're not careful, those
          differences can really trip you up while you're trying to learn.
        </p>
        <p>
          The goal of this tutorial is to point out those roadblocks and help
          you understand what's different in this new and foreign world.
        </p>
        <AsideBox title="Prepare yourself...">
          <div>
            This tutorial will <strong>not</strong> teach you everything you
            need to know to write JavaScript code. There is so much to learn,
            and I couldn't possibly cover it all.
          </div>
          <div>
            Expect to do a <em>lot</em> of Googling on your own.
          </div>
        </AsideBox>

        <h2>Contents</h2>
        <ul>
          <ContentsItem num={1} id="part-1">
            What is JavaScript, and what can it do?
          </ContentsItem>
          <ContentsItem num={2} id="part-2">
            Start with HTML and CSS
          </ContentsItem>
          <ContentsItem num={3} id="part-3">
            Where to write JavaScript code
          </ContentsItem>
          <ContentsItem num={4} id="part-4">
            Translating Scratch blocks to JavaScript
          </ContentsItem>
          <ContentsItem num={5}>One script that does everything</ContentsItem>
          <ContentsItem num={6}>Variables are created on the fly</ContentsItem>
          <ContentsItem num={7}>
            Numbers, strings, arrays, objects, functions, and more
          </ContentsItem>
          <ContentsItem num={8} id="part-8">
            Making games with &lt;canvas&gt;
          </ContentsItem>
          <ContentsItem num={9}>
            How to publish your websites and games
          </ContentsItem>
          <ContentsItem num={10}>
            Topics beyond this tutorial (build steps, react/vue/svelte,
            node/deno, git, etc.)
          </ContentsItem>
        </ul>

        <h2>Too much to think about?</h2>
        <p>There are a lot of differences between Scratch and JavaScript.</p>
        <p>
          If it's too much to think about, I recommend{" "}
          <a href="https://leopardjs.vercel.app/">Leopard</a>. Leopard is a tool
          I created (with help from friends) that makes JavaScript more similar
          to Scratch.
        </p>
        <p>
          With Leopard,{" "}
          <a href="https://leopardjs.vercel.app/translations/motion">
            every single Scratch block
          </a>{" "}
          has a direct JavaScript analogue, and many of the differences between
          the languages no longer apply.
        </p>
        <p>
          Oh, and it also comes with an automatic translator that converts your
          existing Scratch projects to JavaScript code for you.
        </p>
        <p>
          <a href="https://leopardjs.vercel.app/">Check it out!</a>
        </p>
      </article>
    </Layout>
  );
}

function ContentsItem({ num, id, children }) {
  return (
    <li>
      <strong>Part {num}:</strong>{" "}
      {id && (
        <Link href={`/tutorials/javascript-for-scratchers/${id}`}>
          <a>{children}</a>
        </Link>
      )}
      {!id && children}
    </li>
  );
}
