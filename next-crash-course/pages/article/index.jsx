import React from 'react'
import {useRouter} from 'next/router'
function Article({article}) {
  console.log("yee",article)
  const router=useRouter();
  const {id} = router.query
  return (
    <div>
      <h1 className='text-[40px]'>{article.title}</h1>
      <div>{article.body}</div>
    </div>
  )
}
export const getServerSideProps = async (context) => {
  const {id} = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log("data",data);
  return {
    props: { article: data },
  };
}
export default Article