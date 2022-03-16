import React from "react";
import { render } from "@testing-library/react";
import  Book from "../Book";

describe("App Component", function () {
  it("should have hello world message", function () {
    const { getByText } = render(<Book/>);
    expect(getByText("Hello world React!")).toMatchInlineSnapshot(`
      <h1>
        Hello world React!
      </h1>
    `);
  });
});