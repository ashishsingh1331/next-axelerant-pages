import Link from "next/link";
import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function TodoDetialPage({
  todo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <h1>Todo - {todo.id}</h1>;
}
// Getserverside prop force the page to be dynamic page
export const getServerSideProps = (async ({ params }) => {
  const todoId = params?.todoId;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  ).then((response) => response.json());

  if (data.id == null) {
    return { notFound: true };
  }
  return {
    props: { todo: data },
  };
}) satisfies GetServerSideProps;
