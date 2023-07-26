import Nav from "../components/Nav";
import Wave from "../components/Wave";
import Footer from "../components/Footer";

import Image, { ImageProps } from "next/image";
import headshot from "../public/images/josh-transparent-bg.png";
import Link from "next/link";

import classNames from "classnames";

import { cacheExchange, createClient, fetchExchange, gql } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";
import { FragmentType, graphql, useFragment } from "../gql";

const makeClient = () => {
  return createClient({
    url: process.env.CONTENTFUL_GRAPHQL_ENDPOINT!,
    fetchOptions: () => ({
      headers: {
        authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    }),
    exchanges: [cacheExchange, fetchExchange],
  });
};

const { getClient } = registerUrql(makeClient);

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
    name: "Threads",
    url: "https://www.threads.net/@joshpullen27",
    icon: "/images/social-icons/threads.svg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/PullJosh",
    icon: "/images/social-icons/twitter.svg",
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

export default async function Index() {
  const result = await getClient().query(projectsQuery, {});

  const projects = result.data?.projectCollection?.items ?? [];

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
            {projects
              .filter(
                (project) =>
                  project!.importance === "important" &&
                  project!.status === "completed"
              )
              .map((project) => (
                <ProjectCardFromGraphQL
                  key={project!.sys.id}
                  project={project!}
                />
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
                .filter((project) => project!.status === "in-progress")
                .map((project) => (
                  <ProjectCardFromGraphQL
                    key={project!.sys.id}
                    project={project!}
                  />
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
                  project!.importance !== "important" &&
                  project!.status === "completed"
              )
              .map((project) => (
                <ProjectCardFromGraphQL
                  key={project!.sys.id}
                  project={project!}
                />
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
  createdAt?: Date;
  showAge?: boolean | "auto";
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

function dateSeason(date: Date) {
  const month = date.getMonth();
  const season = {
    0: "Winter", // January
    1: "Winter", // February
    2: "Spring", // March
    3: "Spring", // April
    4: "Spring", // May
    5: "Summer", // June
    6: "Summer", // July
    7: "Summer", // August
    8: "Fall", // September
    9: "Fall", // October
    10: "Fall", // November
    11: "Winter", // December
  }[month];

  return season;
}

function ProjectCard({
  title,
  createdAt,
  showAge = "auto",
  children,
  url,
  infoUrl,
  logo,
  screenshot,
}: ProjectCardProps) {
  const href = infoUrl ?? url;
  const openInNewTab = !infoUrl;

  let dateStr = `${dateSeason(createdAt!)} ${createdAt!.getFullYear()}`;

  // How old I was when I made this project
  const myBirthday = new Date(2001, 9, 27);
  const age = Math.floor(
    (createdAt!.getTime() - myBirthday.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
  if (showAge === true || (showAge === "auto" && age < 20)) {
    dateStr += ` (Age ${age})`;
  }

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
          {dateStr && (
            <div
              className={classNames("text-xs text-gray-600", {
                "group-hover:text-indigo-900/70": !!href,
              })}
            >
              {dateStr}
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
  project: p,
}: {
  project: FragmentType<typeof projectFragment>;
}) {
  const project = useFragment(projectFragment, p);

  return (
    <ProjectCard
      key={project!.sys.id}
      title={project!.name!}
      createdAt={project!.createdAt ? new Date(project!.createdAt) : undefined}
      url={project!.projectUrl!}
      logo={
        project!.logo
          ? {
              src: project!.logo.url!,
              width: project!.logo.width!,
              height: project!.logo.height!,
              alt: `${project!.name} Logo`,
            }
          : undefined
      }
      screenshot={
        project!.coverImage
          ? {
              src: project!.coverImage.url!,
              width: project!.coverImage.width!,
              height: project!.coverImage.height!,
              alt: `${project!.name} Screenshot`,
            }
          : undefined
      }
    >
      {project!.shortDescription}
    </ProjectCard>
  );
}

const projectFragment = graphql(`
  fragment ProjectFragment on Project {
    sys {
      id
    }
    name
    createdAt
    projectUrl
    logo {
      url
      width
      height
    }
    status
    importance
    coverImage {
      url
      width
      height
    }
    shortDescription
  }
`);

const projectsQuery = graphql(`
  query GetProjects {
    projectCollection(order: createdAt_DESC) {
      items {
        sys {
          id
        }
        status
        importance
        ...ProjectFragment
      }
    }
  }
`);
