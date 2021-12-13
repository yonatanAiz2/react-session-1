import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spinner";
import ColorSchemeCard from "./components/ColorSchemaCard/ColorSchemaCard";
import Filters from "./components/Filters/Filters";
import ThemeSideBar from "./components/ThemeSideBar/ThemeSideBar";
import { useFetchThemes } from "./hooks/useFetchThemes";
import { useFilterThemes } from "./hooks/useFilterThemes";
import * as S from "./Themes.style";

const Themes = () => {
  const { status, data } = useFetchThemes();
  const { filteredThemes, onFiltersChange } = useFilterThemes(data || []);
  const { id } = useParams<{ id: string }>();

  const isSideBarOpened = !!id;

  if (status === "idle" || status === "loading") {
    return <Spinner />;
  }

  if (!data?.length) {
    return <h2>no themes yet</h2>;
  }

  return (
    <>
      <S.MainContainer isSideBarOpened={isSideBarOpened}>
        <Filters onFiltersChange={onFiltersChange} />
        <S.ThemesContainer>
          {filteredThemes.map((theme: Theme) => (
            <ColorSchemeCard key={theme.id} {...theme} />
          ))}
        </S.ThemesContainer>
      </S.MainContainer>
      <ThemeSideBar
        selectedTheme={filteredThemes.find((theme) => theme.id === Number(id))}
      />
    </>
  );
};

export default Themes;
