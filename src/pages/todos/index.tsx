import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";
import Link from "next/link";
import React from "react";

// Getserverside prop force the page to be dynamic page
export default function TodoListPage({
  todos,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <ul>
      {todos.map((todo: any) => (
        <li key={todo.id}>
          <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
        </li>
      ))}
    </ul>
  );
}
// GetStatic props run during the build time.
export const getStaticProps = (async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => response.json()
  );
  console.log("static");
  return {
    props: { todos: data },
  };
}) satisfies GetStaticProps;
