import "../styles/globals.css";

export const metadata = {
  title: "Josh Pullen",
  // description: "Hi! I'm Josh Pullen. I love education and technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
