import Head from "next/head";
import Nav from "../components/Nav";
import Wave from "../components/Wave";
import Footer from "../components/Footer";

import Image, { ImageProps } from "next/image";
import headshot from "../public/images/josh-transparent-bg.png";
import RocketSpellingLogo from "../public/images/project-logos/rocket-spelling.svg";
import RocketSpellingScreenshot from "../public/images/projects/rocket-spelling/rocket-spelling-screenshot.jpg";
import ThreeBlueOneBrown from "../public/images/project-logos/3blue1brown.svg";
import ThreeBlueOneBrownScreenshot from "../public/images/projects/3blue1brown/3blue1brown-screenshot.jpg";
import Leopard from "../public/images/project-logos/leopard.svg";
import LeopardHeaderImage from "../public/images/projects/leopard/leopard-header-image.png";
import JGCComplexExpression from "../public/images/projects/joshs-graphing-calculator/jgc-complex-expression.png";
import ClownSchoolLogo from "../public/images/project-logos/clown-school.png";
import ClownSchoolScreenshot from "../public/images/projects/clown-school/clown-school-screenshot.jpg";
import TeachingToolsScreenshot from "../public/images/projects/teaching-tools/teaching-tools-screenshot.jpg";
import OMLScreenshot from "../public/images/projects/online-math-league/oml-screenshot.jpg";
import ThirdGradeMathGamesScreenshot from "../public/images/projects/third-grade-math-games/third-grade-math-games-screenshot.jpg";
import TechCampsPhoto from "../public/images/projects/tech-camps/tech-camps-photo.jpg";
import Link from "next/link";

import classNames from "classnames";

