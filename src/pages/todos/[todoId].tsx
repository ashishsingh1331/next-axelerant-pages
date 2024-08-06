import Link from "next/link";
import React from "react";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  GetStaticPaths,
  GetStaticProps,
} from "next";

export default function TodoDetialPage({
  todo,
  todoId,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return <h1>Todo - {todo.id}</h1>;
}

export const getStaticPaths = (async () => {
  return { paths: [{ params: { todoId: "1" } }], fallback: "blocking" };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const todoId = params?.todoId;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  ).then((res) => res.json());

  return {
    props: { todo: data, todoId },
    revalidate: 10,
  };
}) satisfies GetStaticProps;
