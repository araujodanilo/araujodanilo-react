import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import { FooterComponent } from ".";
import { render } from "@testing-library/react";

describe("Footer", () => {
  it("should render", () => {
    const { getByText } = render(<FooterComponent />);
    expect(getByText("Developed with ❤️ by Danilo Araujo.")).toBeInTheDocument();
  });
});
