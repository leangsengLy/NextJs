import Link from "next/link";
export default function Home({posts}) {
  console.log("props",posts);
  return (
    <div>
      <h1>Hello world by Ly Leang Seng</h1>
      
      {posts.map(v=> {return ((<><div><Link href={`/article?id=${v.id}`}>{v.title}</Link></div></>))})}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const data = await res.json();
  console.log("data",data);
  return {
    props: { posts: data },
  };
}