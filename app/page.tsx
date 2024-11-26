import Nav from "../components/Nav";
import Wave from "../components/Wave";
import Footer from "../components/Footer";

import Image, { ImageProps } from "next/image";
import headshot from "../public/images/josh-transparent-bg.png";
import Link from "next/link";

import classNames from "classnames";

const socialLinks = [
  {
    name: "Scratch",
    url: "https://scratch.mit.edu/users/PullJosh/",
    icon: "/images/social-icons/scratch.svg",
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
    name: "BlueSky",
    url: "https://bsky.app/profile/pulljosh.com",
    icon: "/images/social-icons/bluesky.svg",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/PullJosh",
    icon: "/images/social-icons/dribbble.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/joshpullen/",
    icon: "/images/social-icons/linkedin.svg",
  },
];

const projects = [
  {
    id: "3wHTNXzaWsC2N6O6TVKoJW",
    __typename: "Project",
    status: "in-progress",
    importance: "normal",
    name: "Mr. Pullen's Graphing Calculator",
    createdAt: "Fall 2022",
    projectUrl: "https://calculator.mrpullen.com/",
    logo: null,
    shortDescription:
      "A 1D, 2D, and 3D graphing calculator that's great for artistic creation",
    coverImage: {
      __typename: "Asset",
      url: "/images/projects/cover-images/graphing-calculator.png",
      width: 2180,
      height: 1514,
    },
  },
  {
    id: "Eer2i2CctNPU7YjI3BU5H",
    __typename: "Project",
    status: "in-progress",
    importance: "normal",
    name: "Clown School",
    createdAt: "Spring 2022",
    projectUrl: "https://clown-school.mrpullen.com/",
    shortDescription:
      "Simple, interactive, visual explanations of core mathematical ideas",
    logo: {
      __typename: "Asset",
      url: "/images/projects/logos/clown-school.png",
      width: 160,
      height: 160,
    },
    coverImage: {
      __typename: "Asset",
      url: "/images/projects/cover-images/clown-school.jpg",
      width: 1584,
      height: 990,
    },
  },
  {
    id: "EWtvmk91XLdBnrI39pgDH",
    __typename: "Project",
    status: "completed",
    importance: "important",
    name: "3Blue1Brown.com",
    createdAt: "Summer 2021 (Age 19)",
    projectUrl: "https://www.3blue1brown.com/",
    shortDescription:
      "Interactive, online math lessons adapted from 3Blue1Brown's popular YouTube videos",
    logo: {
      __typename: "Asset",
      url: "/images/projects/logos/3blue1brown.svg",
      width: 1000,
      height: 1000,
    },
    coverImage: {
      __typename: "Asset",
      url: "/images/projects/cover-images/3blue1brown.jpg",
      width: 2880,
      height: 1640,
    },
  },
  {
    id: "3wcZs9zmkqJ0Hh3O9WmyE",
    __typename: "Project",
    status: "in-progress",
    importance: "normal",
    name: "Teacher Tools",
    createdAt: "Spring 2021 (Age 19)",
    projectUrl: "https://teacher-tools.joshuapullen.com/",
    logo: null,
    shortDescription: "Collection of useful utilities for teachers",
    coverImage: {
      __typename: "Asset",
      url: "/images/projects/cover-images/teacher-tools.jpg",
      width: 2880,
      height: 1642,
    },
  },
  {
    id: "6ebHg4gKnchLS8MX44NrVz",
    __typename: "Project",
    status: "completed",
    importance: "important",
    name: "Leopard",
    createdAt: "Fall 2018 (Age 16)",
    projectUrl: "https://leopardjs.com/",
    shortDescription:
      "Converts Scratch projects to human-readable JavaScript code automatically",
    logo: {
      __typename: "Asset",
      url: "/images/projects/logos/leopard.svg",
      width: 94,
      height: 84,
    },
    coverImage: {
      __typename: "Asset",
      url: "/images/projects/cover-images/leopard.png",
      width: 750,
      height: 278,
    },
  },
  {
    id: "5Vv5jNMkPWRrSeuKcpwvoa",
    __typename: "Project",
    status: "completed",
    importance: "normal",
    name: "Online Math League Website",
    createdAt: "Summer 2018 (Age 16)",
    projectUrl: null,
    logo: null,
    shortDescription:
      "Website where Online Math League teams can submit and view their scores and take practice math tests",
    coverImage: {
      __typename: "Asset",
      url: "/images/projects/cover-images/online-math-league.jpg",
      width: 2768,
      height: 1332,
    },
  },
  {
    id: "7xwYCTc5q0QB53V3h727iT",
    __typename: "Project",
    status: "completed",
    importance: "normal",
    name: "Third Grade Math Games",
    createdAt: "Winter 2017 (Age 16)",
    projectUrl: "https://pulljosh.github.io/thirdgrademathgames/",
    logo: null,
    shortDescription: "A collection of math games for 3rd grade students",
    coverImage: {
      __typename: "Asset",
      url: "/images/projects/cover-images/third-grade-math-games.jpg",
      width: 2064,
      height: 1238,
    },
  },
  {
    id: "1mpNHrn5JQsdUOqS9t0r1s",
    __typename: "Project",
    status: "completed",
    importance: "normal",
    name: "Kids Technology Camps",
    createdAt: "Summer 2016 (Age 14)",
    projectUrl: null,
    logo: null,
    shortDescription:
      "Scratch, web development, and robotics summer camps right here in Michigan",
    coverImage: {
      __typename: "Asset",
      url: "/images/projects/cover-images/tech-camps.jpg",
      width: 3264,
      height: 1836,
    },
  },
  {
    id: "6mBs6Jn93MB3Wp6vZ2NBzT",
    __typename: "Project",
    status: "completed",
    importance: "important",
    name: "Rocket Spelling",
    createdAt: "Spring 2016 (Age 14)",
    projectUrl: "https://www.rocketspelling.com/",
    shortDescription: "An online spelling game for elementary students",
    logo: {
      __typename: "Asset",
      url: "/images/projects/logos/rocket-spelling.svg",
      width: 64,
      height: 64,
    },
    coverImage: {
      __typename: "Asset",
      url: "/images/projects/cover-images/rocket-spelling.jpg",
      width: 2880,
      height: 1642,
    },
  },
];

