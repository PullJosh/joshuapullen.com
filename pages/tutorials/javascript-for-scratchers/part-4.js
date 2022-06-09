import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Layout from "../../../components/Layout";
import classNames from "classnames";

import stringIndicies from "../../../public/images/tutorials/javascript-for-scratchers/part-4/string-indicies.svg";
import AsideBox from "../../../components/AsideBox";

const ScratchBlocks = dynamic(
  () => import("../../../components/ScratchBlocks"),
  { ssr: false }
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
        <Accordion
          title={
            <div className="prose sm:prose-lg">
              <h3>
                <span className="text-[#389438]">Operators</span>
              </h3>
            </div>
          }
        >
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
            <Translation scratch="([abs v] of (-10))" js="Math.abs(-10)" />
            <Translation scratch="([floor v] of (3.5))" js="Math.floor(3.5)" />
            <Translation scratch="([ceiling v] of (3.5))" js="Math.ceil(3.5)" />
            <Translation scratch="([sqrt v] of (9))" js="Math.sqrt(9)" />
            <Translation scratch="([ln v] of (42))" js="Math.log(42)" />
            <Translation scratch="([log v] of (42))" js="Math.log10(42)" />
            <Translation scratch="([e ^ v] of (2))" js="Math.E ** 2" />
            <Translation scratch="([10 ^ v] of (2))" js="10 ** 2" />
          </TranslationGrid>
        </Accordion>

        <div className="prose sm:prose-lg prose-indigo">
          <div />
          <h2>Blocks that are tricky to translate</h2>
        </div>
        <Accordion
          title={
            <>
              <ScratchBlocks>(pick random (1) to (10))</ScratchBlocks>
            </>
          }
        >
          <div className="space-y-4">
            <div className="prose sm:prose-lg prose-indigo">
              <p>
                JavaScript has a function, <code>Math.random()</code>, that
                picks random numbers, but it works differently than Scratch's
                pick random block.
              </p>
              <p>
                <code>Math.random()</code> always returns a number between 0 and
                1 (you don't get to choose the range yourself), and it is a big
                long decimal with lots of precision:
              </p>
            </div>
            <RandomNumberDemo
              func={() => Math.random()}
              funcString="Math.random()"
            />
            <div className="prose sm:prose-lg prose-indigo">
              <p>
                If you want anything other than that, you'll have to do some
                math yourself.
              </p>
              <p>
                To make the range bigger than just 0 to 1, you can multiply the
                result. For example, to pick a number between 0 and 100, do{" "}
                <code>Math.random() * 100</code>. That way, you'll pick a number
                between 0 and 1, but then scale it up to be bigger.
              </p>
            </div>
            <RandomNumberDemo
              func={() => Math.random() * 100}
              funcString="Math.random() * 100"
            />
            <div className="prose sm:prose-lg prose-indigo">
              <p>
                And if you want the range to start with something other than 0,
                you can add to your result.
              </p>
              <p>
                For example, to pick a number between 50 and 150, multiply by
                100 to get 0-100 and then add 50 to get 50-150.
              </p>
            </div>
            <RandomNumberDemo
              func={() => Math.random() * 100 + 50}
              funcString="Math.random() * 100 + 50"
            />
            <div className="prose sm:prose-lg prose-indigo">
              <p>
                And if you want a nice round number, you can use the{" "}
                <code>Math.floor()</code> function to round the result down to
                an integer.
              </p>
            </div>
            <RandomNumberDemo
              func={() => Math.floor(Math.random() * 10 + 1)}
              funcString="Math.floor(Math.random() * 10 + 1)"
            />
          </div>
        </Accordion>
        <Accordion
          title={
            <ScratchBlocks className="inline-block align-middle">
              (join [scratch] [js])
            </ScratchBlocks>
          }
        >
          <div className="space-y-4">
            <div className="prose sm:prose-lg prose-indigo">
              <p>
                In JavaScript, you can join text together using the{" "}
                <code>+</code> sign. It's almost like you're <em>adding</em> the
                two pieces of text together.
              </p>
              <pre>
                <code>"scratch" + "js"</code>
              </pre>
              <p>You can even add a bunch of pieces together all at once:</p>
              <ScratchBlocks>
                (join [first] (join [second] (join [third] [fourth])))
              </ScratchBlocks>
              <pre>
                <code>"first" + "second" + "third" + "fourth"</code>
              </pre>
              <p>Makes sense, right?</p>
              <p>
                One problem with this method is that <code>+</code> is also used
                for adding numbers together. So what if you want to join some
                numbers?
              </p>
            </div>
            <TranslationGrid>
              <Translation
                scratch="(join [1] [2])"
                js="1 + 2"
                comment="This won't work! It will give you 3."
              />
            </TranslationGrid>
            <div className="prose sm:prose-lg prose-indigo">
              <p>
                The trick here is that in JavaScript, <code>3</code> and{" "}
                <code>"3"</code> are different. The first is the number 3, but
                the second is the <em>string</em> "3". "String" is basically a
                fancy word for "text".
              </p>
              <p>
                Scratch doesn't really make this distinction between numbers and
                strings, but{" "}
                <Link href="/tutorials/javascript-for-scratchers/part-7">
                  <a>JavaScript does</a>
                </Link>
                . So you need to be careful when using the <code>+</code>{" "}
                operator to make sure you're plugging in the right kind of data.
              </p>
              <p>
                If you wanted to join two numbers, you would have to join the
                strings containing those numbers as text:
              </p>
              <pre>
                <code>"1" + "2"</code>
              </pre>
              <p>
                The code above would give <code>"12"</code> as a result, just
                like we would expect with the join block.
              </p>
              <p>But there's a better way.</p>
              <p>
                If you have some text, and you just want to insert a value
                somewhere within it, there's a different method called{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">
                  template literals
                </a>{" "}
                that is easier to use and doesn't have this problem.
              </p>
              <p>Here's how it works:</p>
            </div>
            <TranslationGrid>
              <Translation
                scratch="(join [Hello, ] (join (name) [!]))"
                js="`Hello, ${name}!`"
              />
            </TranslationGrid>
            <div className="prose sm:prose-lg prose-indigo">
              <p>
                Here, we start and end the string with <code>`</code>, and
                anywhere inside we can write <code>$&#123;something&#125;</code>{" "}
                to insert the value of the variable `something` into the string.
              </p>
              <p>
                With this method, even if the value inside is a number, it will
                always "join" as expected (rather than adding).
              </p>
            </div>
          </div>
        </Accordion>
        <Accordion
          title={
            <>
              <ScratchBlocks>(letter (1) of [abcd])</ScratchBlocks>
            </>
          }
        >
          <div className="space-y-4">
            <div className="prose sm:prose-lg prose-indigo">
              <p>
                To get a letter of a string in JavaScript, use the{" "}
                <code>[]</code> syntax:
              </p>
            </div>
            <TranslationGrid>
              <Translation scratch="(letter (1) of [abcd])" js='"abcd"[0]' />
            </TranslationGrid>
            <div className="prose sm:prose-lg prose-indigo">
              <p>
                The trick here is that in JavaScript we always start counting
                from 0 rather than 1.
              </p>
              <Image
                src={stringIndicies}
                alt="Strings indicies count from 0 in JavaScript"
              />
              <p>
                At first, this might seem weird. But it helps simplify any math
                in your code, and eventually you get used to it.
              </p>
              <AsideBox>
                <div>
                  We'll talk more about counting from zero{" "}
                  <Link href="/tutorials/javascript-for-scratchers/part-7">
                    soon
                  </Link>
                  .
                </div>
                <div>
                  It's not just for getting the letter of a string. We do it for
                  accessing list items too! (Although lists are called "arrays"
                  in JavaScript.)
                </div>
              </AsideBox>
              <p>
                If you want to access a position based on a variable, you can do
                that too:
              </p>
            </div>
            <TranslationGrid>
              <Translation
                scratch="(letter (position) of [abcd])"
                js='"abcd"[position]'
              />
            </TranslationGrid>
            <div className="prose sm:prose-lg prose-indigo">
              <p>
                Just keep in mind that you have to count from zero, which means
                you might need to change the way your code works a bit.
              </p>
              <p>
                Or, if you're copying something over from Scratch directly, the
                simple solution is just to subtract one right as you're getting
                the letter:
              </p>
              <pre>
                <code>"abcd"[position - 1]</code>
              </pre>
            </div>
          </div>
        </Accordion>
        <Accordion
          title={
            <>
              <ScratchBlocks>
                ([sin / cos / tan / asin / acos / atan v] of (45) :: operators)
              </ScratchBlocks>
            </>
          }
        >
          <div className="space-y-4">
            <div className="prose sm:prose-lg prose-indigo">
              <p>
                In JavaScript, these functions operate on{" "}
                <a href="https://www.mathsisfun.com/geometry/radians.html">
                  radians
                </a>{" "}
                rather than degrees. Other than that, they're quite
                straightforward:
              </p>
              <pre>
                <code>
                  {`Math.sin(1)
Math.cos(1)
Math.tan(1)
Math.asin(1)
Math.acos(1)
Math.atan(1)`}
                </code>
              </pre>
              <p>
                So when you're writing JavaScript, the best thing you can do is
                structure your code so that you're using radians everywhere.
                That way, you can just use the built-in functions.
              </p>
              <AsideBox>
                <div>
                  If you've never heard about radians, it's worth taking a bit
                  of time to get familiar with them. They are great because they
                  make lots of mathematical formulas simpler.
                </div>
                <div>
                  One radian is equal to about 57.3 degrees. That number might
                  seem random, but it turns out to be really useful.
                </div>
                <div>
                  If you are walking around in a circle, after 57.3 degrees (1
                  radian) you will have walked a distance equal to the radius of
                  the circle. Pretty handy!
                </div>
                <div>
                  You can{" "}
                  <a href="https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:trig/x2ec2f6f830c9fb89:radians/v/introduction-to-radians">
                    learn more here
                  </a>
                  .
                </div>
              </AsideBox>
              <p>
                But what if you aren't using radians? Maybe you're trying to
                convert a Scratch project to JavaScript, and it's too much
                effort to change all the code to use radians, so you want to be
                able to work with degrees.
              </p>
              <p>
                JavaScript doesn't really have any built-in support for this,
                but you can build it yourself.
              </p>
              <p>
                These two functions convert from degrees to radians and vice
                versa:
              </p>
              <pre>
                <code>
                  {`function degToRad(deg) {
  return (deg * Math.PI) / 180;
}

radToDeg(rad) {
  return (rad * 180) / Math.PI;
}`}
                </code>
              </pre>
              <p>
                If you include them somewhere in your code, then you can use
                them to perform degree-based versions of all the same
                calculations:
              </p>
              <pre>
                <code>
                  {`Math.sin(degToRad(90))
Math.cos(degToRad(90))
Math.tan(degToRad(45))
radToDeg(Math.asin(1))
radToDeg(Math.acos(1))
radToDeg(Math.atan(1))`}
                </code>
              </pre>
            </div>
          </div>
        </Accordion>
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
        <ScratchBlocks>{scratch}</ScratchBlocks>
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

function RandomNumberDemo({ func, funcString }) {
  const [value, setValue] = useState(() => func());

  return (
    <div className="flex flex-col space-y-2 items-center justify-center sm:flex-row sm:space-x-8 sm:space-y-0">
      <button
        className="bg-indigo-700 text-white px-6 py-3 rounded font-mono"
        onClick={() => setValue(func())}
      >
        <span className="block text-xs text-indigo-300 whitespace-nowrap">
          Click to compute...
        </span>
        <span className="text-base whitespace-nowrap">{funcString}</span>
      </button>
      <span className="hidden sm:block">→</span>
      <span className="block sm:hidden">↓</span>
      <span className="font-mono sm:w-[21ch] overflow-hidden overflow-ellipsis">
        {value}
      </span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col border rounded-lg divide-y">
      <button
        className="px-4 py-3 flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <div>{title}</div>
        <div
          className={classNames(
            "w-4 h-4 border-4 border-gray-800 border-t-0 border-l-0",
            {
              "-rotate-45 -translate-x-1": !open,
              "rotate-45 -translate-y-1": open,
            }
          )}
        />
      </button>
      {open && <div className="px-4 py-3">{children}</div>}
    </div>
  );
}
