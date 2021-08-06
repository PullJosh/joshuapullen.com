import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import AsideBox from "../../../components/AsideBox";
import Layout from "../../../components/Layout";

const ScratchBlocks = dynamic(() =>
  import("../../../components/ScratchBlocks")
);

export default function Part4() {
  return (
    <Layout>
      <Head>
        <title>
          Part 4: Translating Scratch blocks to JavaScript | JavaScript for
          Scratchers | Josh Pullen
        </title>
      </Head>

      <article className="space-y-4">
        <div className="prose sm:prose-lg prose-indigo">
          <div>
            <Link href="/tutorials/javascript-for-scratchers">
              <a>JavaScript for Scratchers</a>
            </Link>
          </div>
          <h1>Translating Scratch blocks to JavaScript</h1>
          <p>
            When I was first learning JavaScript, I kept looking for a big list
            of translations, where each Scratch block must have some equivalent
            JavaScript code.
          </p>
          <p>Unfortunately, it's not that simple.</p>
          <p>
            Some blocks do indeed have very nice, direct translations. But some
            do not. We'll cover the nice blocks first, and then talk about the
            blocks that are more complicated.
          </p>
          <h2>Blocks that are simple to translate</h2>
        </div>
        <TranslationGrid>
          <Translation scratch="((6) + (2))" js="6 + 2" />
          <Translation scratch="((6) - (2))" js="6 - 2" />
          <Translation scratch="((6) * (2))" js="6 * 2" />
          <Translation scratch="((6) / (2))" js="6 / 2" />
          <Translation scratch="<(20) > (15)>" js="20 > 15" />
          <Translation scratch="<(20) < (15)>" js="20 < 15" />
          <Translation scratch="<(20) = (15)>" js="20 == 15" />
          <Translation
            scratch="<<first :: custom> and <second :: custom>>"
            js="first && second"
          />
          <Translation
            scratch="<<first :: custom> or <second :: custom>>"
            js="first || second"
          />
          <Translation scratch="<not <thing :: custom>>" js="!thing" />
          <Translation scratch="(length of [apple])" js='"apple".length' />
          <Translation
            scratch="<[apple] contains [a]>"
            js='"apple".includes("a")'
          />
          <Translation scratch="((7) mod (3))" js="7 % 3" />
          <Translation scratch="(round (3.5))" js="Math.round(3.5)" />
        </TranslationGrid>
        <div className="prose sm:prose-lg prose-indigo">
          <h2>Blocks that can sort of be translated</h2>
        </div>
        <TranslationGrid>
          <Translation scratch="(pick random (1) to (10))" />
          <Translation scratch="(join [scratch] [js])" />
          <Translation scratch="(join [1] [2])" />
          <Translation
            scratch="(letter (1) of [abcd])"
            js='"abcd"[0]'
            comment="Start counting from 0 (rather than 1)."
          />
          <Translation
            scratch="(letter (4) of [abcd])"
            js='"abcd"[3]'
            comment="Number must always be one less than in Scratch."
          />
        </TranslationGrid>
      </article>
    </Layout>
  );
}

function TranslationGrid({ children }) {
  return <div className="grid grid-cols-2 items-start gap-4">{children}</div>;
}

function Translation({ scratch, js, comment }) {
  return (
    <>
      <div>
        <ScratchBlocks blockStyle="scratch3">{scratch}</ScratchBlocks>
      </div>
      <div>
        <pre className="bg-gray-200 rounded px-6 py-3 block w-full overflow-auto">
          <code>{js}</code>
        </pre>
        {comment && <div className="text-sm text-gray-600">{comment}</div>}
      </div>
    </>
  );
}
