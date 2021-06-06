import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout activeTab="home">
      <Head>
        <title>Home | Josh Pullen</title>
      </Head>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-indigo-700">
          Hello! I'm Josh Pullen! 👋
        </h3>
        <h2 className="text-3xl font-bold text-gray-900">
          I love education and technology.
        </h2>
      </div>

      <div className="typography text-lg leading-7">
        <p>
          When I was 8 years old, I started programming with{" "}
          <a
            href="https://scratch.mit.edu/users/PullJosh/"
            target="_blank"
            rel="noopener"
          >
            Scratch
          </a>
          . Ever since that magical moment, I've been fascinated by the
          opportunity to learn using technology.
        </p>
        <p>After my time on Scratch, I created a few educational websites:</p>
        <div className="px-8 w-break-free">
          <div className="flex flex-col items-center max-w-3xl mx-auto my-8 md:flex-row">
            <a
              className="max-w-sm p-2 pb-0 mb-4 transition duration-200 transform bg-white rounded-lg shadow-lg select-none md:w-2/5 hover:shadow-xl hover:-translate-y-1 md:mb-0"
              href="http://thirdgrademathgames.com/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="/images/third-grade-math-games.webp"
                alt="Third Grade Math Games"
                className="w-full h-auto rounded-sm shadow md:rounded-r-none"
              />
              <div className="my-2 text-base font-semibold text-center text-gray-900">
                Third Grade Math Games
              </div>
            </a>
            <a
              className="z-10 max-w-sm p-3 pb-0 mb-4 -mx-2 transition duration-200 transform bg-white rounded-lg shadow-lg select-none md:mb-0 md:w-3/5 hover:shadow-xl hover:-translate-y-1"
              href="https://www.rocketspelling.com/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="/images/rocket-spelling.webp"
                alt="Rocket Spelling"
                className="w-full h-auto rounded shadow"
              />
              <div className="my-3 text-xl font-semibold text-center text-gray-900">
                Rocket Spelling
              </div>
            </a>
            <a
              className="max-w-sm p-2 pb-0 transition duration-200 transform bg-white rounded-lg shadow-lg select-none md:w-2/5 hover:shadow-xl hover:-translate-y-1"
              href="https://onlinemathleague.com/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="/images/online-math-league.webp"
                alt="Online Math League"
                className="w-full h-auto rounded-sm shadow md:rounded-l-none"
              />
              <div className="my-2 text-base font-semibold text-center text-gray-900">
                Online Math League
              </div>
            </a>
          </div>
        </div>
        <p>
          I also started a summer technology camp and an after school coding
          club for local elementary students.
        </p>
        <p>
          Now I'm working with{" "}
          <a
            href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw"
            target="_blank"
          >
            3Blue1Brown
          </a>{" "}
          (and a slew of other awesome people) to convert his math videos into
          written articles.
        </p>
      </div>
    </Layout>
  );
}
