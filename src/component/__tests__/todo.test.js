import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../Todo";

test("renders learn react link", () => {
  render(<Todo />);
  const todoElement = screen.getAllByTestId("todo-1");
});

// import React from "react";

// export default function todoTest() {
//   return <div></div>;
// }
