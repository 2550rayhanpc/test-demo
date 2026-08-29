export const metadata = {
  title: "Rayhan Islam | Full-Stack Web Developer",
  description:
    "Building modern, fast, and scalable web applications with Next.js, React, Node.js, and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
