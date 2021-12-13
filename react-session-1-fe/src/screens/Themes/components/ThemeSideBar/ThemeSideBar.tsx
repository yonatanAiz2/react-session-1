import * as S from "./ThemeSideBar.style";
import { Link, Route, Switch } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { useAppThemeContext } from "../../../../context/AppThemeContext";
import { colorsArr } from "../../../../utils/colors.constants";

interface Props {
  selectedTheme?: Theme;
}

const Colors = ({ selectedTheme }: Props) => {
  return (
    <>
      {colorsArr.map((color) => {
        return (
          <S.ColorContainer key={color}>
            <S.ColorHeader>
              <h3>{color}</h3>
              <h3>{selectedTheme?.[color]}</h3>
            </S.ColorHeader>
            <S.Color color={selectedTheme?.[color] || ""} />
            <S.ColorFooter>
              <Button>copy</Button>
              <Button>change</Button>
            </S.ColorFooter>
          </S.ColorContainer>
        );
      })}
    </>
  );
};

const SideBarLinks = ({ themeId }: { themeId: number }) => (
  <ul>
    <li>
      <Link to={`/themes/${themeId}`}>Colors</Link>
    </li>
    <li>
      <Link to={`/themes/${themeId}/creator`}>Creator</Link>
    </li>
  </ul>
);

const SideBarHeader = ({ selectedTheme }: Props) => {
  const { updateTheme, resetTheme } = useAppThemeContext();
  return (
    <S.HeaderButtons>
      <div>
        <Button onClick={() => selectedTheme && updateTheme(selectedTheme)}>
          save
        </Button>
        <Button colorType="secondary" onClick={resetTheme}>
          Reset
        </Button>
      </div>
      <Link to="/">X</Link>
    </S.HeaderButtons>
  );
};

const SideBarRoutes = ({ selectedTheme }: Required<Props>) => {
  return (
    <Switch>
      <Route
        path={`/themes/${selectedTheme.id}/creator`}
        component={() => <h3>Creator</h3>}
      />
      <Route
        path={`/themes/${selectedTheme.id}`}
        component={() => <Colors selectedTheme={selectedTheme} />}
      />
    </Switch>
  );
};

const ThemeSideBar = ({ selectedTheme }: Props) => {
  return (
    <S.SideBar isSideBarOpened={!!selectedTheme}>
      {selectedTheme && (
        <>
          <SideBarHeader selectedTheme={selectedTheme} />
          <h2>{selectedTheme?.title}</h2>
          <SideBarLinks themeId={selectedTheme.id} />
          <SideBarRoutes selectedTheme={selectedTheme} />
        </>
      )}
    </S.SideBar>
  );
};

export default ThemeSideBar;
