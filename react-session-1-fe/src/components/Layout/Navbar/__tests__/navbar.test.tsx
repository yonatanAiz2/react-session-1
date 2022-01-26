import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { setupServer } from "msw/node";
import { rest } from "msw";
import Navbar from "../Navbar";
import AuthContextProvider from "../../../../context/AuthContext/AuthContext";
import userEvent from "@testing-library/user-event";

// Dont forget adding the API handlers
const mockServer = setupServer();

beforeAll(() => {
  mockServer.listen();
});

afterAll(() => {
  mockServer.close();
});

const setup = () => {
  return render(
    <BrowserRouter>
      {/* Hint - wrap the component with AuthContextProvider and pass 
      initialState that you need for the test */}
      <Navbar />
    </BrowserRouter>
  );
};

describe("Navbar", () => {
  describe("Logout", () => {
    it("Should not see logout button when not authenticated", () => {});
    it("Should see logout button when authenticated", () => {});
    it("On logout click, should see dialog to approve logout action", () => {});
    it("On dialog cancel should hide dialog", () => {});
    it("On dialog submit, should logout user and close dialog", () => {});
  });
});
