export default function Home() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      backgroundColor: "#0f172a",
      color: "#ffffff"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Hello, I'm Rayhan! 👋
      </h1>
      <p style={{ color: "#94a3b8", fontSize: "1.2rem" }}>
        My Next.js website is up and running without any errors.
      </p>
    </main>
  );
}