const socialLinks = [
  {
    name: "Scratch",
    url: "https://scratch.mit.edu/users/PullJosh/",
    icon: "/images/social-icons/scratch.svg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/PullJosh",
    icon: "/images/social-icons/twitter.svg",
  },
  {
    name: "Threads",
    url: "https://www.threads.net/@joshpullen27",
    icon: "/images/social-icons/threads.svg",
  },
  {
    name: "Github",
    url: "https://github.com/PullJosh",
    icon: "/images/social-icons/github.svg",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/c/PullJosh",
    icon: "/images/social-icons/youtube.svg",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/PullJosh",
    icon: "/images/social-icons/dribbble.svg",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/217081065863380992",
    icon: "/images/social-icons/discord.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/joshpullen/",
    icon: "/images/social-icons/linkedin.svg",
  },
];

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
            <div className="w-32 h-32 relative sm:w-48 sm:h-48 rounded-full bg-indigo-500 mx-auto overflow-hidden lg:bg-transparent lg:rounded-none lg:w-96 lg:h-96 lg:m-0 lg:absolute lg:bottom-0 lg:-right-8">
              <Image
                className="absolute bottom-0 w-full"
                src={headshot}
                alt="Photo of Josh Pullen"
                priority={true}
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 192px, 384px"
                quality={50}
              />
            </div>

            <h1 className="text-2xl sm:text-4xl text-indigo-300">
              Hi! I'm Josh Pullen.
            </h1>
            <h2 className="text-4xl sm:text-7xl font-extrabold text-white whitespace-nowrap">
              I love <span className="text-yellow-300">education</span> <br />
              and <span className="text-green-400">technology</span>.
            </h2>
            <ul className="mt-4 -mx-2">
              {socialLinks.map((link) => (
                <li key={link.name} className="inline-block">
                  <a
                    href={link.url}
                    className="group block p-2 text-indigo-400 hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain group-hover:brightness-200"
                      src={link.icon}
                      alt={`${link.name} logo`}
                      title={link.name}
                    />
                    <span className="sr-only">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Wave />
      </div>

      <div className="py-16 space-y-16">
        <div>
          <div className="max-w-2xl px-8 mx-auto">
            <h2 className="text-3xl text-gray-800 text-center sm:text-left">
              <span className="font-bold">
                The{" "}
                <span className="relative inline border-b-4 border-indigo-600">
                  Spotlight
                </span>
              </span>{" "}
              <span className="text-gray-400 iatlic hidden sm:inline">
                ~ Highlighted Work
              </span>
            </h2>
          </div>
          <div className="mt-8 max-w-6xl px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
            <ProjectCard
              title="Rocket Spelling"
              date="Summer 2016 (Age 14)"
              url="https://www.rocketspelling.com/"
              // infoUrl="/projects/rocket-spelling"
              logo={{
                src: RocketSpellingLogo,
                alt: "Rocket Spelling Logo",
              }}
              screenshot={{
                src: RocketSpellingScreenshot,
                alt: "Rocket Spelling Screenshot",
              }}
            >
              Online spelling practice for elementary students.
            </ProjectCard>
            <ProjectCard
              title="Lessons on 3Blue1Brown.com"
              date="Summer 2021 (Age 19)"
              url="https://www.3blue1brown.com/"
              logo={{
                src: ThreeBlueOneBrown,
                alt: "3Blue1Brown Logo",
              }}
              screenshot={{
                src: ThreeBlueOneBrownScreenshot,
                alt: "3Blue1Brown Screenshot",
              }}
            >
              I was hired as an intern to create online math lessons. Working
              with the team was a ton of fun, and I'm really proud of what we
              made.
            </ProjectCard>
            <ProjectCard
              title="Leopard"
              date="Fall 2018 (Age 17)"
              url="https://leopardjs.com/"
              logo={{
                src: Leopard,
                alt: "Leopard Logo",
              }}
              screenshot={{
                src: LeopardHeaderImage,
                alt: "Image of Leopard conversion from Scratch blocks to Javascript code",
              }}
            >
              Leopard is a tool that converts Scratch projects into JavaScript
              code. If you're looking to learn JavaScript, this could be the
              tool for you.
            </ProjectCard>
          </div>
        </div>
        <div>
          <div className="max-w-2xl px-8 mx-auto">
            <h2 className="text-3xl text-gray-800 text-center sm:text-left">
              <span className="font-bold">
                The{" "}
                <span className="relative inline border-b-4 border-indigo-600">
                  Laboratory
                </span>
              </span>{" "}
              <span className="text-gray-400 iatlic hidden sm:inline">
                ~ Experiments In Progress
              </span>
            </h2>
          </div>

          <div className="mt-8 max-w-6xl px-8 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
              <ProjectCard
                title="Josh's Graphing Calculator"
                date="Summer 2023"
                url="https://joshs-graphing-calculator.vercel.app/"
                logo={{
                  shape: "circle",
                  className: "fill-blue-300",
                }}
                screenshot={{
                  src: JGCComplexExpression,
                  alt: "Screenshot of Josh's Graphing Calculator",
                }}
              >
                I can't believe it's not Desmos!
              </ProjectCard>
              <ProjectCard
                title="Clown School"
                date="Summer 2022"
                url="https://clown-school.vercel.app/"
                logo={{
                  // shape: "square",
                  // className: "fill-red-300",
                  src: ClownSchoolLogo,
                  alt: "Clown School Logo",
                }}
                screenshot={{
                  src: ClownSchoolScreenshot,
                  alt: "Screenshot of Clown School",
                }}
              >
                Simple, interactive, and visual explanations of the math that
                textbooks make confusing.
              </ProjectCard>
              <ProjectCard
                title="Teaching Tools"
                date="Summer 2021"
                url="https://teacher-tools.joshuapullen.com/"
                logo={{
                  shape: "triangle",
                  className: "fill-green-300",
                }}
                screenshot={{
                  src: TeachingToolsScreenshot,
                  alt: "Screenshot of Teaching Tools",
                }}
              >
                A collection of utilities that teachers may find useful.
              </ProjectCard>
            </div>

            <div className="mt-6 max-w-lg px-8 mx-auto sm: text-center">
              I am trying not to start any new projects right now, but I do have
              a{" "}
              <Link
                href="/ideas"
                className="text-indigo-600 underline font-semibold"
              >
                list of ideas
              </Link>{" "}
              here.
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-2xl px-8 mx-auto">
            <h2 className="text-3xl text-gray-800 text-center sm:text-left">
              <span className="font-bold">
                The{" "}
                <span className="relative inline border-b-4 border-indigo-600">
                  Museum
                </span>
              </span>{" "}
              <span className="text-gray-400 iatlic hidden sm:inline">
                ~ These Projects Made Me
              </span>
            </h2>
          </div>

          <div className="mt-8 max-w-6xl px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
            <ProjectCard
              title="Online Math League Website"
              date="Summer 2018"
              screenshot={{
                src: OMLScreenshot,
                alt: "Screenshot of Online Math League Website",
              }}
            >
              I was hired to create the new Online Math League website.
            </ProjectCard>
            <ProjectCard
              title="Third Grade Math Games"
              date="Winter 2017"
              url="https://pulljosh.github.io/thirdgrademathgames/"
              screenshot={{
                src: ThirdGradeMathGamesScreenshot,
                alt: "Screenshot of Third Grade Math Games",
              }}
            >
              A collection of math games made for 3rd grade students.
            </ProjectCard>
            <ProjectCard
              title="Technology Camps for Kids"
              date="Summer 2016 & 2017"
              screenshot={{
                src: TechCampsPhoto,
                alt: "Photo of me teaching a class",
              }}
            >
              Nothing beats teaching people face-to-face. It's so fun to watch
              kids' faces light up when they get something to work.
            </ProjectCard>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

interface ProjectCardProps {
  title: string;
  date?: string;
  children: React.ReactNode;
  url?: string;
  infoUrl?: string;
  logo?:
    | {
        src: ImageProps["src"];
        alt: string;
      }
    | {
        shape: "circle" | "square" | "triangle";
        className: string;
      };
  screenshot?: {
    src: ImageProps["src"];
    alt: string;
  };
}

function ProjectCard({
  title,
  date,
  children,
  url,
  infoUrl,
  logo,
  screenshot,
}: ProjectCardProps) {
  const href = infoUrl ?? url;
  const openInNewTab = !infoUrl;

  const content = (
    <div
      className={classNames(
        "flex flex-col p-4 gap-y-4 border rounded-lg text-base text-black",
        {
          "group-hover:bg-indigo-100 group-hover:border-indigo-200 group-hover:text-indigo-900 group-hover:group-even:rotate-2 group-hover:group-odd:-rotate-2 group-hover:scale-105 transition-all":
            !!href,
        }
      )}
    >
      <div className="flex space-x-4 items-center">
        {logo && "src" in logo && (
          <Image
            className="flex-grow-0 w-12 h-12"
            src={logo.src}
            alt={logo.alt}
          />
        )}
        {logo && "shape" in logo && (
          <svg className="flex-grow-0 w-12 h-12" viewBox="0 0 48 48">
            {logo.shape === "circle" && (
              <circle className={logo.className} cx="24" cy="24" r="20" />
            )}
            {logo.shape === "square" && (
              <rect
                className={logo.className}
                x="0"
                y="0"
                width="48"
                height="48"
                transform="scale(0.8) rotate(10)"
                transform-origin="24 24"
              />
            )}
            {logo.shape === "triangle" && (
              <path
                className={logo.className}
                d="M 24 0 L 48 48 L 0 48 Z"
                transform="scale(0.8) rotate(-10)"
                transform-origin="24 24"
              />
            )}
          </svg>
        )}
        <div className="flex-grow">
          {date && (
            <div
              className={classNames("text-xs text-gray-600", {
                "group-hover:text-indigo-900/70": !!href,
              })}
            >
              {date}
            </div>
          )}
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
      </div>
      {screenshot && (
        <Image
          className={classNames("rounded-lg border", {
            "group-hover:border-indigo-200": !!href,
          })}
          src={screenshot.src}
          alt={screenshot.alt}
        />
      )}
      <div>{children}</div>
    </div>
  );

  if (href) {
    return (
      <Link
        className="group block"
        href={href}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noreferrer" : undefined}
        passHref={true}
      >
        {content}
      </Link>
    );
  } else {
    return <div className="group">{content}</div>;
  }
}
