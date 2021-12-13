import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";

export const renderWithRouter = (
  children: React.ReactNode,
  options?: RenderOptions
) => {
  return render(<BrowserRouter>{children}</BrowserRouter>, options);
};
