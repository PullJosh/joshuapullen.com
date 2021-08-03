import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children, current }) {
  return (
    <div className="flex flex-col items-stretch min-h-screen">
      <Nav current={current} />
      <main className="w-full max-w-2xl px-8 mx-auto my-16">{children}</main>
      <Footer />
    </div>
  );
}
