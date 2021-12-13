import { Link } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { colorsArr } from "../../../../utils/colors.constants";
import * as S from "./ColorSchemeCard.style";

const ColorSchemeCard = ({ id, title, ...colors }: Theme) => {
  return (
    <S.CardContainer role="card">
      <S.ColorsContainer>
        {colorsArr.map((color) => (
          <S.Color key={color} color={colors[color]} />
        ))}
      </S.ColorsContainer>
      <S.CardFooter>
        <span>{title}</span>
        <Link to={`/themes/${id}`}>
          <Button colorType="secondary">Open</Button>
        </Link>
      </S.CardFooter>
    </S.CardContainer>
  );
};

export default ColorSchemeCard;

// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ColorSchemaCard from "../ColorSchemaCard";

// const TITLE = "title";

// const setup = () => {
//   return render(
//     <BrowserRouter>
//       <Switch>
//         <Route path={"/themes/:id"} component={() => <div>new route</div>} />
//         <Route
//           path="/"
//           exact
//           component={() => (
//             <ColorSchemaCard
//               id={1}
//               title={TITLE}
//               primary="#eee"
//               secondary="#aaa"
//               text="#000"
//               background="#0a0"
//             />
//           )}
//         />
//       </Switch>
//     </BrowserRouter>
//   );
// };
// describe("Color schema card", () => {
//   it("Component renders with props", () => {
//     setup();

//     expect(screen.getByText(TITLE)).toBeInTheDocument();
//     expect(screen.getByTestId("color--primary")).toHaveStyle(
//       "background-color: #eee"
//     );
//     expect(screen.getByTestId("color--secondary")).toHaveStyle(
//       "background-color: #aaa"
//     );
//   });

//   it("On button click navigate to components id", async () => {
//     setup();

//     expect(screen.queryByText("new route")).toBeNull();
//     const button = screen.getByRole("button", { name: /open/i });
//     userEvent.click(button);

//     expect(screen.getByText("new route")).toBeInTheDocument();
//   });
// });
