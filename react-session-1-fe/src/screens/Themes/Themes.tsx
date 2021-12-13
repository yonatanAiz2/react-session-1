import { Spinner } from "../../components/Spinner/Spinner";
import ColorSchemeCard from "./components/ColorSchemaCard/ColorSchemaCard";
import ThemeSideBar from "./components/ThemeSideBar/ThemeSideBar";
import { useFetchThemes } from "./hooks/useFetchThemes";
import * as S from "./Themes.style";

const Themes = () => {
  const { status, themes } = useFetchThemes();
  const isSideBarOpened = false;
  if (status === "idle" || status === "loading") {
    return <Spinner />;
  }

  if (!themes.length) {
    return <h2>no themes yet</h2>;
  }

  return (
    <>
      <S.MainContainer isSideBarOpened={isSideBarOpened}>
        <S.ThemesContainer>
          {themes.map((theme: Theme) => (
            <ColorSchemeCard key={theme.id} {...theme} />
          ))}
        </S.ThemesContainer>
      </S.MainContainer>
      <ThemeSideBar />
    </>
  );
};

export default Themes;
