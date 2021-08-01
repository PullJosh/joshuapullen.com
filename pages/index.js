import Head from "next/head";
import Nav from "../components/Nav";
import Wave from "../components/Wave";
import Footer from "../components/Footer";

import headshot from "../public/images/josh-transparent-bg.png";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <Head>
        <title>Josh Pullen</title>
      </Head>

      <Nav current="home" wavy={false} />

      <div className="bg-indigo-600 relative">
        <div className="max-w-2xl lg:max-w-4xl px-8 mx-auto pt-8 pb-16 lg:pt-24 lg:pb-32 relative">
          <div className="text-center lg:text-left">
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-indigo-500 mx-auto mb-8 overflow-hidden lg:bg-transparent lg:rounded-none lg:w-96 lg:h-96 lg:m-0 lg:absolute lg:bottom-0 lg:-right-8">
              <Image
                src={headshot}
                alt="Photo of Josh Pullen"
                priority={true}
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 192px, 384px"
                quality={50}
              />
            </div>

            <h3 className="text-2xl sm:text-4xl text-indigo-300">
              Hi! I'm Josh Pullen.
            </h3>
            <h1 className="text-4xl sm:text-7xl font-extrabold text-white whitespace-nowrap">
              I love <span className="text-yellow-300">education</span> <br />
              and <span className="text-green-400">technology</span>.
            </h1>
          </div>
        </div>

        <Wave />
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-2xl px-8 mx-auto prose sm:prose-lg md:prose-xl">
          <h2>Things I've Made</h2>
          <ul>
            <li>
              <strong>
                <a
                  href="https://www.rocketspelling.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rocket Spelling
                </a>
              </strong>
              <div>Online spelling practice for elementary students.</div>
            </li>
            <li>
              <strong>
                Lessons on{" "}
                <a
                  href="https://www.3blue1brown.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  3Blue1Brown.com
                </a>
              </strong>
              <div>
                I was hired as an intern to create online math lessons. Working
                with the team was a ton of fun, and I'm really proud of what we
                made.
              </div>
            </li>
            <li>
              <strong>
                <a
                  href="https://leopardjs.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Leopard
                </a>
              </strong>
              <div>
                Leopard is a tool that converts{" "}
                <a
                  href="https://scratch.mit.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Scratch
                </a>{" "}
                projects into JavaScript code. If you're looking to learn
                JavaScript, this could be the tool for you.
              </div>
            </li>
            <li>
              <strong>
                <a
                  href="https://teacher-tools.joshuapullen.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Teaching Tools
                </a>
              </strong>
              <div>
                This one is still a work in progress. It's a random collection
                of utilities that teachers may find useful.
              </div>
            </li>
            <li>
              <strong>
                <a
                  href="https://onlinemathleague.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Online Math League
                </a>{" "}
                Website
              </strong>
              <div>
                I was hired to create the new Online Math League website.
              </div>
            </li>
            <li>
              <strong>
                <a
                  href="https://pulljosh.github.io/thirdgrademathgames/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Third Grade Math Games
                </a>{" "}
                and{" "}
                <a
                  href="https://pulljosh.github.io/fourthgrademathgames/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fourth Grade Math Games
                </a>
              </strong>
              <div>
                A pair of websites with a collection of math games made for 3rd
                and 4th grade students.
              </div>
            </li>
            <li>
              <strong>A summer coding camp and after-school coding club</strong>
              <div>
                Nothing beats teaching people face-to-face. It's so fun to watch
                kids' faces light up when they get something to work.
              </div>
            </li>
          </ul>

          <h2>Math and Code</h2>
          <p>
            Math and code are two of the most powerful tools in human history.
            Used effectively, they are virtually indistinguishable from magic.
            But, powerful as they are, they can be difficult to put to good use.
            I see two ways to solve this:{" "}
            <strong>better tools and better education.</strong>
          </p>
          <p>
            I would <em>love</em> to build better, more accessible math and
            programming tools.{" "}
            <a
              href="https://leopardjs.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Leopard
            </a>{" "}
            is one such attempt.
          </p>
          <p>
            But, although tool-building is lots of fun, I am not 100% sure that
            my time is best spent there. It might be the case that teaching is
            where I am most useful. There are lots of useful math and
            programming tools already available that just need a champion to
            spread the word.
          </p>
          <p>
            Perhaps my most useful role is sharing the good news about what's
            possible in this world, and helping people level up their skills.
          </p>
          <p>
            For now, I'm just trying to find my place. As we all are, I
            suppose...
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
