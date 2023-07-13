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
      </div>
    </Layout>
  );
}
