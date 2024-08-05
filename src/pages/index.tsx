import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>This is home page title</title>
      </Head>
      <h1>Home</h1>
      <NestedComponent />
    </>
  );
}

function NestedComponent() {
  return (
    <>
      <Head>
        <title>This is new title</title>
      </Head>
      <h2>Nested</h2>
    </>
  );
}
