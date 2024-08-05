import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import React from "react";

// Getserverside prop force the page to be dynamic page
export default function TodoListPage({
  todos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
        </li>
      ))}
    </ul>
  );
}
// Getserverside prop force the page to be dynamic page
export const getServerSideProps = (async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => response.json()
  );
  return {
    props: { todos: data },
  };
}) satisfies GetServerSideProps;
