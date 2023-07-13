import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Ideas() {
  return (
    <Layout current="ideas">
      <Head>
        <title>Ideas | Josh Pullen</title>
      </Head>

      <div className="prose sm:prose-lg prose-indigo">
        <h1>Josh's Project Ideas</h1>
        <p>
          I am currently trying my best not to start any new projects. Instead,
          I want to focus my time on making improvements to my existing work.
        </p>
        <p>
          However, I find it incredibly challenging to contain my excitement for
          new ideas, so I am keeping track of them here.
        </p>

        <h3>Table of Contents</h3>
        <ul>
          <li>
            <Link href="#teacher-todo-list">
              A todo list/task manager/calendar for teachers
            </Link>
          </li>
          <li>
            <Link href="#website-annotation">
              Website Annotation Tool (for drawing all over the internet)
            </Link>
          </li>
          <li>
            <Link href="#low-stakes-database">
              Super Easy Low-Stakes Database for Tiny Projects
            </Link>
          </li>
        </ul>

        <h2 id="teacher-todo-list">
          A todo list/task manager/calendar for teachers
        </h2>
        <p>
          There is an infinite need for new task managers because everyone
          thinks & works differently. I've never found one that works for me,
          and I've always wanted to design a solution for myself.
        </p>
        <p>Problems I want to solve:</p>
        <ul>
          <li>
            <p>
              <strong>Teaching is a paper & pencil profession.</strong> I don't
              know why, but it's much easier to use a pencil & paper than
              digital tools while teaching. Maybe it's because you're keeping
              track of lots of information at once but never have time to slow
              down and organize? I'm not really sure.
            </p>
            <p>
              No matter the reason, an organizational system for teachers would
              need to make space for handwritten notes (and perhaps would not
              use technology at all).
            </p>
          </li>
          <li>
            <p>
              <strong>Separating work and life.</strong> I want to have one
              system that I can use to track everything I need to do in life.
              But I also want strong barriers between school and home to help me
              maintain as much work-life balance as possible.
            </p>
          </li>
        </ul>

        <h2 id="website-annotation">
          Website Annotation Tool (for drawing all over the internet)
        </h2>
        <p>(This idea spawned from the previous one.)</p>
        <p>
          In real life, a wonderful trick for remembering things is to put
          physical reminders in your actual world. If you need to wear a certain
          shirt for an event, hang it someplace you can't miss it. If you need
          to bring something with you to an event, put it in your car the night
          before.
        </p>
        <p>
          <strong>Digital sticky notes & annotations</strong> would allow us to
          do this online too.
        </p>
        <ul>
          <li>
            <p>
              On every website, allow the user to place down sticky notes,
              highlight text, draw pictures, and so on. That way, when they
              return to the same page later, their note will be waiting for
              them.
            </p>
          </li>
          <li>
            <p>
              Let the user include todos and reminders in their annotations. The
              physical note on the page can serve as a reminder, but the user
              could also find <em>all</em> of their todos on one central list
              (without needing to return to the location where they placed the
              note). That way you never lose anything.
            </p>
          </li>
          <li>
            <p>
              Also allow the user to add annotations with reminders that fire at
              a certain time. At that time (or place, or whatever), the browser
              could remind you to come back to that page and do whatever you
              need to do.
            </p>
          </li>
        </ul>

        <h2 id="low-stakes-database">
          Super Easy Low-Stakes Database for Tiny Projects
        </h2>
        <p>
          I sometimes make tiny websites, games, etc. that need a database.
          Sometimes I want to store just a couple of values (some settings or
          information about the website). Sometimes I want to store a
          leaderboard of top scores in a game. Sometimes I want users to be able
          to create & publish extremely small objects of some kind.
        </p>
        <p>
          Setting up an entire database is overkill when all I want to do is
          store a tiny bit of data for a personal project, so why not make a
          tiny one?
        </p>
        <ul>
          <li>
            <p>
              <strong>A tiny data store for tiny projects.</strong> No
              complicated SQL setup. No sharding or indexes. Nothing like that.
              This is for tiny projects that just need to store a few things.
            </p>
          </li>
          <li>
            <p>
              <strong>No backend necessary.</strong> Some projects a personal.
              Maybe you're making a website for just a few friends. You don't
              need top-notch security, you just want to bodge together something
              that works for a few people you trust. If you want to read and
              write to your data store directly from the frontend, you should be
              able to via some simple API calls.
            </p>
          </li>
          <li>
            <p>
              <strong>Easy manual editing.</strong> When you're working on a
              tiny project, you might not want to set up an entire admin view.
              But you <em>do</em> want to have quick & easy access to your data
              so you can read & change it manually.
            </p>
          </li>
        </ul>
        <p>
          To accomplish the above goals, I propose a tool that makes it possible
          to read & write to JSON files. Via a web frontend or an API, you can
          create a JSON file that's hosted on the web. Then, you can read &
          write to and from that file via an API. If you'd like to
          password-protect that file you can, or you can let anyone edit it
          without any permissions necessary (for extremely small & loose
          projects).
        </p>
      </div>
    </Layout>
  );
}
