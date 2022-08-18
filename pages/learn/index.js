import Link from "next/link";
import Layout from "../../components/Layout";

export default function Learn() {
  return (
    <Layout current="learn">
      <div className="prose sm:prose-lg prose-indigo">
        <h1>Learn</h1>
        <ul>
          <li>
            <Link href="/learn/matrix-multiplication">
              Matrix Multiplication
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
