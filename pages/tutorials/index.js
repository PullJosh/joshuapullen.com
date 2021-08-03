import Link from "next/link";
import Layout from "../../components/Layout";

export default function Tutorials() {
  return (
    <Layout current="tutorials">
      <div className="prose sm:prose-lg prose-indigo">
        <h1>Tutorials</h1>
        <ul>
          <li>
            <Link href="/tutorials/javascript-for-scratchers">
              <a>JavaScript for Scratchers</a>
            </Link>
            : An introduction to JavaScript for people who already know Scratch.
          </li>
        </ul>
      </div>
    </Layout>
  );
}