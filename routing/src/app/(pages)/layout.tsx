import { NavBar } from "@/components/nav-bar";
import React from "react";

export default function PagesLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />

      {props.children}
    </>
  );
}
