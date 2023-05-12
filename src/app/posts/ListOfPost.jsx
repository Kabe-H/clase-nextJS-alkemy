import Image from "next/image";
import Link from "next/link";

//REACT SERVER COMPONENTS se esta renderizando en el servidor
//fetchin de datos del lado del servidor
const fetchPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

//getStaticProps
// const fetchPost = () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
//     res.json()
//   );
// };

//incremetal static regeneration
// const fetchPost = () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 60 },
//   }).then((res) => res.json());
// };

//getServerSideProps
// const fetchPost = () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache:'no-store',
//   }).then((res) => res.json());
// };

export default async function ListOfPosts() {
  const posts = await fetchPost();
  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2 style={{ color: "#0090af" }}>{post.title}</h2>
        <p>{post.body}</p>
        <Image
          width="100"
          height="100"
          alt={post.title}
          src={`https://avatars.dicebear.com/api/pixel-art/${post.id}.svg`}
        />
      </Link>
    </article>
  ));
}
