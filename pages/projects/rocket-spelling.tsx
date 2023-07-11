import Nav from "../../components/Nav";

import Image from "next/image";
import RocketSpellingLogo from "../../public/images/project-logos/rocket-spelling.svg";
import RocketSpellingScreenshot from "../../public/images/projects/rocket-spelling/rocket-spelling-screenshot.jpg";
import Link from "next/link";

export default function RocketSpelling() {
  return (
    <>
      <Nav current="projects" wavy={true} waveClassName="fill-gray-100" />

      <div className="bg-gray-100">
        <div className="max-w-6xl px-8 py-8 mx-auto">
          <div className="grid grid-cols-8 gap-x-8">
            <div className="col-span-3 prose">
              <div className="grid grid-cols-[auto,1fr] gap-x-4 items-center">
                <div className="not-prose w-16 h-auto">
                  <Image
                    className="w-full h-auto"
                    src={RocketSpellingLogo}
                    alt="Rocket Spelling Logo"
                  />
                </div>
                <div>
                  <div className="text-gray-600 text-sm">
                    Summer 2016 (Age 14)
                  </div>
                  <h1 className="mb-0">Rocket Spelling</h1>
                </div>
              </div>
              <p>
                Rocket Spelling is an online spelling game for 1st-5th grade
                students.
              </p>
              <p>
                At the age of 14, Rocket Spelling was the first website I ever
                created that allowed users to register for an account. Now, it
                is used by over 60K registered students in classes belonging to
                over 8K teachers.
              </p>
              <div className="not-prose">
                <Link
                  className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 text-lg rounded-lg shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/50 hover:scale-105 hover:-rotate-3 transition-all"
                  href="https://www.rocketspelling.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Rocket Spelling
                </Link>
              </div>
            </div>
            <div className="col-span-5">
              <Link
                href="https://www.rocketspelling.com/"
                target="_blank"
                rel="noreferrer"
                passHref={true}
              >
                <Image
                  className="rounded-2xl shadow-lg hover:rotate-1 transition-transform"
                  src={RocketSpellingScreenshot}
                  alt="Rocket Spelling Screenshot"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
