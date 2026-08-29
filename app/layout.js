import "./globals.css";

export const metadata = {
  title: "Rayhan Islam | Web Developer",
  description: "Developer portfolio showcasing web projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
