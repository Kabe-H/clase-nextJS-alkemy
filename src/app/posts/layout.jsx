export default function PostLayout({ children }) {
  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ padding: "50px" }}>Este es el layout de los posts</h1>
      <div>{children}</div>
    </div>
  );
}
