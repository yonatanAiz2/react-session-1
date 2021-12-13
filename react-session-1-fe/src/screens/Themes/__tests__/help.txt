import { setupServer } from "msw/node";
import { rest } from "msw";
import { themesMock } from "../../../utils/test-utils/mocks/themes";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Themes from "../Themes";

const getThemesMockHandler = (data = themesMock) =>
  rest.get("http://localhost/api/themes", (_, res, ctx) => {
    return res(ctx.json({ data }));
  });

const mockServer = setupServer(getThemesMockHandler());

beforeAll(() => {
  mockServer.listen();
});

afterAll(() => {
  mockServer.close();
});

const setup = () => {
  return render(
    <BrowserRouter>
      <Themes />
    </BrowserRouter>
  );
};

describe("themes", () => {
  it("Should see themes on not empty response", async () => {
    setup();
    expect(screen.getByTestId("container--spinner")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getAllByRole("card")).toHaveLength(themesMock.length);
    });
  });

  it("Should see empty state when empty response", async () => {
    mockServer.use(getThemesMockHandler([]));
    setup();
    expect(screen.getByTestId("container--spinner")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/no themes yet/i)).toBeInTheDocument();
    });
  });
});
