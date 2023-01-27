import { useRouter } from "next/router";
import React from "react";

export default function JobName() {
  const { query } = useRouter();
  const { name } = query;
  return (
    <div className="container">
      <h1>Name: {name}</h1>
    </div>
  );
}
