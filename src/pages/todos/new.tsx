import React, { FormEvent, useRef } from "react";

export default function NewTodo() {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({ title: inputRef.current?.value }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Create</button>
    </form>
  );
}
