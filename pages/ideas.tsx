import Head from "next/head";
import Layout from "../components/Layout";

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

        <h2>A todo list/task manager/calendar for teachers</h2>
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

        <h2>Website Annotation Tool (for drawing all over the internet)</h2>
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
      </div>
    </Layout>
  );
}
