import { setupServer } from "msw/node";
import { rest } from "msw";
import { render, screen, waitFor } from "@testing-library/react";
import AddTheme from "../AddTheme";
import userEvent from "@testing-library/user-event";

const addThemeMockFn = jest.fn();

jest.mock("react-router-dom", () => ({
  useHistory: () => {
    return {
      push: jest.fn(),
    };
  },
}));

const mockServer = setupServer(
  rest.post("http://localhost/api/themes", (req, res, ctx) => {
    addThemeMockFn(req.body);
    return res(ctx.status(204));
  })
);

beforeAll(() => {
  mockServer.listen();
});

afterAll(() => {
  mockServer.close();
});

describe("add theme", () => {
  it("Should be able to edit form and submit response", async () => {
    const consoleMock = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<AddTheme />);
    const input = screen.getByLabelText(/theme name/i);
    userEvent.type(input, "my new theme");

    const button = screen.getByRole("button", { name: /submit/i });

    userEvent.click(button);

    await waitFor(() => {
      expect(addThemeMockFn).toBeCalled();
    });

    expect(addThemeMockFn.mock.calls[0][0]).toMatchInlineSnapshot(`
      Object {
        "data": Object {
          "background": "#fff",
          "primary": "#fff",
          "secondary": "#fff",
          "text": "#fff",
          "title": "my new theme",
        },
      }
    `);

    expect(consoleMock).toBeCalledWith("success");
  });
});