export default async function Index() {
  return (
    <>
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
              {socialLinks.map((link, i) => (
                <li key={link.name} className="inline-block">
                  <a
                    href={link.url}
                    className="group block p-2 text-indigo-400 hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className={classNames(
                        "w-7 h-7 sm:w-8 sm:h-8 object-contain group-hover:brightness-200 group-hover:scale-110 transition-transform",
                        {
                          "group-hover:-rotate-6": i % 2 === 0,
                          "group-hover:rotate-6": i % 2 === 1,
                        }
                      )}
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
            {projects
              .filter(
                (project) =>
                  project.importance === "important" &&
                  project.status === "completed"
              )
              .map((project) => (
                <ProjectCardFromGraphQL key={project.id} project={project} />
              ))}
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
              {projects
                .filter((project) => project.status === "in-progress")
                .map((project) => (
                  <ProjectCardFromGraphQL key={project.id} project={project} />
                ))}
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
            {projects
              .filter(
                (project) =>
                  project.importance !== "important" &&
                  project.status === "completed"
              )
              .map((project) => (
                <ProjectCardFromGraphQL key={project.id} project={project} />
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

interface ProjectCardProps {
  title: string;
  createdAt: string;
  children: React.ReactNode;
  url?: string;
  infoUrl?: string;
  logo?:
    | {
        src: ImageProps["src"];
        alt: string;
        width?: number;
        height?: number;
      }
    | {
        shape: "circle" | "square" | "triangle";
        className: string;
      };
  screenshot?: {
    src: ImageProps["src"];
    alt: string;
    width?: number;
    height?: number;
  };
}

function ProjectCard({
  title,
  createdAt,
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
            width={logo.width}
            height={logo.height}
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
          <div
            className={classNames("text-xs text-gray-600", {
              "group-hover:text-indigo-900/70": !!href,
            })}
          >
            {createdAt}
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
      </div>
      {screenshot && (
        <Image
          className={classNames("rounded-lg border", {
            "group-hover:border-indigo-200": !!href,
          })}
          src={screenshot.src}
          width={screenshot.width}
          height={screenshot.height}
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

function ProjectCardFromGraphQL({
  project,
}: {
  project: {
    id: string;
    name: string;
    createdAt: string;
    projectUrl: string | null;
    logo: { url: string; width: number; height: number } | null;
    coverImage: { url: string; width: number; height: number };
    shortDescription: string;
  };
}) {
  return (
    <ProjectCard
      key={project.id}
      title={project.name}
      createdAt={project.createdAt}
      url={project.projectUrl ?? undefined}
      logo={
        project.logo
          ? {
              src: project.logo.url,
              width: project.logo.width,
              height: project.logo.height,
              alt: `${project.name} Logo`,
            }
          : undefined
      }
      screenshot={
        project.coverImage
          ? {
              src: project.coverImage.url,
              width: project.coverImage.width,
              height: project.coverImage.height,
              alt: `${project.name} Screenshot`,
            }
          : undefined
      }
    >
      {project.shortDescription}
    </ProjectCard>
  );
}
