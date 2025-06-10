import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

describe("Hero", () => {
  it("renders hero heading text", () => {
    render(<Hero />);
    expect(screen.getByLabelText("Olá, eu sou Mateus Oliveira")).toBeInTheDocument();
  });
});
