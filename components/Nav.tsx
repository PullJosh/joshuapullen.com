import Link from "next/link";
import classNames from "classnames";
import Wave from "./Wave";

interface NavProps {
  current: string;
  wavy?: boolean;
  waveClassName?: string;
}

export default function Nav({
  current,
  wavy = true,
  waveClassName = undefined,
}: NavProps) {
  return (
    <header
      className={classNames("bg-indigo-600 relative overflow-hidden", {
        "pb-3": wavy,
      })}
    >
      <div className="max-w-2xl px-8 py-6 mx-auto flex flex-col space-y-4 xxs:flex-row xxs:space-y-0 items-center justify-between">
        <Link
          href="/"
          className="text-white text-xl font-medium underline decoration-transparent hover:decoration-green-400 decoration-wavy decoration-2 pb-1 -mb-1 underline-offset-4 hover:scale-110 hover:-rotate-3 transition-all"
          passHref={true}
        >
          Josh Pullen
        </Link>

        <nav className="flex items-center space-x-4">
          <NavLink href="/" selected={current === "home"}>
            Home
          </NavLink>
          <NavLink href="/blog" selected={current === "blog"}>
            Blog
          </NavLink>
          {/* <NavLink href="/projects" selected={current === "projects"}>
            Projects
          </NavLink> */}
        </nav>
      </div>
      {wavy && <Wave className={waveClassName} />}
    </header>
  );
}

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  selected?: boolean;
}

function NavLink({ children, href, selected = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={classNames("text-white px-4 py-2 rounded-lg", {
        "hover:bg-indigo-700": !selected,
        "bg-indigo-800": selected,
      })}
    >
      {children}
    </Link>
  );
}
