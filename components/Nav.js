import Link from "next/link";
import classNames from "classnames";
import Wave from "./Wave";

export default function Nav({ current, wavy = true }) {
  return (
    <header className={classNames("bg-indigo-600 relative", { "pb-3": wavy })}>
      <div className="max-w-2xl px-8 py-6 mx-auto flex flex-col space-y-4 xxs:flex-row xxs:space-y-0 items-center justify-between">
        <Link href="/">
          <a className="text-white text-xl font-medium">Josh Pullen</a>
        </Link>

        <nav className="flex items-center space-x-4">
          <NavLink href="/" selected={current === "home"}>
            Home
          </NavLink>
          <NavLink href="/blog" selected={current === "blog"}>
            Blog
          </NavLink>
          <NavLink href="/learn" selected={current === "learn"}>
            Learn
          </NavLink>
        </nav>
      </div>
      {wavy && <Wave />}
    </header>
  );
}

function NavLink({ children, href, selected = false }) {
  return (
    <Link href={href}>
      <a
        className={classNames("text-white px-4 py-2 rounded-lg", {
          "hover:bg-indigo-700": !selected,
          "bg-indigo-800": selected,
        })}
      >
        {children}
      </a>
    </Link>
  );
}
